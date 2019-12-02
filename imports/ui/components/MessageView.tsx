import React from 'react';
import { Tracker } from 'meteor/tracker';
import moment from 'moment';
import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';

import StyledMessageView from '../elements/StyledMessageView';
import Header from './Header';
import MessageBox from './MessageBox';
import Avatar from './Avatar';
import Footer from './Footer';
import Modal from './Modal';
import { Chat, Message, MessageType, Iicon, IMsgViewState } from '../../api/models';
import { MessagesCollection } from '../../api/messages';
import { uploadFile, findOtherId } from '../../api/helpers';

let fileInput:any;

const MessageView = (props:any):JSX.Element => {
    const icons:Iicon[] = [
        { name: "search", func: ()=>{}}, 
        { name: "paperclip", func: ()=> {handlePaperClick()}}, 
        {name: "ellipsis-v", func: ()=> {}}
    ];
    const initialState:IMsgViewState = {
        modalVisible: false,
        selectedImage: "",
        fabVisible: false
    }
    const [state, setState] = React.useState<IMsgViewState>(initialState);
    const { modalVisible, selectedImage, fabVisible } = state;
    let messages:Message[];
    const selectedChat:Chat = props.selectedChat;
    Tracker.autorun(() => {
        messages = MessagesCollection.find({ chatId: selectedChat._id}).fetch();
    });
    const handlePaperClick = () => {
        setState(prevState => {
            return {
                ...prevState,
                fabVisible: !prevState.fabVisible
            }
        })
    }
    const handleSend = (content:string, type:MessageType):void => {
        const message:Message = {
            chatId: selectedChat._id,
            content,
            createdAt: moment().toDate(),
            type,
            senderId: Meteor.userId(),
            read: false
        };
        if(modalVisible) {
            setState(prevState => {
                return {
                    ...prevState,
                    modalVisible: false,
                    fabVisible: false
                }
            })
        }
        Meteor.call('messages.insert', message, (err, res)=> {
            if(res) {
                console.log('res', res);
                uploadFile(fileInput, true);
                Tracker.autorun(() => {
                    const imageUrl:string = Session.get("wp_imageUrl");
                    if(imageUrl && message.type === "image") {
                        Meteor.call("messages.update", res, imageUrl, (error, success)=> {
                            if(error) {
                                console.log('error update message', error);
                            } else {
                                console.log('success', success);
                            }
                        })
                    }
                })
            } else {
                console.log('err', err);
            }
        });

    }
    const handleFabItemClick = ():void => {
        const myInput:any = document.getElementById('fileupload');
        console.log('myInput', myInput);
        myInput.click();
    }
    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>):void => {
        console.log('value',e.target.files[0]);
        fileInput = e.target.files[0];
        if(fileInput) {
            setState(prevState => {
                return {
                    ...prevState,
                    modalVisible: true
                }
            })
            let reader = new FileReader();
            reader.onload = function(e) {
                console.log('e', e.target.result);
                setState(prevState => {
                    return {
                        ...prevState,
                        selectedImage: e.target.result
                    }
                })
            }
            reader.readAsDataURL(fileInput);
        }
    }
    const handleClose = ():void => {
        setState(prevState => {
            return {
                ...prevState,
                modalVisible: false,
                fabVisible: false
            }
        })
    }
    const avatarClick = ():void => {
        const otherId:string = findOtherId(selectedChat.participants);
        props.onAvatarClick(otherId);
    }
    return (
        <StyledMessageView >
            <Header otherProfile={props.otherProfile} iconClass="greyIcon" icons={icons}>
                <Avatar 
                    onAvatarClick={avatarClick} 
                    size="4" 
                    avatar_url={selectedChat.picture} 
                />
                <div className="headerMsg--container">
                    <span className="headerMsg--title">{selectedChat.title}</span>
                    <span className="headerMsg--sbTitle">en ligne</span>
                </div>
            </Header>
            {modalVisible ? (
                <Modal 
                    sendImage={handleSend}
                    onClose={handleClose} 
                    selectedImage={selectedImage} 
                />
            ) : (
                <>
                    <MessageBox 
                        messages={messages} 
                        selectedChat={props.selectedChat} 
                        fabVisible={fabVisible}
                        onFabItemClick={handleFabItemClick} 
                        onInputChange={handleInputChange} 
                        otherProfile={props.otherProfile}
                        onMessageClick={props.onMessageClick}
                    />
                    <Footer 
                        otherProfile={props.otherProfile}
                        onSend={handleSend} 
                    />
                </>
            )}
        </StyledMessageView>
    )
}

export default MessageView;
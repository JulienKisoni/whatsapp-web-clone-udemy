import React from 'react';
import { Tracker } from 'meteor/tracker';
import moment from 'moment';
import { Meteor } from 'meteor/meteor';

import StyledMessageView from '../elements/StyledMessageView';
import Header from './Header';
import MessageBox from './MessageBox';
import Avatar from './Avatar';
import Footer from './Footer';
import Modal from './Modal';
import { Chat, Message, MessageType } from '../../api/models';
import { MessagesCollection } from '../../api/messages';

let fileInput:any;

const MessageView = (props:any):JSX.Element => {
    const icons:any[] = [
        { name: "search", func: ()=>{}}, 
        { name: "paperclip", func: ()=> {handlePaperClick()}}, 
        {name: "ellipsis-v", func: ()=> {}}
    ];
    const [modalVisibe, setModalVisible] = React.useState<boolean>(false);
    const [selectedImage, setSelectedImage] = React.useState<any>("");
    const [fabVisible, setFabVisible] = React.useState<boolean>(false);
    let messages:Message[];
    const selectedChat:Chat = props.selectedChat;
    Tracker.autorun(() => {
        messages = MessagesCollection.find({ chatId: selectedChat._id}).fetch()
    });
    const handlePaperClick = () => {
        setFabVisible(!fabVisible);
    }
    const handleSend = (content:string):void => {
        const message:Message = {
            chatId: selectedChat._id,
            content,
            createdAt: moment().toDate(),
            type: MessageType.TEXT,
            senderId: Meteor.userId()
        };
        Meteor.call('messages.insert', message, (err, res)=> {
            if(res) {
                console.log('res', res);
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
    const handleInputChange = (e:any):void => {
        console.log('value',e.target.files[0]);
        fileInput = e.target.files[0];
        if(fileInput) {
            setModalVisible(true);
            let reader = new FileReader();
            reader.onload = function(e) {
                console.log('e', e.target.result);
                setSelectedImage(e.target.result);
            }
            reader.readAsDataURL(fileInput);
        }
    }
    const handleClose = ():void => {
        setModalVisible(false);
        setFabVisible(false);
    }
    return (
        <StyledMessageView>
            <Header iconClass="greyIcon" icons={icons}>
                <Avatar size="4" avatar_url={selectedChat.picture} />
                <div className="headerMsg--container">
                    <span className="headerMsg--title">{selectedChat.title}</span>
                    <span className="headerMsg--sbTitle">en ligne</span>
                </div>
            </Header>
            {modalVisibe ? (
                <Modal onClose={handleClose} selectedImage={selectedImage} />
            ) : (
                <>
                    <MessageBox 
                        messages={messages} 
                        selectedChat={props.selectedChat} 
                        fabVisible={fabVisible}
                        onFabItemClick={handleFabItemClick} 
                        onInputChange={handleInputChange} 
                    />
                    <Footer onSend={handleSend} />
                </>
            )}
        </StyledMessageView>
    )
}

export default MessageView;
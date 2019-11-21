import React from 'react';
import { Tracker } from 'meteor/tracker';
import moment from 'moment';
import { Meteor } from 'meteor/meteor';

import StyledMessageView from '../elements/StyledMessageView';
import Header from './Header';
import MessageBox from './MessageBox';
import Avatar from './Avatar';
import Footer from './Footer';
import { Chat, Message, MessageType } from '../../api/models';
import { MessagesCollection } from '../../api/messages';

const MessageView = (props:any):JSX.Element => {
    const icons:any[] = [
        { name: "search", func: ()=>{}}, 
        { name: "paperclip", func: ()=> {handlePaperClick()}}, 
        {name: "ellipsis-v", func: ()=> {}}
    ];
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
    return (
        <StyledMessageView>
            <Header iconClass="greyIcon" icons={icons}>
                <Avatar size="4" avatar_url={selectedChat.picture} />
                <div className="headerMsg--container">
                    <span className="headerMsg--title">{selectedChat.title}</span>
                    <span className="headerMsg--sbTitle">en ligne</span>
                </div>
            </Header>
            <MessageBox 
                messages={messages} 
                selectedChat={props.selectedChat} 
                fabVisible={fabVisible}
            />
            <Footer onSend={handleSend} />
        </StyledMessageView>
    )
}

export default MessageView;
import React from 'react';
import FontAwesome from 'react-fontawesome';

import StyledMessageView from '../elements/StyledMessageView';
import Header from './Header';
import MessageBox from './MessageBox';
import Avatar from './Avatar';
import Footer from './Footer';
import { Chat } from '../../api/models';

const avatar_url:string = "https://randomuser.me/api/portraits/thumb/men/1.jpg";

const MessageView = (props:any):JSX.Element => {
    const selectedChat:Chat = props.selectedChat;
    return (
        <StyledMessageView>
            <Header iconClass="greyIcon" icons={["search", "paperclip", "ellipsis-v"]}>
                <Avatar size="4" avatar_url={selectedChat.picture} />
                <div className="headerMsg--container">
                    <span className="headerMsg--title">{selectedChat.title}</span>
                    <span className="headerMsg--sbTitle">en ligne</span>
                </div>
            </Header>
            <MessageBox selectedChat={props.selectedChat} />
            <Footer />
        </StyledMessageView>
    )
}

export default MessageView;
import React from 'react';

import StyledLeft from '../elements/StyledLeft';
import Header from './Header';
import LeftStatus from './LeftStatus';
import Searchbar from './Searchbar';
import ChatList from './ChatList';
import Avatar from './Avatar';

const avatar_url:string = "https://randomuser.me/api/portraits/thumb/men/1.jpg";
const icons:string[] = ["circle-notch", "comment-alt", "ellipsis-v"];

const Left = (props:any):JSX.Element => {
    const { onChatClick, chats, selectedChat } = props;
    return (
        <StyledLeft>
            <Header iconClass="greyIcon" icons={icons}>
                <Avatar size="4" avatar_url={avatar_url} />
            </Header>
            <LeftStatus />
            <Searchbar />
            <ChatList 
                chats={chats} 
                onChatClick={onChatClick} 
                selectedChat={selectedChat}
            />
        </StyledLeft>
    )
};

export default Left;
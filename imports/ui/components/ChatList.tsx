import React from 'react';

import StyledChatList from '../elements/StyledChatList';
import ChatItem from './ChatItem';

const ChatList = (props:any):JSX.Element => {
    return (
        <StyledChatList>
            <ChatItem />
            <ChatItem />
            <ChatItem />
            <ChatItem />
            <ChatItem />
            <ChatItem />
            <ChatItem />
            <ChatItem />
            <ChatItem />
            <ChatItem />
        </StyledChatList>
    )
}

export default ChatList;

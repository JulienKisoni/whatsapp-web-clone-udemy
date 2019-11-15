import React from 'react';

import StyledChatList from '../elements/StyledChatList';
import ChatItem from './ChatItem';

const ChatList = (props:any):JSX.Element => {
    const { onChatClick, selectedChat, chats } = props;
    const renderChatItem = ():JSX.Element[] => {
        return chats.map(chat => {
            const active:boolean = selectedChat._id === chat._id;
            return (
                <ChatItem 
                    key={chat._id}
                    {...chat}
                    onChatClick={onChatClick}
                    active={active}
                />
            )
        });
    }
    return (
        <StyledChatList>
            {renderChatItem()}
        </StyledChatList>
    )
}

export default ChatList;

import React from 'react';

import StyledChatList from '../elements/StyledChatList';
import ChatItem from './ChatItem';

import { chats } from '../../api/models';

const ChatList = (props:any):JSX.Element => {
    const { onChatClick } = props;
    const renderChatItem = ():JSX.Element[] => {
        return chats.map(chat => {
            return (
                <ChatItem 
                    key={chat._id}
                    {...chat}
                    onChatClick={onChatClick}
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

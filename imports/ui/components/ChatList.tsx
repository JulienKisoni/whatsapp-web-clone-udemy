import React from 'react';

import StyledChatList from '../elements/StyledChatList';
import ChatItem from './ChatItem';

import { messages } from '../../api/models';

const ChatList = (props:any):JSX.Element => {
    const { onChatClick } = props;
    const renderChatItem = ():JSX.Element[] => {
        return messages.map(message => {
            return (
                <ChatItem 
                    key={message._id}
                    {...message}
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

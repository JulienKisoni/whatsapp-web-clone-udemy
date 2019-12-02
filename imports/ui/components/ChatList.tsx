import React from 'react';
import FlipMove from 'react-flip-move';

import StyledChatList from '../elements/StyledChatList';
import ChatItem from './ChatItem';
import {Chat} from '../../api/models';

const ChatList = (props : any) : JSX.Element => {
    const {onChatClick, selectedChat, chats } = props;
    const renderChatItem = () : JSX.Element[] => {
        return chats.sort(function (a : Chat, b : Chat) {
            // Turn your strings into dates, and then subtract them to get a value that is
            // either negative, positive, or zero.
            return b
                .lastMessage
                .createdAt
                .getTime() - a
                .lastMessage
                .createdAt
                .getTime();
        }).map((chat : Chat) => {
            const active : boolean = selectedChat._id === chat._id;
            return (
                <React.Fragment key={chat._id}>
                    <ChatItem 
                        {...chat} 
                        onChatClick={onChatClick} 
                        active={active}
                    />
                </React.Fragment>
            )
        });
    }
    return (
        <StyledChatList>
            <FlipMove>
                {renderChatItem()}
            </FlipMove>
        </StyledChatList>
    )
}

export default ChatList;

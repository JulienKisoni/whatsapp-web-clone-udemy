import React from 'react';
import _ from 'lodash';
import uuid from 'uuid';
import {ThemeProvider} from 'styled-components';

import StyledMain from '../elements/StyledMain';
import Right from './Right';
import Left from './Left';
import NormalTheme from '../../theme/NormalTheme';

import {chats, Chat, messages, Message, MessageType} from '../../api/models';
import moment from 'moment';

const Main = (props : any) : JSX.Element => {
    const [visible,
        setVisible] = React.useState < boolean > (false);
    const [chatArray,
        setChats] = React.useState < Chat[] > ([...chats]);
    const [selectedChat,
        setSelectedChat] = React.useState < Chat > (chatArray[0]);
    const [messageArray,
        setMessages] = React.useState < Message[] > ([...messages]);
    console.log('selected chat before', selectedChat);
    const handleChatClick = (_id : string) : void => {
        if (!visible) {
            setVisible(true);
        }
        const newChat : Chat = _.find(chatArray, {_id});
        setSelectedChat(newChat);
        console.log('selected chat after', selectedChat);
    }
    const handleSend = (content : string) : void => {
        setMessages((prevMessages) => {
            return [
                ...prevMessages, {
                    _id: uuid.v4(),
                    chatId: selectedChat._id,
                    content,
                    createdAt: moment().toDate(),
                    type: MessageType.TEXT
                }
            ];
        })
    }
    return (
        <ThemeProvider theme={NormalTheme}>
            <StyledMain>
                <Left
                    selectedChat={selectedChat}
                    chats={chatArray}
                    onChatClick={handleChatClick}/>
                <Right
                    selectedChat={selectedChat}
                    visible={visible}
                    onSend={handleSend}
                    messages={messageArray}/>
            </StyledMain>
        </ThemeProvider>
    )
}

export default Main;
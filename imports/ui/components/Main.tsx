import React from 'react';
import _ from 'lodash';
import uuid from 'uuid';
import { Tracker } from 'meteor/tracker';
import { Meteor } from 'meteor/meteor';
import StyledMain from '../elements/StyledMain';
import Right from './Right';
import Left from './Left';

import {chats, Chat, messages, Message, MessageType} from '../../api/models';
import moment from 'moment';

import { findChats } from '../../api/helpers';

const Main = (props : any) : JSX.Element => {
    let chatsReady:boolean;
        Tracker.autorun(() => {
            chatsReady = Meteor.subscribe('Chats.Mine').ready();
            console.log('theChats', findChats());
            console.log('chatsReady', chatsReady);
        });

    const [visible,
        setVisible] = React.useState<boolean>(false);
    const [selectedChat,
        setSelectedChat] = React.useState<Chat>({});
    const [messageArray,
        setMessages] = React.useState<Message[]>([...messages]);
    console.log('selected chat before', selectedChat);
    const handleChatClick = (_id : string):void => {
        if (!visible) {
            setVisible(true);
        }
        const newChat : Chat = _.find(findChats(), {_id});
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
            <StyledMain>
                <Left
                    chatsLoading={!chatsReady}
                    selectedChat={selectedChat}
                    chats={findChats()}
                    onChatClick={handleChatClick}/>
                <Right
                    right
                    selectedChat={selectedChat}
                    visible={visible}
                    onSend={handleSend}
                    messages={messageArray}/>
            </StyledMain>
    )
}

export default Main;
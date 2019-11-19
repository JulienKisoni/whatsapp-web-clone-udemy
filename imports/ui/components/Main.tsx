import React from 'react';
import _ from 'lodash';
import { Tracker } from 'meteor/tracker';
import { Meteor } from 'meteor/meteor';
import StyledMain from '../elements/StyledMain';
import Right from './Right';
import Left from './Left';

import { Chat } from '../../api/models';

import { findChats } from '../../api/helpers';

const Main = (props : any) : JSX.Element => {
    let chatsReady:boolean;
        Tracker.autorun(() => {
            chatsReady = Meteor.subscribe('Chats.Mine').ready();
            Meteor.subscribe('messages.all');
            console.log('theChats', findChats());
            console.log('chatsReady', chatsReady);
        });

    const [visible,
        setVisible] = React.useState<boolean>(false);
    const [selectedChat,
        setSelectedChat] = React.useState<Chat>({});

    console.log('selected chat before', selectedChat);
    const handleChatClick = (_id : string):void => {
        if (!visible) {
            setVisible(true);
        }
        const newChat : Chat = _.find(findChats(), {_id});
        setSelectedChat(newChat);
        console.log('selected chat after', selectedChat);
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
                    />
            </StyledMain>
    )
}

export default Main;
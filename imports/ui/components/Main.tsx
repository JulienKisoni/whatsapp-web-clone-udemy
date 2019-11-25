import React from 'react';
import _ from 'lodash';
import { Tracker } from 'meteor/tracker';
import { Meteor } from 'meteor/meteor';
import StyledMain from '../elements/StyledMain';
import Right from './Right';
import Left from './Left';

import { Chat } from '../../api/models';

import { findChats } from '../../api/helpers';
import OtherProfile from './OtherProfile';

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
    const [otherProfile, setOtherProfile] = React.useState<any>({});

    console.log('selected chat before', selectedChat);
    const handleChatClick = (_id : string):void => {
        if (!visible) {
            setVisible(true);
        }
        if(otherProfile.visible) {
            handleCloseOP();
        }
        const newChat : Chat = _.find(findChats(), {_id});
        setSelectedChat(newChat);
        console.log('selected chat after', selectedChat);
    }
    const handleAvatarClick = (otherId:string):void => {
        setOtherProfile({
            visible: true,
            otherId
        });
    }
    const handleCloseOP = ():void => {
        setOtherProfile({
            visible: false,
            otherId: ""
        });
    }
    return (
            <StyledMain>
                <Left
                    otherProfile={otherProfile.visible}
                    chatsLoading={!chatsReady}
                    selectedChat={selectedChat}
                    chats={findChats()}
                    onChatClick={handleChatClick}/>
                <Right
                    otherProfile={otherProfile.visible}
                    right
                    selectedChat={selectedChat}
                    visible={visible}
                    onAvatarClick={handleAvatarClick}
                    />
                {otherProfile.visible ? (
                    <OtherProfile 
                        otherId={otherProfile.otherId} 
                        onClose={handleCloseOP} 
                    />
                ):null}
            </StyledMain>
    )
}

export default Main;
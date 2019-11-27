import React from 'react';
import _ from 'lodash';
import { Tracker } from 'meteor/tracker';
import { Meteor } from 'meteor/meteor';
import StyledMain from '../elements/StyledMain';
import Right from './Right';
import Left from './Left';

import { Chat, MessageType } from '../../api/models';

import { findChats } from '../../api/helpers';
import OtherProfile from './OtherProfile';
import BigOverlay from './BigOverlay';
import { ChatsCollection } from '../../api/chats';
import moment from 'moment';
import Popup from './Popup';

const Main = (props : any) : JSX.Element => {
    let chatsReady:boolean;
        Tracker.autorun(() => {
            chatsReady = Meteor.subscribe('Chats.Mine').ready();
            Meteor.subscribe('messages.all');
            // console.log('chatsReady', chatsReady);
            // if(chatsReady) {
            //     console.log('theChats 2', findChats());
            // }
        });

    const [visible,
        setVisible] = React.useState<boolean>(false);
    const [selectedChat,
        setSelectedChat] = React.useState<Chat>({});
    const [otherProfile, setOtherProfile] = React.useState<any>({});
    const [bigOverlayVisible, setBigOverlayVisible] = React.useState<boolean>(false);

    // console.log('selected chat before', selectedChat);
    const handleChatClick = (_id : string):void => {
        if (!visible) {
            setVisible(true);
        }
        if(otherProfile.visible) {
            handleCloseOP();
        }
        const newChat : Chat = _.find(findChats(), {_id});
        setSelectedChat(newChat);
        // console.log('selected chat after', selectedChat);
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
    const handleUserItemClick = (userId:string):void => {
        const chat:Chat = ChatsCollection.findOne({
            participants: {
                $in: [userId]
            }
        });
        if(chat) {
            handleChatClick(chat._id);
        } else {
            // const chatId:string = Meteor.call('chats.create', userId);
            handleChatClick(ChatsCollection.insert({
                title: "",
                picture: "",
                participants: [Meteor.userId(), userId],
                lastMessage: {
                    content: "",
                    createdAt: moment().toDate(),
                    type: MessageType.TEXT
                }
            }))
        }
    }
    return (
            <StyledMain>
                <Left
                    otherProfile={otherProfile.visible}
                    chatsLoading={!chatsReady}
                    selectedChat={selectedChat}
                    chats={findChats()}
                    onChatClick={handleChatClick}
                    onUserItemClick={handleUserItemClick}
                    />
                <Right
                    otherProfile={otherProfile.visible}
                    right
                    selectedChat={selectedChat}
                    visible={visible}
                    onAvatarClick={handleAvatarClick}
                    />
                {bigOverlayVisible ? (
                        <BigOverlay>
                            <Popup />
                        </BigOverlay>
                    ) : null }
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
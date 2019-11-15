import React from 'react';
import _ from 'lodash';

import StyledMain from '../elements/StyledMain';
import Right from './Right';
import Left from './Left';

import { chats, Chat } from '../../api/models';

const Main = (props:any): JSX.Element => {
    const [visible, setVisible] = React.useState<boolean>(false);
    const [chatArray, setChats] = React.useState<Chat[]>([...chats]);
    const [selectedChat, setSelectedChat] = React.useState<any>(chatArray[0]);
    console.log('selected chat before', selectedChat);
    const handleChatClick = (_id:string):void => {
        if(!visible) {
            setVisible(true);
        }
        const newChat:Chat = _.find(chatArray, { _id });
        setSelectedChat(newChat);
        console.log('selected chat after', selectedChat);
    }
    return (
        <StyledMain>
            <Left 
                selectedChat={selectedChat} 
                chats={chats}
                onChatClick={handleChatClick}
            />
            <Right 
                selectedChat={selectedChat} 
                visible={visible} 
            />
        </StyledMain>
    )
}

export default Main;
import React from 'react';
import { Meteor } from 'meteor/meteor';

import StyledLeft from '../elements/StyledLeft';
import Header from './Header';
import LeftStatus from './LeftStatus';
import Searchbar from './Searchbar';
import ChatList from './ChatList';
import Avatar from './Avatar';

const avatar_url:string = "https://randomuser.me/api/portraits/thumb/men/1.jpg";
const icons:any[] = [
    { name: "circle-notch", func: ()=>{}}, 
    { name: "comment-alt", func: ()=> {}}, 
    {name: "ellipsis-v", func: ()=> {}}
];

const Left = (props:any):JSX.Element => {
    const { onChatClick, chats, selectedChat, chatsLoading } = props;
    return (
        <StyledLeft>
            <Header iconClass="greyIcon" icons={icons}>
                <Avatar avatar_url={Meteor.user().profile.picture} />
            </Header>
            <LeftStatus />
            <Searchbar />
            <ChatList 
                chatsLoading={chatsLoading}
                chats={chats} 
                onChatClick={onChatClick} 
                selectedChat={selectedChat}
            />
        </StyledLeft>
    )
};

export default Left;
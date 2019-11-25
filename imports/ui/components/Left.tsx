import React from 'react';
import { Meteor } from 'meteor/meteor';

import StyledLeft from '../elements/StyledLeft';
import Header from './Header';
import LeftStatus from './LeftStatus';
import Searchbar from './Searchbar';
import ChatList from './ChatList';
import Avatar from './Avatar';
import LeftSide from './LeftSide';
import LSHeader from './LSHeader';

const avatar_url:string = "https://randomuser.me/api/portraits/thumb/men/1.jpg";
const icons:any[] = [
    { name: "circle-notch", func: ()=>{}}, 
    { name: "comment-alt", func: ()=> {}}, 
    {name: "ellipsis-v", func: ()=> {}}
];

const Left = (props:any):JSX.Element => {
    const { 
        onChatClick, 
        chats, 
        selectedChat, 
        chatsLoading, 
        otherProfile,
    } = props;

    const [LSVisible, setLSVisible] = React.useState<boolean>(false);

    const renderChildren = ():JSX.Element => {
        return (
            <>
                <LSHeader onCloseLS={toggleLS} />
                <div className="LS--avatar">
                    <Avatar inLS big avatar_url={Meteor.user().profile.picture} />
                </div>
            </>
        )
    }
    const toggleLS = ():void => {
        if(!LSVisible) {
            setLSVisible(true);
        } else {
            setLSVisible(false)
        }
    }

    return (
        <StyledLeft otherProfile={otherProfile}>
            {!LSVisible ? (
                <>
                    <Header iconClass="greyIcon" icons={icons}>
                        <Avatar 
                            onAvatarClick={toggleLS}
                            avatar_url={Meteor.user().profile.picture} 
                        />
                    </Header>
                    <LeftStatus />
                    <Searchbar />
                    <ChatList 
                        chatsLoading={chatsLoading}
                        chats={chats} 
                        onChatClick={onChatClick} 
                        selectedChat={selectedChat}
                    />
                </>
            ): (
                <LeftSide>
                    {renderChildren()}
                </LeftSide>
            )}
        </StyledLeft>
    )
};

export default Left;
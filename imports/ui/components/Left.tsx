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
import LSForm from './LSForm';
import UsersList from './UsersList';

const Left = (props:any):JSX.Element => {
    const { 
        onChatClick, 
        chats, 
        selectedChat, 
        chatsLoading, 
        otherProfile,
    } = props;

    const [LSVisible, setLSVisible] = React.useState<boolean>(false);
    const [showUList, setShowUList] = React.useState<boolean>(false);
    const icons:any[] = [
        { name: "circle-notch", func: ()=>{}}, 
        { name: "comment-alt", func: ()=> {handleShowUserList()}}, 
        {name: "ellipsis-v", func: ()=> {}}
    ];

    const renderChildren = ():JSX.Element => {
        if(showUList) {
            return (
                <>
                    <LSHeader title="Nouvelle discussion" onCloseLS={toggleLS} />
                    <Searchbar
                        placeholder ="Chercher des contacts"
                    />
                    <UsersList users={Meteor.users.find({
                        _id: {$ne : Meteor.userId()}
                    }, {
                        sort: {
                            username: 1
                        }
                    }).fetch()} />
                </>
            )
        }
        return (
            <>
                <LSHeader title="Profil" onCloseLS={toggleLS} />
                <div className="LS--avatar">
                    <Avatar inLS big avatar_url={Meteor.user().profile.picture} />
                </div>
                <LSForm type="username" />
                <div className="LS--desc">
                    <span>Ce n'est pas votre nom d'utilisateur ou code pin. Ce nom sera visible auprès de vos contacts WhatsApp.</span>
                </div>
                <LSForm type="actu" />
            </>
        )
    }
    const toggleLS = ():void => {
        if(!LSVisible) {
            setLSVisible(true);
        } else {
            setLSVisible(false);
            setShowUList(false);
        }
    }
    const handleShowUserList = ():void => {
        setShowUList(true);
        setLSVisible(true)
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
                    <Searchbar 
                        placeholder ="Rechercher ou démarrer une nouvelle discussion"
                    />
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
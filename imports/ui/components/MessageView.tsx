import React from 'react';
import FontAwesome from 'react-fontawesome';

import StyledMessageView from '../elements/StyledMessageView';
import Header from './Header';
import MessageBox from './MessageBox';
import Avatar from './Avatar';

const avatar_url:string = "https://randomuser.me/api/portraits/thumb/men/1.jpg";

const MessageView = (props:any):JSX.Element => {
    return (
        <StyledMessageView>
            <Header icons={["search", "paperclip", "ellipsis-v"]}>
                <Avatar size="4" avatar_url={avatar_url} />
                <div className="headerMsg--container">
                    <span className="headerMsg--title">Julien Kisoni</span>
                    <span className="headerMsg--sbTitle">en ligne</span>
                </div>
            </Header>
            <MessageBox />
            <Header icons={["", "", "microphone"]}>
                <FontAwesome 
                    name="smile"
                    className="greyIcon"
                />
                <div>
                    <span>Salut !</span>
                </div>
            </Header>
        </StyledMessageView>
    )
}

export default MessageView;
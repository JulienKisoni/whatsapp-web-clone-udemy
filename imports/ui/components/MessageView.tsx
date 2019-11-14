import React from 'react';
import FontAwesome from 'react-fontawesome';

import StyledMessageView from '../elements/StyledMessageView';
import Header from './Header';
import MessageBox from './MessageBox';
import Avatar from './Avatar';
import Searchbar from './Searchbar';

const avatar_url:string = "https://randomuser.me/api/portraits/thumb/men/1.jpg";

const MessageView = (props:any):JSX.Element => {
    return (
        <StyledMessageView>
            <Header iconClass="greyIcon" icons={["search", "paperclip", "ellipsis-v"]}>
                <Avatar size="4" avatar_url={avatar_url} />
                <div className="headerMsg--container">
                    <span className="headerMsg--title">Julien Kisoni</span>
                    <span className="headerMsg--sbTitle">en ligne</span>
                </div>
            </Header>
            <MessageBox />
            <Header iconsWidthSmall iconClass="iconFooter" icons={["microphone"]}>
                <FontAwesome 
                    name="smile"
                    className="iconFooter"
                />
                <label className="message--label">
                    <input 
                        className="message--input" 
                        type="text"
                        placeholder="Taper un message"
                    />
                </label>
            </Header>
        </StyledMessageView>
    )
}

export default MessageView;
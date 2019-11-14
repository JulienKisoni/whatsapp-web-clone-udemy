import React from 'react';

import StyledChatItem from '../elements/StyledChatItem';
import Avatar from './Avatar';

const avatar_url:string = "https://randomuser.me/api/portraits/thumb/men/1.jpg";

const ChatItem = (props:any):JSX.Element => {
    return (
        <StyledChatItem>
            <Avatar size="4.9" avatar_url={avatar_url} />
            <div className="chat--contentContainer">
                <div className="content--line1">
                    <span className="content--line1__title">Julien Kisoni</span>
                    <div className="content--line1__date">13:40</div>
                </div>
                <div className="content--line1">
                    <span className="content--message">
                        Bonjour, j'aimerais savoir comment tu vas aujourd'hui
                    </span>
                    <div className="chat--badge">3</div>
                </div>
            </div>
        </StyledChatItem>
    )
}

export default ChatItem;

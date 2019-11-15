import React from 'react';
import Moment from 'react-moment';

import StyledChatItem from '../elements/StyledChatItem';
import Avatar from './Avatar';

const ChatItem = (props:any):JSX.Element => {
    const { _id, title, picture, lastMessage, onChatClick, active } = props;
    const { content, createdAt } = lastMessage;
    return (
        <StyledChatItem active={active} onClick={() => onChatClick(_id)}>
            <Avatar size="4.9" avatar_url={picture} />
            <div className="chat--contentContainer">
                <div className="content--line1">
                    <span className="content--line1__title">{title}</span>
                    <div className="content--line1__date">
                        <Moment format="HH:mm">
                            {createdAt}
                        </Moment>
                    </div>
                </div>
                <div className="content--line1">
                    <span className="content--message">
                        {content}
                    </span>
                    <div className="chat--badge">3</div>
                </div>
            </div>
        </StyledChatItem>
    )
}

export default ChatItem;

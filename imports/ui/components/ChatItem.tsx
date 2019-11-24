import React from 'react';
import Moment from 'react-moment';
import FontAwesome from 'react-fontawesome';

import StyledChatItem from '../elements/StyledChatItem';
import Avatar from './Avatar';

const ChatItem = (props:any):JSX.Element => {
    const { _id, title, picture, lastMessage, onChatClick, active } = props;
    const { content, createdAt, type } = lastMessage;
    return (
        <StyledChatItem active={active} onClick={() => onChatClick(_id)}>
            <Avatar large avatar_url={picture} />
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
                    {type==="text" ? (
                        <span className="content--message">
                            {content}
                        </span>
                    ) : (
                        <span className="content--message">
                            <FontAwesome 
                                name="camera"
                                style={{
                                    "marginRight": "0.4rem"
                                }}
                            />
                            Photo
                        </span>
                    )}
                    <div className="chat--badge">3</div>
                </div>
            </div>
        </StyledChatItem>
    )
}

export default ChatItem;

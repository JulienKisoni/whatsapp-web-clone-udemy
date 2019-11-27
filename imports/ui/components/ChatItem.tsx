import React from 'react';
import Moment from 'react-moment';
import FontAwesome from 'react-fontawesome';
import { Tracker } from 'meteor/tracker';

import StyledChatItem from '../elements/StyledChatItem';
import Avatar from './Avatar';
import { getBadges, updateBadges } from '../../api/helpers';
import { MessagesCollection } from '../../api/messages';

const ChatItem = (props:any):JSX.Element => {
    const { _id, title, picture, lastMessage, onChatClick, active, participants } = props;
    const { content, createdAt, type } = lastMessage;
    let badge:number = getBadges(_id);
    // Tracker.autorun(() => {
    //     badge = getBadges(_id);
    // });
    React.useEffect(() => {
        if(active) {
            console.log('useEffect badge called');
            updateBadges(participants, _id);
            badge = getBadges(_id);
        }
    }, [lastMessage]);
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
                    {badge > 0 ? (
                        <div className="chat--badge">{badge}</div>
                    ) : null}
                </div>
            </div>
        </StyledChatItem>
    )
}

export default ChatItem;

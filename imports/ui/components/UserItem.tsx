import React from 'react';

import StyledUserItem from '../elements/StyledUserItem';
import Avatar from './Avatar';

const UserItem = (props:any):JSX.Element => {
    const { picture, username, actu, id, onUserItemClick } = props;
    return (
        <StyledUserItem onClick={() => onUserItemClick(id)}>
            <Avatar large avatar_url={picture} />
            <div className="chat--contentContainer">
                <div className="content--line1">
                    <span className="content--line1__title">{username}</span>
                </div>
                <div className="content--line">
                        <span className="content--message">
                            {actu}
                        </span>
                </div>
                <div className="__divider" />
            </div>
        </StyledUserItem>
    )
}

export default UserItem;
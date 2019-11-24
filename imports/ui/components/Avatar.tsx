import React from 'react';

import StyledAvatar from '../elements/StyledAvatar';

const Avatar = (props:any):JSX.Element => {
    return (
        <StyledAvatar large={props.large}>
            <img 
                onClick={props.onAvatarClick}
                alt="avatar" 
                src={props.avatar_url} 
                className="avatar--img"
            />
        </StyledAvatar>
    )
}

export default Avatar;

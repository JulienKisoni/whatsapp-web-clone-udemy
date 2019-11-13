import React from 'react';

import StyledAvatar from '../elements/StyledAvatar';

const Avatar = (props:any):JSX.Element => {
    return (
        <StyledAvatar size="4">
            <img 
                alt="avatar" 
                src={props.avatar_url} 
                className="avatar--img"
            />
        </StyledAvatar>
    )
}

export default Avatar;

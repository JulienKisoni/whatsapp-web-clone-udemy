import React from 'react';
import FontAwesome from 'react-fontawesome';

import StyledLeftHeader from '../elements/StyledLeftHeader';
import Avatar from './Avatar';

const avatar_url:string = "https://randomuser.me/api/portraits/thumb/men/1.jpg";

const LeftHeader = (props:any):JSX.Element => {
    return (
        <StyledLeftHeader>
            <Avatar avatar_url={avatar_url} />
            <div className="icons--left">
                <FontAwesome 
                    name="circle-notch"
                    size="2x"
                    className="greyIcon"
                />
                <FontAwesome 
                    name="comment-alt"
                    size="2x"
                    className="greyIcon"
                />
                <FontAwesome 
                    name="ellipsis-v"
                    size="2x"
                    className="greyIcon"
                />
            </div>
        </StyledLeftHeader>
    )
}

export default LeftHeader;
import React from 'react';

import StyledRight from '../elements/StyledRight';
import RightImg from './RightImg';
import MessageView from './MessageView';


const Right = (props:any):JSX.Element => {
    return (
        <StyledRight>
            {!props.visible ? (
                <RightImg />
            ): (
                <MessageView />
            )}
        </StyledRight>
    )
};

export default Right;
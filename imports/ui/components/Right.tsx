import React from 'react';

import StyledRight from '../elements/StyledRight';
import RightImg from './RightImg';
import MessageView from './MessageView';


const Right = (props:any):JSX.Element => {
    const { selectedChat } = props;
    return (
        <StyledRight>
            {!props.visible ? (
                <RightImg />
            ): (
                <MessageView selectedChat={selectedChat} />
            )}
        </StyledRight>
    )
};

export default Right;
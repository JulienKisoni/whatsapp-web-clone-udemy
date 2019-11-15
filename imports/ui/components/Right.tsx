import React from 'react';

import StyledRight from '../elements/StyledRight';
import RightImg from './RightImg';
import MessageView from './MessageView';


const Right = (props:any):JSX.Element => {
    const { selectedChat, onSend, messages } = props;
    return (
        <StyledRight>
            {!props.visible ? (
                <RightImg />
            ): (
                <MessageView 
                    onSend={onSend} 
                    selectedChat={selectedChat} 
                    messages={messages}
                />
            )}
        </StyledRight>
    )
};

export default Right;
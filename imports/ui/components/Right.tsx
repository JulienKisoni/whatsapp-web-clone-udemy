import React from 'react';

import StyledRight from '../elements/StyledRight';
import RightImg from './RightImg';
import MessageView from './MessageView';

const messageText:string = "Whatsapp se connecte à votre téléphone pour synchroniser les messages. Pour réduire l'utilisation des données, connectez votre téléphone à un réseau WI-FI."

const Right = (props:any):JSX.Element => {
    const { selectedChat, onSend, right } = props;
    return (
        <StyledRight>
            {!props.visible ? (
                <RightImg messageText={messageText} right={right} />
            ): (
                <MessageView 
                    onSend={onSend} 
                    selectedChat={selectedChat} 
                />
            )}
        </StyledRight>
    )
};

export default Right;
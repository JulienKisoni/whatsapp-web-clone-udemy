import React from 'react';

import StyledMain from '../elements/StyledMain';
import Right from './Right';
import Left from './Left';

const Main = (props:any): JSX.Element => {
    const [visible, setVisible] = React.useState<boolean>(false);
    const [selectedChat, setSelectedChat] = React.useState<any>({});
    const handleChatClick = ():void => {
        if(!visible) {
            setVisible(true);
        }
    }
    return (
        <StyledMain>
            <Left onChatClick={handleChatClick}/>
            <Right visible={visible} />
        </StyledMain>
    )
}

export default Main;
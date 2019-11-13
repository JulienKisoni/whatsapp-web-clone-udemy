import React from 'react';

import StyledLeft from '../elements/StyledLeft';
import LeftHeader from './LeftHeader';
import LeftStatus from './LeftStatus';
import Searchbar from './Searchbar';
import ChatList from './ChatList';

const Left = (props:any):JSX.Element => {
    return (
        <StyledLeft>
            <LeftHeader />
            <LeftStatus />
            <Searchbar />
            <ChatList />
        </StyledLeft>
    )
};

export default Left;
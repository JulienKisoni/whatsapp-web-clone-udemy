import React from 'react';

import StyledMain from '../elements/StyledMain';
import Right from './Right';
import Left from './Left';

const Main = (props:any): JSX.Element => {
    return (
        <StyledMain>
            <Left />
            <Right />
        </StyledMain>
    )
}

export default Main;
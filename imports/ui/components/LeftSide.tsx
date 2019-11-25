import React from 'react';

import StyledLeftSide from '../elements/StyledLeftSide';

const LeftSide = (props:any):JSX.Element => {
    return (
        <StyledLeftSide>
            {props.children}
        </StyledLeftSide>
    )
}

export default LeftSide;

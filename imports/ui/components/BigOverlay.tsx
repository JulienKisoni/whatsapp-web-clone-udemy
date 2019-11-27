import React from 'react';

import StyledBigOverlay from '../elements/StyledBigOverlay';

const BigOverlay = (props:any):JSX.Element => {
    return (
        <StyledBigOverlay>
            {props.children}
        </StyledBigOverlay>
    )
}

export default BigOverlay;
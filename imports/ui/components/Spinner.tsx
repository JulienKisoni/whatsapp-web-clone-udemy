import React from 'react';

import StyledSpinner from '../elements/StyledSpinner';

const Spinner = (props:any):JSX.Element => {
    return (
        <StyledSpinner>
            <div className="spinner" />
        </StyledSpinner>
    )
}

export default Spinner;
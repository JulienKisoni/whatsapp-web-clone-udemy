import React from 'react';
import FontAwesome from 'react-fontawesome';

import StyledLeftStatus from '../elements/StyledLeftStatus';
import StyledAvatar from '../elements/StyledAvatar';

const LeftStatus = (props:any):JSX.Element => {
    return (
        <StyledLeftStatus color="blue">
            <StyledAvatar>
                <FontAwesome 
                    name="bell-slash"
                    size="2x"
                    className="icon--color"
                />
            </StyledAvatar>
            <div className="status--textContainer">
                <div className="text--big">
                    Etre averti(e) des nouveaux messages
                </div>
                <span className="text--small">
                    Activer les notifications sur le bureau >
                </span>
            </div>
        </StyledLeftStatus>
    )
}

export default LeftStatus;

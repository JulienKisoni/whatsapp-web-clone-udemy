import React from 'react';

import StyledPopup from '../elements/StyledPopup';

const Popup = (props:any):JSX.Element => {
    return (
        <StyledPopup>
            <div className="popup">
                <div className="popup--title">
                    Supprimer le message ?
                </div>
                <div className="popup--button">
                    Supprimer
                </div>
                <div className="popup--button">
                    Annuler
                </div>
            </div>
        </StyledPopup>
    )
}

export default Popup;
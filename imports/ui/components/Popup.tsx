import React from 'react';

import StyledPopup from '../elements/StyledPopup';

const Popup = (props:any):JSX.Element => {
    const { title, onCancel, onDelete } = props;
    return (
        <StyledPopup>
            <div className="popup">
                <div className="popup--title">
                    {title}
                </div>
                <div onClick={onDelete} className="popup--button">
                    Supprimer
                </div>
                <div onClick={onCancel} className="popup--button">
                    Annuler
                </div>
            </div>
        </StyledPopup>
    )
}

export default Popup;
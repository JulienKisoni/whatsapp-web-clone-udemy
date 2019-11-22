import React from 'react';
import FontAwesome from 'react-fontawesome';

import StyledMyModal from '../elements/StyledModal';

const Modal = (props:any):JSX.Element => {
    const { selectedImage, onClose } = props;
    return (
        <StyledMyModal>
            <div className="modal--header">
                <FontAwesome 
                    className="modal--header__icon"
                    size="2x"
                    name="times"
                    onClick={onClose}
                />
                <span className="modal--header__title">
                    Apercu
                </span>
            </div>
            <div className="modal--body">
                <img
                    style={{ width: '349px', height: '349px' }}
                    alt=""
                    src={selectedImage}
                />
                <div className="modal--body__fab">
                <FontAwesome 
                    size="3x"
                    name="paper-plane"
                />
                </div>
            </div>
            <div className="modal--footer">
                <div className="modal--footer__box">
                    <img 
                        style={{ width: '100%', height: '100%'}}
                        alt=""
                        src={selectedImage}
                    />
                </div>
                <div className="modal--footer__box">
                    <FontAwesome 
                        size="2x"
                        name="plus"
                    />
                    <span>AJOUTER</span>
                </div>
            </div>
        </StyledMyModal>
    )
}

export default Modal;

import React from 'react';

import StyledRightImg from '../elements/StyledRightImg';

const RightImg = (props:any):JSX.Element => {
    return (
        <StyledRightImg right={props.right}>
            <img 
                alt="bg" 
                src={"./images/whatsapp-bg-1.jpg"} 
                className="rightImg--image"
            />
            <h3 className="rightImg--title">
                Gardez votre télépone connecté
            </h3>
            <div className="rightImg--div">
                <p className="rightImg--p">
                    {props.messageText}
                </p>
                <div className="rightImg--divider" />
            </div>
            {props.children}
        </StyledRightImg>
    )
}

export default RightImg;

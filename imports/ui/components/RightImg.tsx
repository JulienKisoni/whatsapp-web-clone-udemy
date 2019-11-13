import React from 'react';

import StyledRightImg from '../elements/StyledRightImg';

const messageText:string = "Whatsapp se connecte à votre téléphone pour synchroniser les messages. Pour réduire l'utilisation des données, connectez votre téléphone à un réseau WI-FI."

const RightImg = (props:any):JSX.Element => {
    return (
        <StyledRightImg>
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
                    {messageText}
                </p>
                <div className="rightImg--divider" />
            </div>
        </StyledRightImg>
    )
}

export default RightImg;

import React from 'react';

import StyledActu from '../elements/StyledActu';

const Actu = (props:any):JSX.Element => {
    return (
        <StyledActu>
            <span className="actu--title">
                Actu et numéro de téléphone
            </span>
            <span className="actu--content">
                Salut ! J'utilise whatsapp.
            </span>
            <div className="actu--divider" />
            <span className="actu--phone">
                +777777777
            </span>
        </StyledActu>
        // actu par defaut salut j'utilise whatsapp
    )
}

export default Actu;
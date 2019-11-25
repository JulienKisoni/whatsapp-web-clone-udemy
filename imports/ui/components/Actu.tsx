import React from 'react';

import StyledActu from '../elements/StyledActu';

const Actu = (props:any):JSX.Element => {
    const { actu, phone } = props;
    return (
        <StyledActu>
            <span className="actu--title">
                Actu et numéro de téléphone
            </span>
            <span className="actu--content">
                {actu}
            </span>
            <div className="actu--divider" />
            <span className="actu--phone">
                {phone}
            </span>
        </StyledActu>
        // actu par defaut salut j'utilise whatsapp
    )
}

export default Actu;
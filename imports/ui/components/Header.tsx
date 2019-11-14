import React from 'react';
import FontAwesome from 'react-fontawesome';

import StyledHeader from '../elements/StyledHeader';

const Header = (props:any):JSX.Element => {
    const { icons } = props;
    return (
        <StyledHeader>
            {props.children}
            <div className="icons--left">
                <FontAwesome 
                    name={icons[0]}
                    className="greyIcon"
                />
                <FontAwesome 
                    name={icons[1]}
                    className="greyIcon"
                />
                <FontAwesome 
                    name={icons[2]}
                    className="greyIcon"
                />
            </div>
        </StyledHeader>
    )
}

export default Header;
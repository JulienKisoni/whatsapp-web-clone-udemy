import React from 'react';
import FontAwesome from 'react-fontawesome';

import StyledHeader from '../elements/StyledHeader';

const Header = (props:any):JSX.Element => {
    const { icons, iconClass } = props;
    const renderIcons = ():JSX.Element[] => {
        return icons.map(icon => {
            return (
                <FontAwesome 
                    name={icon}
                    className={iconClass}
                />
            )
        })
    }
    return (
        <StyledHeader>
            {props.children}
            <div className={props.iconsWidthSmall ? "icons--left small" : "icons--left"}>
                {renderIcons()}
            </div>
        </StyledHeader>
    )
}

export default Header;
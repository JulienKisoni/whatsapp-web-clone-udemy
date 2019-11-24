import React from 'react';
import FontAwesome from 'react-fontawesome';

import StyledHeader from '../elements/StyledHeader';

const Header = (props:any):JSX.Element => {
    const { icons, iconClass, children, otherProfile, iconsWidthSmall } = props;
    const renderIcons = ():JSX.Element[] => {
        return icons.map((icon:any, i:number) => {
            return (
                <FontAwesome 
                    key={i}
                    name={icon.name}
                    className={iconClass}
                    onClick={icon.func}
                />
            )
        })
    }
    return (
        <StyledHeader otherProfile={otherProfile}>
            {children}
            <div className={iconsWidthSmall ? "icons--left small" : "icons--left"}>
                {renderIcons()}
            </div>
        </StyledHeader>
    )
}

export default Header;
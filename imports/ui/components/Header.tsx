import React from 'react';
import FontAwesome from 'react-fontawesome';

import StyledHeader from '../elements/StyledHeader';
import { Iicon } from '../../api/models';

const Header = (props:any):JSX.Element => {
    const { icons, iconClass, children, otherProfile, iconsWidthSmall } = props;
    const renderIcons = ():JSX.Element[] => {
        return icons.map((icon:Iicon, i:number) => {
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
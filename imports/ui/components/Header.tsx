import React from 'react';
import FontAwesome from 'react-fontawesome';

import StyledHeader from '../elements/StyledHeader';

const Header = (props:any):JSX.Element => {
    const { icons, iconClass, onSend } = props;
    const renderIcons = ():JSX.Element[] => {
        return icons.map((icon:string, i:number) => {
            return (
                <FontAwesome 
                    key={i}
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
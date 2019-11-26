import React from 'react';
import FontAwesome from 'react-fontawesome';

const LSHeader = (props : any) : JSX.Element => {
    const { onCloseLS, title } = props;
    return (
        <div className="LS--header">
            <div className="LS--header__line">
                <FontAwesome 
                    className="LS--header__icon" 
                    name="arrow-left" 
                    onClick={onCloseLS}
                />
                <span>{title}</span>
            </div>
        </div>
    )
}

export default LSHeader;
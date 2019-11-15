import React from 'react';

import StyledFooter from '../elements/StyledFooter';
import FontAwesome from 'react-fontawesome';

const Footer = (props:any):JSX.Element => {

    const [inputValue, setInputValue] = React.useState<string>("");
    const [iconName, setIconName] = React.useState<string>("microphone");
    const handleChange = (e):void => {
        setInputValue(e.target.value);
        const name = e.target.value !== "" ? "paper-plane" : "microphone";
        setIconName(name);
    }
    return (
        <StyledFooter>
            <FontAwesome 
                name="smile"
                className="iconFooter"
            />
            <label className="message--label">
                <input 
                    className="message--input" 
                    type="text"
                    placeholder="Taper un message"
                    value={inputValue}
                    onChange={handleChange}
                />
            </label>
            <FontAwesome 
                name={iconName}
                className="iconFooter"
            />
        </StyledFooter>
    )
}

export default Footer;
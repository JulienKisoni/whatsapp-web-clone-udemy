import React from 'react';

import StyledFooter from '../elements/StyledFooter';
import FontAwesome from 'react-fontawesome';
import { MessageType } from '../../api/models';

const Footer = (props:any):JSX.Element => {

    const [inputValue, setInputValue] = React.useState<string>("");
    const [iconName, setIconName] = React.useState<string>("microphone");
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>):void => {
        setInputValue(e.target.value);
        const name = e.target.value !== "" ? "paper-plane" : "microphone";
        setIconName(name);
    }
    const handleClick = ()=> {
        props.onSend(inputValue, MessageType.TEXT);
        setInputValue("");
        setIconName("microphone");
    }
    return (
        <StyledFooter otherProfile={props.otherProfile}>
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
                onClick={handleClick}
            />
        </StyledFooter>
    )
}

export default Footer;
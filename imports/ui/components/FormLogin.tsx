import React from 'react';

import StyledFormLogin from '../elements/StyledFormLogin';

const reducer = (state, newState) => {
    return {...state, ...newState};
}

const Input = (props:any):JSX.Element => {
    const { onLogin } = props;
    const defaultState = {
        username: "",
        password: "",
        phone: ""
    };
    const [userInput, setUserInput] = React.useReducer(reducer, defaultState);
    const { username, password, phone } = userInput;
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>):void => {
        setUserInput({
            [e.target.name]: e.target.value
        });
    }
    return (
        <StyledFormLogin>
            <label className="label">
                <input 
                    className="input" 
                    placeholder="Nom d'utilisateur"
                    value={username}
                    onChange={handleChange}
                    name="username"
                />
            </label>
            <label className="label">
                <input 
                    className="input" 
                    placeholder="Téléphone"
                    value={phone}
                    onChange={handleChange}
                    name="phone"
                />
            </label>
            <label className="label">
                <input 
                    className="input" 
                    placeholder="Mot de passe"
                    type='password'
                    value={password}
                    onChange={handleChange}
                    name="password"
                />
            </label>
            <button onClick={()=>onLogin(userInput)} className="loginBtn">CONNEXION</button>
        </StyledFormLogin>
    )
}

export default Input;
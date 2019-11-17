import React from 'react';
import { useMethod, useCurrentUser } from 'react-meteor-hooks';
import { Meteor } from 'meteor/meteor';

import RightImg from './RightImg';
import FormLogin from './FormLogin';

const messageText:string = "Connectez vous afin de lancer une conversation !"

const Login = (props:any):JSX.Element => {
    const { call } = useMethod('users.login');
    const currentUser = useCurrentUser();
    const handleLogin = async ({ username, phone, password }) => {
        const res = await call({
            username,
            phone,
            password
        });
        console.log(`
            username: ${username}
            password: ${password}
            phone: ${phone}
            res: ${res}
        `);
        if(res) {
            Meteor.loginWithPassword(username, password, (error) => {
                if(!error) {
                    console.log('currentUser', currentUser);
                    console.log('meteorUser', Meteor.user());
                    props.history.push('/chats');
                }
            });
        }
    }
    return (
        <RightImg messageText={messageText}>
            <FormLogin onLogin={handleLogin} />
        </RightImg>
    )
}

export default Login;
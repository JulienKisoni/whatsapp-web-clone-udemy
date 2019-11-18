import { Accounts } from 'meteor/accounts-base';

import { ChatsCollection } from './chats';
import { User, Chat } from './models';

export const createDummyUsers = (users: User[]):void => {
    users.forEach((user: User) => {
        Accounts.createUser({
            username: user.username,
            password: user.password,
            profile: user.profile
        });
    });
};

export const createDummyChats = (chats: Chat[]):void => {
    console.log('createDummyChats called');
    chats.forEach((chat)=> {
        ChatsCollection.insert(chat);
    });
};

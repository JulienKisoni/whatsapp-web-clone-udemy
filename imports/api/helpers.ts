import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

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

export const findChats = ():Chat[] => {
    return ChatsCollection.find().fetch()
        .map(chatCollection => {
            const otherId:string = findOtherId(chatCollection.participants);
            const { username, profile } = findOtherUser(otherId);
            return {
                ...chatCollection,
                title: username,
                picture: profile.picture,
                phone: profile.phone
            }
        });
};

const findOtherId = (participants:string[]):string => {
    const myId:string = Meteor.userId();
    let otherId:string;
    if(myId === participants[0]) {
        otherId = participants[1];
    } else {
        otherId = participants[0];
    }
    return otherId;
}

const findOtherUser = (_id:string):Meteor.User => {
    return Meteor.users.findOne(_id);
};

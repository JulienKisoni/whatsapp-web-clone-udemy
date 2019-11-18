import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';

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

export const findChats = () => {
    return ChatsCollection.find()
    .map( async (ChatCollection) => {
        //console.log('participants', ChatCollection.participants);//
        const _id:string = findOtherId(ChatCollection.participants);
        //console.log('id', _id);//
        /* const { username, phone, picture} = await findOtherUser(_id);
        return {
            ...ChatCollection,
            username,
            profile: {
                picture,
                phone
            }
        } */
    })
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

const findOtherUser = (_id:string) => {
     return new Promise((resolve, reject) => {
        Meteor.call('users.details', _id, (err, res)=> {
            if(err) {
                console.log('error', err);
            } else {
                resolve(res);
            }
        });
     })
};

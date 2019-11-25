import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';

import { ChatsCollection } from './chats';
import { Images } from './images';
import { MessagesCollection } from './messages';
import { User, Chat, Message } from './models';

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
export const createDummyMessages = (messages: Message[]):void => {
    console.log('createDummyMessages called');
    messages.forEach((message)=> {
        MessagesCollection.insert(message);
    });
};

export const findChats = ():Chat[] => {
    return ChatsCollection.find().fetch()
        .map(chatCollection => {
            const otherId:string = findOtherId(chatCollection.participants);
            const { username, profile } = findOtherUser(otherId);
            const lastMsg = findLastMessage(chatCollection._id);
            return {
                ...chatCollection,
                title: username,
                picture: profile.picture,
                phone: profile.phone,
                lastMessage: {
                    ...lastMsg
                }
            }
        });
};

export const findOtherId = (participants:string[]):string => {
    const myId:string = Meteor.userId();
    let otherId:string;
    if(myId === participants[0]) {
        otherId = participants[1];
    } else {
        otherId = participants[0];
    }
    return otherId;
}

export const findOtherUser = (_id:string):Meteor.User => {
    return Meteor.users.findOne(_id);
};

const findLastMessage = (chatId:string):Message => {
    return MessagesCollection.find({ chatId }, {
        sort: { createdAt: -1 }
    }).fetch()[0];
}

export const uploadFile = (file:any):void => {
    let uploadInstance = Images.insert({
        file,
        streams: "dynamic",
        chunkSize: "dynamic",
        allowWebWorkers: true
    }, false);
    uploadInstance.on('start', ()=> {
        console.log('starting');
    })
    uploadInstance.on('end', (err, fileObj)=> {
        // ça je vais expliquer
        console.log('end', fileObj);
        const id:string = fileObj._id;
        Meteor.call("Images.url", id, (error, url:string) => {
            if(error) {
                console.log('error', error);
            } else {
                Session.set("wp_imageUrl", url);
            }
        })
    })
    uploadInstance.on('uploaded', (err, fileObj)=> {
        console.log('uploaded', fileObj);
    })
    uploadInstance.on('error', (error, fileObj)=> {
        console.log('error during upload', error);
    })
    uploadInstance.on('progress', (progress, fileObj)=> {
        console.log('upload percentage : ' + progress);
    })
    uploadInstance.start();
}

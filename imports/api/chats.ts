import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';
import moment from 'moment';

import {Chat} from './models';

export const ChatsCollection = new Mongo.Collection('Chats');

export const chats : Chat[] = [
    {
        title: '',
        picture: '',
        participants: [
            "Y4EJK83XHc78eaBiz", "SctyJToPpbj9sTw5T"
        ],
        lastMessage: {
            content: 'You on your way?',
            createdAt: moment()
                .subtract(1, 'days')
                .toDate()
        }
    }, {
        title: '',
        picture: '',
        participants: [
            "Y4EJK83XHc78eaBiz", "MtBNZbseeh8yfw4mk"
        ],
        lastMessage: {
            content: 'How are You ?',
            createdAt: moment()
                .subtract(1, 'days')
                .toDate()
        }
    }
];



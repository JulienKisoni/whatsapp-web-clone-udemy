import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { check } from 'meteor/check';

import { User } from './models';

export const users : User[] = [
    {
        _id: '0',
        username: 'Ethan Gonzalez',
        password: "password",
        profile: {
            phone: '+222222222',
            picture: 'https://randomuser.me/api/portraits/thumb/men/1.jpg'
        }
    }, {
        _id: '1',
        username: 'Bryan Wallace',
        password: "password",
        profile: {
            phone: '+333333333',
            picture: 'https://randomuser.me/api/portraits/thumb/lego/1.jpg'
        }
    }, {
        _id: '2',
        username: 'Avery Stewart',
        password: "password",
        profile: {
            phone: '+444444444',
            picture: 'https://randomuser.me/api/portraits/thumb/women/1.jpg'
        }
    }, {
        _id: '3',
        username: 'Katie Peterson',
        password: "password",
        profile: {
            phone: '+555555555',
            picture: 'https://randomuser.me/api/portraits/thumb/women/2.jpg'
        }
    }, {
        _id: '4',
        username: 'Ray Edwards',
        password: "password",
        profile: {
            phone: '+666666666',
            picture: 'https://randomuser.me/api/portraits/thumb/men/2.jpg'
        }
    }
]

if(Meteor.isServer) {
    Meteor.publish('users.all', function() {
        return Meteor.users.find({}, {
            fields: { services: 0 }
        });
    })
}

Meteor.methods({
    'users.login': function({ username, phone, password }) {
        check(username, String);
        check(phone, String);
        check(password, String);
        let userExist:boolean;
        const user = Accounts.findUserByUsername(username);
        userExist = !!user;
        console.log('user exist', userExist);
        if(userExist) {
            return true;
        } else {
            return Accounts.createUser({
                username,
                password, 
                profile: {
                    phone,
                    picture: "https://t3.ftcdn.net/jpg/01/09/00/64/240_F_109006426_388PagqielgjFTAMgW59jRaDmPJvSBUL.jpg",
                }
            });
        }
    },
    'users.details': function(_id:string) {
        const otherUser:User = Meteor.users.findOne(_id);
        return {
            username: otherUser.username,
            picture: otherUser.profile.picture,
            phone: otherUser.profile.phone
        }
    }
})

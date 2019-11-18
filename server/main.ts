import { Meteor } from 'meteor/meteor';

import { createDummyUsers, createDummyChats, createDummyMessages } from '../imports/api/helpers';
import { users } from '../imports/api/users';
import { chats } from '../imports/api/chats';
import { ChatsCollection } from '../imports/api/chats';
import { MessagesCollection } from '../imports/api/messages';
import { messages } from '../imports/api/models';

//import '../imports/api/users';//

Meteor.startup(() => {
  console.log('server started !');
  const usersCount:number = Meteor.users.find().count();
  const chatsCount:number = ChatsCollection.find().count();
  const messagesCount:number = MessagesCollection.find().count();
  if(usersCount === 0) {
    console.log('no users for now');
    createDummyUsers(users);
  } else {
    console.log('There are users');
  }
  if(chatsCount === 0) {
    console.log('no chats yet');
    createDummyChats(chats);
  } else {
    console.log('There are chats');
  }
  if(messagesCount === 0) {
    console.log('no messages yet');
    createDummyMessages(messages);
  } else {
    console.log('There are chats');
  }
});
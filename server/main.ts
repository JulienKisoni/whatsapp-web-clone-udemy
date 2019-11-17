import { Meteor } from 'meteor/meteor';

import { createDummyUsers } from '../imports/api/helpers';
import { users } from '../imports/api/users';

//import '../imports/api/users';//

Meteor.startup(() => {
  console.log('server started !');
  const count:number = Meteor.users.find().count();
  if(count === 0) {
    console.log('no users for now');
    createDummyUsers(users);
  } else {
    console.log('There are users');
  }
});
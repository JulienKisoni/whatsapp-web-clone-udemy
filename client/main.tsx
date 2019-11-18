import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import App from '../imports/ui/components/App';
import Spinner from '../imports/ui/components/Spinner';


Meteor.startup(() => {
  console.log('client started');
  Tracker.autorun(() => {
    let userReady:boolean = Meteor.subscribe('users.all').ready();
    if(userReady) {
      ReactDOM.render(<App />, document.getElementById('root'));
    } else {
      ReactDOM.render(<Spinner />, document.getElementById('root'));
    }
  })
})


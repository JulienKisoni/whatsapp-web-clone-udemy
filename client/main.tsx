import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

import App from '../imports/ui/components/App';

Meteor.startup(() => {
  console.log('client started');
  ReactDOM.render(<App />, document.getElementById('root'));
})


import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const MessagesCollection = new Mongo.Collection('Messages');

if(Meteor.isServer){
    Meteor.publish('messages.all', function() {
        return MessagesCollection.find({});
    });
}

Meteor.methods({
    "messages.insert": function(message) {
        console.log('insert message called');
        return MessagesCollection.insert(message);
    }
});
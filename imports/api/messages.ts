import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Message } from './models';

export const MessagesCollection:Mongo.Collection<Message> = new Mongo.Collection('Messages');

if(Meteor.isServer){
    Meteor.publish('messages.all', function() {
        return MessagesCollection.find({});
    });
}

Meteor.methods({
    "messages.insert": function(message) {
        console.log('insert message called');
        return MessagesCollection.insert(message);
    },
    "messages.update": function(_id:string, content:string) {
        console.log('update message called');
        return MessagesCollection.update({ _id }, { 
            $set: {
                content
            }
        });
    },
    "messages.delete": function(messageId:string) {
        return MessagesCollection.remove({ _id: messageId });
    },
    "messages.update.badge": function(chatId:string, otherId:string) {
        console.log('update badge called');
        return MessagesCollection.update({ chatId, senderId: otherId, read: false }, {
            $set: {
                read: true
            }
        }, {
            multi: true
        })
    }
});
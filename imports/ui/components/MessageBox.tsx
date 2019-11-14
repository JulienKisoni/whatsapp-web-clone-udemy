import React from 'react';
import _ from 'lodash';
import moment from 'moment';
import FontAwesome from 'react-fontawesome';

import StyledMessageBox from '../elements/StyledMessageBox';

import { messages } from '../../api/models';
let isEven:boolean = false;
const format:string = 'D MMMM Y';

//messages est un tableau
messages.forEach(message => {
    if(!!message.ownership === isEven) {
        message.ownership = 'mine';
    } else {
        message.ownership = 'other';
    }
    isEven = !isEven;
    return message;
})
console.log('messages normales', messages);
//groupedMessages est un objet (un dictionnaire)
const groupedMessages:any = _.groupBy(messages, message => {
    return moment(message.createdAt).format(format);
});
console.log('groupedMessages', groupedMessages);
const newMessages:any[] = Object.keys(groupedMessages).map(timestamp => {
    return {
        timestamp,
        groupedMessages: groupedMessages[timestamp],
        today: moment().format(format) === timestamp
    }
});
console.log('new messages', newMessages);

const MessageBox = (props:any):JSX.Element => {
    const renderMessages = (newMsg):JSX.Element[] => {
        return newMsg.groupedMessages.map(groupedMsg => {
            const msgClass = `message message--${groupedMsg.ownership}`;
            return (
                <div key={groupedMsg._id} className="messageContainer">
                    <div className={msgClass}>
                            <p>{groupedMsg.content}</p>
                            <div className="detailsContainer">
                                <span>11:33</span>
                                {groupedMsg.ownership === "mine" ? (
                                    <FontAwesome 
                                        name="check-double"
                                    />): null
                                }
                            </div>
                    </div>
                </div>
            )
        })
    }
    const renderDays = ():JSX.Element[] => {
        return newMessages.map((newMessage, i) => {
            const timestampText = newMessage.today ? 
                "aujourd'hui" : 
                newMessage.timestamp;
            return (
                <div key={i}>
                    <div className="day--container">
                        <div className="day--wrapper">
                            <span className="day--span">
                                {timestampText}
                            </span>
                        </div>
                    </div>
                    {renderMessages(newMessage)}
                </div>
            )
        })
    }
    return (
        <StyledMessageBox>
            {renderDays()}
        </StyledMessageBox>
    )
}

export default MessageBox;
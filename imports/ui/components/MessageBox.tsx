import React from 'react';
import _ from 'lodash';
import moment from 'moment';
import FontAwesome from 'react-fontawesome';
import FlipMove from 'react-flip-move';
import {Meteor} from 'meteor/meteor';

import Image from './Image';
import FABs from './FABs';
import StyledMessageBox from '../elements/StyledMessageBox';
import {Message} from '../../api/models';

const format : string = 'D MMMM Y';

let messagesEnd : HTMLDivElement;

const MessageBox = (props : any) : JSX.Element => {

    const {
        selectedChat, 
        messages, 
        fabVisible, 
        onInputChange, 
        onFabItemClick 
    } = props;
    //messages est un tableau
    messages.forEach((message : Message) => {
        message.ownership = message.senderId === Meteor.userId()
            ? 'mine'
            : 'other';
        return message;
    })
    console.log('messages normales', messages);
    //groupedMessages est un objet (un dictionnaire)
    const groupedMessages : any = _.groupBy(messages, message => {
        return moment(message.createdAt).format(format);
    });
    console.log('groupedMessages', groupedMessages);
    const newMessages : any[] = Object
        .keys(groupedMessages)
        .map(timestamp => {
            return {
                timestamp,
                groupedMessages: groupedMessages[timestamp],
                today: moment().format(format) === timestamp
            }
        });
    console.log('new messages', newMessages);
    const scrollToBottom = () => {
        messagesEnd.scrollIntoView({behavior: "smooth"});
        console.log('scroll to bottom function called');
    }
    React.useEffect(() => {
        scrollToBottom();
        console.log('useEffect called');
    }, [selectedChat, messages]);
    const renderMessages = (newMsg) : JSX.Element[] => {
        return newMsg
            .groupedMessages
            .map(groupedMsg => {
                const msgClass = `message message--${groupedMsg.ownership}`;
                if(groupedMsg.type === "text") {
                    return (
                        <div key={groupedMsg._id} className="messageContainer">
                            <div className={msgClass}>
                                <p>{groupedMsg.content}</p>
                                <div className="detailsContainer">
                                    <span>11:33</span>
                                    {groupedMsg.ownership === "mine"
                                        ? (<FontAwesome name="check-double"/>)
                                        : null
                                    }
                                </div>
                            </div>
                        </div>
                    )
                } else {
                    const loading:boolean = groupedMsg.content === "";
                    const mine:boolean = groupedMsg.ownership === "mine";
                    return <Image {...groupedMsg} loading={loading} mine={mine} />
                }
            })
    }
    const renderDays = () : JSX.Element[] => {
        return newMessages.map((newMessage, i) => {
            const timestampText = newMessage.today
                ? "aujourd'hui"
                : newMessage.timestamp;
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
            <FABs
                onFabItemClick={onFabItemClick} 
                onInputChange={onInputChange} 
                fabVisible={fabVisible} 
            />
            <FlipMove>
                {renderDays()}
               {/*  <>
                    <Image loading />
                    <Image mine loading />
                </> */}
            </FlipMove>
            <div
                style={{
                float: "left",
                clear: "both"
                }}
                    ref={(el : HTMLDivElement) => {
                    messagesEnd = el;
                }}>
            </div>
        </StyledMessageBox>
    )
}

export default MessageBox;
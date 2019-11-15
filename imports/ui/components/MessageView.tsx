import React from 'react';
import FontAwesome from 'react-fontawesome';

import StyledMessageView from '../elements/StyledMessageView';
import Header from './Header';
import MessageBox from './MessageBox';
import Avatar from './Avatar';
import { Chat } from '../../api/models';

const avatar_url:string = "https://randomuser.me/api/portraits/thumb/men/1.jpg";

const MessageView = (props:any):JSX.Element => {
    const selectedChat:Chat = props.selectedChat;
    const [inputValue, setInputValue] = React.useState<string>("");
    const [iconName, setIconName] = React.useState<string>("microphone");
    const handleChange = (e):void => {
        setInputValue(e.target.value);
        const name = e.target.value !== "" ? "paper-plane" : "microphone";
        setIconName(name);
    }
    return (
        <StyledMessageView>
            <Header iconClass="greyIcon" icons={["search", "paperclip", "ellipsis-v"]}>
                <Avatar size="4" avatar_url={selectedChat.picture} />
                <div className="headerMsg--container">
                    <span className="headerMsg--title">{selectedChat.title}</span>
                    <span className="headerMsg--sbTitle">en ligne</span>
                </div>
            </Header>
            <MessageBox selectedChat={props.selectedChat} />
            <Header iconsWidthSmall iconClass="iconFooter" icons={[iconName]}>
                <FontAwesome 
                    name="smile"
                    className="iconFooter"
                />
                <label className="message--label">
                    <input 
                        className="message--input" 
                        type="text"
                        placeholder="Taper un message"
                        value={inputValue}
                        onChange={handleChange}
                    />
                </label>
            </Header>
        </StyledMessageView>
    )
}

export default MessageView;
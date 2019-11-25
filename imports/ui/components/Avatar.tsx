import React from 'react';
import FontAwesome from 'react-fontawesome';

import StyledAvatar from '../elements/StyledAvatar';

const Avatar = (props:any):JSX.Element => {
    const { onAvatarClick, large, big, avatar_url, inLS } = props;
    const [hover, setHover] = React.useState<boolean>(false);

    const showOverlay = ():void => {
        if(!hover) {
            setHover(true);
            console.log('hover');
        }
        return;
    }
    const hideOverlay = ():void => {
        if(hover) {
            setHover(false);
            console.log('hide overlay');
        }
        return;
    }
    const renderOverlay = ():JSX.Element => {
        if(inLS && hover) {
            return (
                <div 
                    onMouseLeave={hideOverlay} 
                    onClick={onAvatarClick} 
                    className="avatar--overlay"
                >
                    <FontAwesome className="overlay--icon" name="camera" />
                    <span className="overlay--text">CHANGER LA</span>
                    <span className="overlay--text">PHOTO DE</span>
                    <span className="overlay--text">PROFIL</span>
                </div>
            )
        }
    }

    return (
        <StyledAvatar big={big} large={large}>
            <img 
                onClick={onAvatarClick}
                alt="avatar" 
                src={avatar_url} 
                className="avatar--img"
                onMouseEnter={showOverlay}
            />
            {renderOverlay()}
        </StyledAvatar>
    )
}

export default Avatar;

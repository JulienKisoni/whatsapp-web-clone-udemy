import React from 'react';
import FontAwesome from 'react-fontawesome';

import StyledAvatar from '../elements/StyledAvatar';
import {uploadFile} from '../../api/helpers';

let avatarinput : HTMLElement;
window;
const Avatar = (props : any) : JSX.Element => {
    const {onAvatarClick, large, big, avatar_url, inLS} = props;
    const [hover,
        setHover] = React.useState < boolean > (false);

    const showOverlay = () : void => {
        if (!hover) {
            setHover(true);
            // console.log('hover');
        }
        return;
    }
    const hideOverlay = () : void => {
        if (hover) {
            setHover(false);
            // console.log('hide overlay');
        }
        return;
    }
    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) : void => {
        const file = e.target.files[0];
        console.log('e', e);
        if (file) {
            uploadFile(file, false);
        }
        hideOverlay();
    }
    const handleOverlayClick = () : void => {
        avatarinput = document.getElementById('avatarupload');
        avatarinput.click();
        console.log('avatarinput', avatarinput);
    }
    const renderOverlay = () : JSX.Element => {
        if (inLS && hover) {
            return (
                <div
                    onMouseLeave={hideOverlay}
                    onClick={handleOverlayClick}
                    className="avatar--overlay">
                    <FontAwesome className="overlay--icon" name="camera"/>
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
                onMouseEnter={showOverlay}/>

            <input 
                accept="image/*" 
                type="file" 
                id="avatarupload"
                onChange={handleInputChange}
            /> 
            {renderOverlay()}
        </StyledAvatar>
    )
}

export default Avatar;

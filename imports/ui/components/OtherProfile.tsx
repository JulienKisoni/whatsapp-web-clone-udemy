import React from 'react';
import FontAwesome from 'react-fontawesome';

import StyledOtherProfile from '../elements/StyledOtherProfile';
import Header from './Header';
import Actu from './Actu';
import ActuItem from './ActuItem';
import Spinner from './Spinner';
import { User } from '../../api/models';
import { findOtherUser } from '../../api/helpers';

const icons:any[] = [
    { name: "", func: ()=>{}}, 
    { name: "", func: ()=> {}}, 
    {name: "", func: ()=> {}}
];

const OtherProfile = (props:any):JSX.Element => {
    const { onClose, otherId } = props;
    // console.log('user other', findOtherUser(otherId));
    const user:User = findOtherUser(otherId);
    // console.log('otherId', otherId);
    return (
        <StyledOtherProfile>
            {user ? (
            <>
                <Header iconClass="greyIcon" icons={icons}>
                    <div className="OPH--heading">
                        <FontAwesome 
                            onClick={onClose}
                            name="times"
                            className="iconOtherProfile"
                        />
                        <span className="OPH--title">Infos du contact</span>
                    </div>
                </Header>
                <div className="__scroll">
                    <div className="OP--imageContainer">
                        <div className="OP--image">
                            <img width="100%" height="100%" alt="" src={user.profile.picture} />
                        </div>
                        <div className="OPIC--txtContainer">
                            <span className="OPIC--title">{user.username}</span>
                            <span className="OPIC--sbTitle">en ligne</span>
                        </div>  
                    </div>
                    <Actu actu={user.profile.actu} phone={user.profile.phone} />
                    <ActuItem content="Bloquer" iconName="ban" />
                    <ActuItem content="Supprimer le contact" iconName="thumbs-down" red />
                    <ActuItem content="Supprimer la discussion" iconName="trash" red />
                </div>
            </>
            ) : (
                <Spinner />
            )}
        </StyledOtherProfile>
    )
}

export default OtherProfile;
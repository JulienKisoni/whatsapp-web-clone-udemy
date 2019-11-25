import React from 'react';
import FontAwesome from 'react-fontawesome';

import StyledOtherProfile from '../elements/StyledOtherProfile';
import Header from './Header';
import Actu from './Actu';
import ActuItem from './ActuItem';

const icons:any[] = [
    { name: "", func: ()=>{}}, 
    { name: "", func: ()=> {}}, 
    {name: "", func: ()=> {}}
];

const OtherProfile = (props:any):JSX.Element => {
    return (
        <StyledOtherProfile>
            <Header iconClass="greyIcon" icons={icons}>
                <div className="OPH--heading">
                    <FontAwesome 
                        onClick={props.onClose}
                        name="times"
                        className="iconOtherProfile"
                    />
                    <span className="OPH--title">Infos du contact</span>
                </div>
            </Header>
            <div className="__scroll">
                <div className="OP--imageContainer">
                    <div className="OP--image">
                        <img width="100%" height="100%" alt="" src="https://cdn.pixabay.com/photo/2017/04/05/11/56/image-in-the-image-2204798_960_720.jpg" />
                    </div>
                    <div className="OPIC--txtContainer">
                        <span className="OPIC--title">Julien Kisoni</span>
                        <span className="OPIC--sbTitle">en ligne</span>
                    </div>  
                </div>
                <Actu />
                <ActuItem content="Bloquer" iconName="ban" />
                <ActuItem content="Supprimer le contact" iconName="thumbs-down" red />
                <ActuItem content="Supprimer la discussion" iconName="trash" red />
            </div>
        </StyledOtherProfile>
    )
}

export default OtherProfile;
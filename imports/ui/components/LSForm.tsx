import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Meteor } from 'meteor/meteor';

import StyledLSForm from '../elements/StyledLSForm';

const LSForm = (props:any):JSX.Element => {
    const { type } = props;
    const title:string = type === "actu" ? "Actu" : "Votre nom";
    const value:string = type === "actu" ? Meteor.user().profile.actu : Meteor.user().username;
    const [editable, setEditable] = React.useState<boolean>(false);
    const toggleEditable = ():void => {
        setEditable(!editable);
    }
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const newValue:string = e.target.value;
        if (type === "actu") {
            Meteor.users.update({_id: Meteor.userId()}, {
                $set: {
                    "profile.actu": newValue
                }
            });
        } else {
            Meteor.call('users.username', Meteor.userId(), newValue);
        }
    }
    return (
        <StyledLSForm>
            <span className="LSForm--title">
                {title}
            </span>
            {!editable ? (
                <div className="LSForm--container">
                    <input 
                        value={value} 
                        className="LSForm--input" 
                        readOnly={true} 
                    />
                    <FontAwesome onClick={toggleEditable} className="LSForm--icon" name="pen" />
                </div>
            ) : (
                <div className="LSForm--container">
                    <input 
                        value={value} 
                        onChange={handleChange}
                        className="LSForm--input __border" 
                        readOnly={false} 
                    />
                    <FontAwesome onClick={toggleEditable} className="LSForm--icon" name="check" />
                </div>
            )}
        </StyledLSForm>
    )
}

export default LSForm;
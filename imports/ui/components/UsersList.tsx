import React from 'react';
import _ from 'lodash';

import StyledUsersList from '../elements/StyledUsersList';
import UserItem from './UserItem';
import { User } from '../../api/models';

const UsersList = (props:any):JSX.Element => {
    const users:User[] = props.users;
    const groupedUsers = _.groupBy(users, (user:User) => {
        return user.username.toUpperCase()[0];
    });
    const newUsers:any[] = Object
        .keys(groupedUsers)
        .map(letter => {
            return {
                letter,
                groupedUsers: groupedUsers[letter]
            }
        });
    console.log('newUsers', newUsers);
    const renderLetters = ():JSX.Element[] => {
        return newUsers.map((newUser, i) => {
            return (
                <React.Fragment key={i}>
                    <div className="letter">
                        {newUser.letter}
                    </div>
                    {renderUserItem(newUser.groupedUsers)}
                </React.Fragment>
            )
        })
    }
    const renderUserItem = (userList:User[]):JSX.Element[] => {
        return userList.map((user, i) => {
            return (
                <UserItem
                    key={user._id}
                    id={user._id}
                    actu={user.profile.actu}
                    username={user.username}
                    picture={user.profile.picture}
                    onUserItemClick={props.onUserItemClick}
                />
            )
        })
    }

    return (
        <StyledUsersList>
            {renderLetters()}
        </StyledUsersList>
    )
}

export default UsersList;
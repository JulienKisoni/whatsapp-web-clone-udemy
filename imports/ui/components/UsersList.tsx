import React from 'react';
import _ from 'lodash';

import StyledUsersList from '../elements/StyledUsersList';
import UserItem from './UserItem';
import { User } from '../../api/models';

const UsersList = (props:any):JSX.Element => {
    const users:User[] = props.users;
    const groupedUsers = _.groupBy(users, (user:User) => {
        return user.username[0];
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
    const renderUserItem = ():JSX.Element[] => {
        return users.map((user, i) => {
            return (
                <UserItem
                    key={user._id}
                    actu={user.profile.actu}
                    username={user.username}
                    picture={user.profile.picture}
                />
            )
        })
    }

    return (
        <StyledUsersList>
            {renderUserItem()}
        </StyledUsersList>
    )
}

export default UsersList;
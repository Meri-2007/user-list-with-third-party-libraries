import React from 'react';
import PropTypes from 'prop-types';
import { UserItem } from './useritem';

export const UserList = ({ users }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Login</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user, index) => (
                    <UserItem key={index} user={user} />
                ))}
            </tbody>
        </table>
    );
};

UserList.propTypes = {
    users: PropTypes.array.isRequired,
};

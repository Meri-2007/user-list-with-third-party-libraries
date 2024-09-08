import React from 'react';
import PropTypes from 'prop-types';

export const UserItem = ({ user }) => {
    return (
        <tr>
            <td>{user.name}</td>
            <td>{user.surname}</td>
            <td>{user.login}</td>
            <td>{user.age}</td>
        </tr>
    );
};
//Տիպերի ստուգում prop types ով
UserItem.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        surname: PropTypes.string.isRequired,
        login: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
    }).isRequired,
};

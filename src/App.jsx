import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AddUser } from './components/add-user';
import { UserList } from './components/userlist';

import './App.css';

export default function App() {
  const [users, setUsers] = useState([]);

  const handleAddUser = (user) => {
    setUsers([...users, user]);
  };

  return (
    <div>
      <AddUser onAddUser={handleAddUser} />
      <UserList users={users} />
      <ToastContainer />
    </div>
  );
}

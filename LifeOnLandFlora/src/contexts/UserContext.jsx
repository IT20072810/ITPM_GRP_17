import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/users');
      setUsers(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const addUser = async (user) => {
    try {
      const res = await axios.post('http://localhost:5000/api/users/register', user);
      setUsers([...users, res.data]);
    } catch (err) {
      console.error(err);
    }
  };

  const updateUser = async (id, updatedUser) => {
    try {
      const res = await axios.put(`http://localhost:5000/api/users/${id}`, updatedUser);
      setUsers(users.map(user => user._id === id ? res.data : user));
    } catch (err) {
      console.error(err);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/users/${id}`);
      setUsers(users.filter(user => user._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  const loginUser = async (userCredentials) => {
    try {
      const res = await axios.post('http://localhost:5000/api/users/login', userCredentials);
      setCurrentUser(res.data.user);
      localStorage.setItem('token', res.data.token);
    } catch (err) {
      console.error(err);
    }
  };

  const logoutUser = () => {
    setCurrentUser(null);
    localStorage.removeItem('token');
  };

  return (
    <UserContext.Provider value={{ users, currentUser, addUser, updateUser, deleteUser, loginUser, logoutUser }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext

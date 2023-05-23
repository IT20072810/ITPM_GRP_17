import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const FloraContext = createContext();

export const FloraProvider = (props) => {
  const [flora, setFlora] = useState([]);

  useEffect(() => {
    fetchFlora();
  }, []);

  const fetchFlora = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/flora');
      setFlora(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const addFlora = async (floraData) => {
    try {
      const res = await axios.post('http://localhost:5000/api/flora', floraData);
      setFlora([...flora, res.data]);
    } catch (err) {
      console.error(err);
    }
  };

  const updateFlora = async (id, updatedFlora) => {
    try {
      const res = await axios.put(`http://localhost:5000/api/flora/${id}`, updatedFlora);
      setFlora(flora.map(f => f._id === id ? res.data : f));
    } catch (err) {
      console.error(err);
    }
  };

  const deleteFlora = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/flora/${id}`);
      setFlora(flora.filter(f => f._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <FloraContext.Provider value={{ flora, addFlora, updateFlora, deleteFlora }}>
      {props.children}
    </FloraContext.Provider>
  );
};
export default FloraContext
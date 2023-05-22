import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const FaunaContext = createContext();

export const FaunaProvider = (props) => {
  const [fauna, setFauna] = useState([]);

  useEffect(() => {
    fetchFauna();
  }, []);

  const fetchFauna = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/fauna');
      setFauna(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const addFauna = async (faunaData) => {
    try {
      const res = await axios.post('http://localhost:5000/api/fauna', faunaData);
      setFauna([...fauna, res.data]);
    } catch (err) {
      console.error(err);
    }
  };

  const updateFauna = async (id, updatedFauna) => {
    try {
      const res = await axios.put(`http://localhost:5000/api/fauna/${id}`, updatedFauna);
      setFauna(fauna.map(f => f._id === id ? res.data : f));
    } catch (err) {
      console.error(err);
    }
  };

  const deleteFauna = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/fauna/${id}`);
      setFauna(fauna.filter(f => f._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <FaunaContext.Provider value={{ fauna, addFauna, updateFauna, deleteFauna }}>
      {props.children}
    </FaunaContext.Provider>
  );
};
export default FaunaContext
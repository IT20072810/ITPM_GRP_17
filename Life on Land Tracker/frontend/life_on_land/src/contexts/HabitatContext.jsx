import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const HabitatContext = createContext();

export const HabitatProvider = (props) => {
  const [habitats, setHabitats] = useState([]);

  useEffect(() => {
    fetchHabitats();
  }, []);

  const fetchHabitats = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/habitats');
      setHabitats(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const addHabitat = async (habitatData) => {
    try {
      const res = await axios.post('http://localhost:5000/api/habitats', habitatData);
      setHabitats([...habitats, res.data]);
    } catch (err) {
      console.error(err);
    }
  };

  const updateHabitat = async (id, updatedHabitat) => {
    try {
      const res = await axios.put(`http://localhost:5000/api/habitats/${id}`, updatedHabitat);
      setHabitats(habitats.map(h => h._id === id ? res.data : h));
    } catch (err) {
      console.error(err);
    }
  };

  const deleteHabitat = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/habitats/${id}`);
      setHabitats(habitats.filter(h => h._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <HabitatContext.Provider value={{ habitats, addHabitat, updateHabitat, deleteHabitat }}>
      {props.children}
    </HabitatContext.Provider>
  );
};
export default HabitatContext
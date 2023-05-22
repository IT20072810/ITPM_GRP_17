import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ObservationContext = createContext();

export const ObservationProvider = (props) => {
  const [observations, setObservations] = useState([]);

  useEffect(() => {
    fetchObservations();
  }, []);

  const fetchObservations = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/observations');
      setObservations(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const addObservation = async (observation) => {
    try {
      const res = await axios.post('http://localhost:5000/api/observations', observation);
      setObservations([...observations, res.data]);
    } catch (err) {
      console.error(err);
    }
  };

  const updateObservation = async (id, updatedObservation) => {
    try {
      const res = await axios.put(`http://localhost:5000/api/observations/${id}`, updatedObservation);
      setObservations(observations.map(observation => observation._id === id ? res.data : observation));
    } catch (err) {
      console.error(err);
    }
  };

  const deleteObservation = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/observations/${id}`);
      setObservations(observations.filter(observation => observation._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <ObservationContext.Provider value={{ observations, addObservation, updateObservation, deleteObservation }}>
      {props.children}
    </ObservationContext.Provider>
  );
};
export default ObservationContext
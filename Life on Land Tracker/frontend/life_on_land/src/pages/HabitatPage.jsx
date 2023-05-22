import React, { useContext } from 'react';
import { HabitatContext } from '../contexts/HabitatContext';
import HabitatList from '../components/HabitatList';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';

const HabitatPage = () => {
  const { habitats } = useContext(HabitatContext);
  const navigate = useNavigate()
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <h1>Habitats</h1>
      <Button
      style={{
        margin : "8px 0"
      }}
      onClick={(e) => {
        navigate("/add-habitat")
      }}>
        Add Habitat
      </Button>
      <HabitatList habitats={habitats} />
    </div>
  );
};

export default HabitatPage;

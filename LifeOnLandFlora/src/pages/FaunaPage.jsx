import React, { useContext } from 'react';
import { FaunaContext } from '../contexts/FaunaContext';
import FaunaList from '../components/FaunaList';
import { Button } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';

const FaunaPage = () => {
    const { fauna } = useContext(FaunaContext);
    const navigate = useNavigate()
    const params = useParams()
    const category = params.category ?? "mammal"

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            <Button
                style={{
                    margin: "8px 0"
                }}
                onClick={(e) => {
                    navigate("/add-fauna")
                }}>
                Add Fauna
            </Button>
            <h1>Fauna</h1>
            <FaunaList faunas={fauna.filter(item => item.category === category)} />
        </div>
    );
};

export default FaunaPage;

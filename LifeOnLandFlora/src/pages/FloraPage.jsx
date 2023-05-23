import React, { useContext } from 'react';
import { FloraContext } from '../contexts/FloraContext';
import FloraList from '../components/FloraList';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';

const FloraPage = () => {
    const { flora } = useContext(FloraContext);
    const navigate = useNavigate()
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent : "center"
            }}
        >
            <h1
                style={{
                    margin : "16px 0"
                }}
            >Common Floras in your area</h1>
            <Button onClick={(e) => {
                navigate("/add-flora")
            }}
                style={{
                    margin: "8px 0"
                }}
            >
                Add Flora
            </Button>
            <FloraList floras={flora} />
        </div>
    );
};

export default FloraPage;

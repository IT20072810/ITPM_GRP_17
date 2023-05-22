import React, { useState } from 'react';
import ObservationModal from "../modals/ObservationModal"
import { Button, Input, Row } from 'antd';
import { useNavigate } from 'react-router-dom';

const ObservationList = ({ observations }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredFauna = observations.filter((fauna) =>
        fauna.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const naviget = useNavigate()
    return (
        <div>

            <Button
                onClick={(e) => {
                    naviget("/add-observation")
                }}
                style={{
                    margin: "8px 0"
                }}
            >
                Add Observation
            </Button>
            <Input.Search placeholder="Search by name" onChange={handleSearch} style={{ marginBottom: '16px' }} />
            <Row gutter={16}>
                {filteredFauna.map((observation) => (
                    <div key={observation._id}>
                        <ObservationModal observation={observation} />
                    </div>
                ))}
            </Row>

        </div>
    );
};

export default ObservationList;

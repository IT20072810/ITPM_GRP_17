import React, { useContext } from 'react';
import { ObservationContext } from '../contexts/ObservationContext';
import ObservationList from '../components/ObservationList';
import Title from 'antd/es/typography/Title';


const ObservationPage = () => {
    const { observations } = useContext(ObservationContext);

    return (
        <div
            style={{
                padding: "32px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}
        >

            <Title level={1}>Observations</Title>
            <ObservationList observations={observations} />
        </div>
    );
};

export default ObservationPage;

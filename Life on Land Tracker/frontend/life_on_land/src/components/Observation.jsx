import React, { useContext, useState } from 'react';
import { Modal, Button, Typography, Card } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import ObservationContext from '../contexts/ObservationContext';


const { Title, Text } = Typography;

function Observation({ observation }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [deleteObservation,updateObservation] = useContext(ObservationContext)
  const currentUser = localStorage.getItem("uid");

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleUpdate = () => {

  };

  const handleDelete = () => {

  };

  return (
    <div>
      <div onClick={showModal}>
        {/* Render the observation card here */}
        <Card 
              hoverable 
              style={{ width: 240 }} 
              cover={<img alt={observation.name} src={observation.imageUrl} />}
            >
              <Card.Meta title={observation.name} />
            </Card>

       
      </div>
      <Modal
        title={observation.title}
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={[
          <Button key="edit" icon={<EditOutlined />} onClick={handleUpdate}>
            Edit
          </Button>
          ,
          <Button
            key="delete"
            icon={<DeleteOutlined />}
            onClick={handleDelete}
            danger
          >
            Delete
          </Button>

        ]}
      >
        <img src={observation.imageUrl}
          style={{
            width : "100%",
            height :"100%"
          }}
        />
        <Title level={4}>{observation.title}</Title>
        <Text>{observation.description}</Text>
      </Modal>
    </div>
  );
}

export default Observation;

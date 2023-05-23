import React, { useState, useContext, useEffect } from 'react';
import { Modal, Button, Form, Input, message, Card, Col } from 'antd';
import { ObservationContext } from '../contexts/ObservationContext';

const ObservationModal = ({ observation }) => {
    const { updateObservation, deleteObservation } = useContext(ObservationContext);
    const [visible, setVisible] = useState(false);
    const [form] = Form.useForm();

    useEffect(() => {

    }, [observation])

    const showModal = () => {
        setVisible(true);
        form.setFieldsValue(observation);
    };

    const handleCancel = () => {
        setVisible(false);
    };

    const handleUpdate = (values) => {
        updateObservation(observation._id, { ...observation, ...values });
        message.success('Observation updated successfully');
        setVisible(false);
    };

    const handleDelete = () => {
        deleteObservation(observation._id);
        message.success('Observation deleted successfully');
        setVisible(false);
    };

    return (
        <>
            <div onClick={showModal}>
                <Col span={8} key={observation._id}>
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt={observation.name} src={observation.imageUrl} />}
                    >
                        <Card.Meta title={observation.name} />
                    </Card>
                </Col>
            </div>
            <Modal title="Observation Details" visible={visible} onCancel={handleCancel} footer={null}>
                <Form form={form} onFinish={handleUpdate} initialValues={observation} layout="vertical">
                    <Form.Item name="name" label="Name" rules={[{ required: true, message: 'Please enter the name' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="scientificName" label="Scientific Name" rules={[{ required: true, message: 'Please enter the scientific name' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="description" label="Description" rules={[{ required: true, message: 'Please enter the description' }]}>
                        <Input.TextArea />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" style={{ marginRight: 8 }}>
                            Update
                        </Button>
                        <Button type="danger" onClick={handleDelete}>
                            Delete
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default ObservationModal;

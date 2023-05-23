import React, { useState, useContext } from 'react';
import { Modal, Button, Form, Input, message, Col, Card } from 'antd';
import { HabitatContext } from '../contexts/HabitatContext';

const HabitatModal = ({ habitat }) => {
    const { updateHabitat, deleteHabitat } = useContext(HabitatContext);
    const [visible, setVisible] = useState(false);
    const [form] = Form.useForm();

    const showModal = () => {
        console.log("called")
        setVisible(true);
        form.setFieldsValue(habitat);
    };

    const handleCancel = () => {
        setVisible(false);
    };

    const handleUpdate = (values) => {
        updateHabitat(habitat._id, { ...habitat, ...values });
        message.success('Habitat updated successfully');
        setVisible(false);
    };

    const handleDelete = () => {
        deleteHabitat(habitat._id);
        message.success('Habitat deleted successfully');
        setVisible(false);
    };

    return (
        <>
            <div onClick={showModal}>
                <Col span={8} key={habitat._id}>
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt={habitat.name} src={habitat.imageUrl} />}
                    >
                        <Card.Meta title={habitat.name} />
                    </Card>
                </Col>
            </div>
            <Modal title="Habitat Details" visible={visible} onCancel={handleCancel} footer={null}>
                <Form form={form} onFinish={handleUpdate} initialValues={habitat} layout="vertical">
                    <Form.Item name="name" label="Name" rules={[{ required: true, message: 'Please enter the name' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="location" label="Location" rules={[{ required: true, message: 'Please enter the location' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="climate" label="Climate" rules={[{ required: true, message: 'Please enter the climate' }]}>
                        <Input />
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

export default HabitatModal;

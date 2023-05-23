import React, { useState, useContext } from 'react';
import { Modal, Button, Form, Input, message, Col, Card } from 'antd';
import { FloraContext } from '../contexts/FloraContext';

const FloraModal = ({ flora }) => {
    const { updateFlora, deleteFlora } = useContext(FloraContext);
    const [visible, setVisible] = useState(false);
    const [form] = Form.useForm();

    const showModal = () => {
        setVisible(true);
        form.setFieldsValue(flora);
    };

    const handleCancel = () => {
        setVisible(false);
    };

    const handleUpdate = (values) => {
        updateFlora(flora._id,{ ...flora, ...values });
        message.success('Flora updated successfully');
        setVisible(false);
    };

    const handleDelete = () => {
        deleteFlora(flora._id);
        message.success('Flora deleted successfully');
        setVisible(false);
    };

    return (
        <>
            <div onClick={showModal}>
                <Col span={8} key={flora._id}
                    style={{
                        heigth: "100px"
                    }}
                >
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt={flora.name} src={flora.imageUrl} />}
                    >
                        <Card.Meta title={flora.name} />
                    </Card>
                </Col>

            </div>
            <Modal title="Flora Details" visible={visible} onCancel={handleCancel} footer={null}>
                <Form form={form} onFinish={handleUpdate} initialValues={flora} layout="vertical">
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

export default FloraModal;

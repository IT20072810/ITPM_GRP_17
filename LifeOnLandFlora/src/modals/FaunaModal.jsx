import React, { useState, useContext } from 'react';
import { Modal, Button, Form, Input, message, Col, Card } from 'antd';
import { FaunaContext } from '../contexts/FaunaContext';

const FaunaModal = ({ fauna }) => {
  const { updateFauna, deleteFauna } = useContext(FaunaContext);
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();

  const showModal = () => {
    setVisible(true);
    form.setFieldsValue(fauna);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleUpdate = (values) => {
    updateFauna(fauna._id, { ...fauna, ...values });
    message.success('Fauna updated successfully');
    setVisible(false);
  };

  const handleDelete = () => {
    deleteFauna(fauna._id);
    message.success('Fauna deleted successfully');
    setVisible(false);
  };

  return (
    <>
      <div onClick={showModal}>
        <Col span={8} key={fauna._id}>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt={fauna.description} src={fauna.imageUrl} />}
          >
            <Card.Meta title={fauna.description} />
          </Card>
        </Col>
      </div>
      <Modal title="Fauna Details" visible={visible} onCancel={handleCancel} footer={null}>
        <Form form={form} onFinish={handleUpdate} initialValues={fauna} layout="vertical">
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

export default FaunaModal;

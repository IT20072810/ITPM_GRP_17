import React, { useContext, useState } from 'react';
import { UserContext } from '../contexts/UserContext';
import { Form, Input, Button, Alert } from 'antd';

const LoginPage = () => {
  const { loginUser } = useContext(UserContext);
  const [error, setError] = useState('');

  const onFinish = async (values) => {
    try {
      await loginUser(values);
    } catch (error) {
      setError('Failed to log in');
    }
  };

  return (
    <div>
      <Form
        name="login"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Log In
          </Button>
        </Form.Item>

        {error && <Alert message={error} type="error" showIcon />}
      </Form>
    </div>
  );
};

export default LoginPage;

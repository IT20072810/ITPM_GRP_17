import React, { useContext, useState } from 'react';
import { UserContext } from '../contexts/UserContext';
import { Form, Input, Button, Alert } from 'antd';

const SignupPage = () => {
  const { registerUser } = useContext(UserContext);
  const [error, setError] = useState('');

  const onFinish = async (values) => {
    if (values.password !== values.confirmPassword) {
      setError("Passwords don't match");
      return;
    }
    try {
      await registerUser(values);
    } catch (error) {
      setError('Failed to register');
    }
  };

  return (
    <div>
      <Form
        name="register"
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
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please input your Email!' }]}
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

        <Form.Item
          label="Confirm Password"
          name="confirmPassword"
          rules={[{ required: true, message: 'Please confirm your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Sign Up
          </Button>
        </Form.Item>

        {error && <Alert message={error} type="error" showIcon />}
      </Form>
    </div>
  );
};

export default SignupPage;

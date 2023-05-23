import React from 'react';
import { Form, Input, Button, message } from 'antd';
import Title from 'antd/es/typography/Title';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
    const navigate = useNavigate()
    const onFinish = (values) => {
        axios
            .post('http://localhost:5000/api/users/register', values) // Replace with your actual register endpoint
            .then((response) => {
                console.log('Registration successful');
                // Add your logic for successful registration here

                localStorage.setItem("uid","uid")
                message.success('Registration successful');
                navigate("/")

            })
            .catch((error) => {
                console.error('Registration failed:', error);
                // Add your logic for failed registration here
                message.error('Registration failed');
            });
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Form
                name="register"
                onFinish={onFinish}
                style={{
                    width: 400,
                    padding: 20,
                    border: '1px solid #ccc',
                    borderRadius: 4,
                    backgroundColor: '#fff',
                }}
            >
                <h2 style={{ textAlign: 'center', marginBottom: 20 }}>Register</h2>
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Please enter your name' }]}
                >
                    <Input placeholder="Name" />
                </Form.Item>
                <Form.Item
                    name="email"
                    rules={[{ required: true, message: 'Please enter your email' }]}
                >
                    <Input placeholder="Email" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please enter your password' }]}
                >
                    <Input.Password placeholder="Password" />
                </Form.Item>
                <Form.Item
                    name="confirmPassword"
                    dependencies={['password']}
                    rules={[
                        { required: true, message: 'Please confirm your password' },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('The two passwords do not match'));
                            },
                        }),
                    ]}
                >
                    <Input.Password placeholder="Confirm Password" />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                        Register
                    </Button>
                </Form.Item>
                <Title level={5}>Already have an account ? <Link to="/signin">Sign in</Link> now</Title>
            </Form>
        </div>
    );
};

export default Register;

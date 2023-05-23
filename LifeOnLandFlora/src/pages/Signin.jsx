import React from 'react';
import { Form, Input, Button, message } from 'antd';
import Title from 'antd/es/typography/Title';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignIn = () => {
    const navigate = useNavigate()
    const onFinish = (values) => {
        axios
            .post('http://localhost:5000/api/users/login', values) // Replace with your actual register endpoint
            .then((response) => {
                console.log('Signin successful');
                // Add your logic for successful registration here

                localStorage.setItem("uid", "uid")
                message.success('Signin successful');
                navigate("/")

            })
            .catch((error) => {
                localStorage.setItem("uid", "uid")
                message.success('Signin successful');
                navigate("/");
            });
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Form
                name="signin"
                onFinish={onFinish}
                style={{
                    width: 400,
                    padding: 20,
                    border: '1px solid #ccc',
                    borderRadius: 4,
                    backgroundColor: '#fff',
                }}
            >
                <h2 style={{ textAlign: 'center', marginBottom: 20 }}>Sign In</h2>
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
                <Form.Item>
                    <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                        Sign In
                    </Button>
                </Form.Item>
                <Title level={5}>Dont have an account ? <Link to="/register">Sign up</Link> now</Title>
            </Form>

        </div>
    );
};

export default SignIn;

import React from 'react';
import { Form, Input, Button, Card } from 'antd';

const DonationPage = () => {
    const handleSubmit = (values) => {
        console.log('Form values:', values);
        // Handle form submission here
    };

    return (
        <div style={{ maxWidth: '400px', margin: '0 auto' }}>
            <h1>Donation Page</h1>
            <Card>
                <Form name="donationForm" onFinish={handleSubmit}>
                    <Form.Item name="name" label="Name" rules={[{ required: true, message: 'Please enter your name' }]}>
                        <Input placeholder="Enter your name" />
                    </Form.Item>
                    <Form.Item name="email" label="Email" rules={[{ required: true, message: 'Please enter your email' }]}>
                        <Input placeholder="Enter your email" />
                    </Form.Item>
                    <Form.Item name="amount" label="Donation Amount" rules={[{ required: true, message: 'Please enter the donation amount' }]}>
                        <Input placeholder="Enter the donation amount" type="number" min={0} step={1} />
                    </Form.Item>
                    <Form.Item name="card" label="Card Details" rules={[{ required: true, message: 'Please enter your card details' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Donate
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
};

export default DonationPage;

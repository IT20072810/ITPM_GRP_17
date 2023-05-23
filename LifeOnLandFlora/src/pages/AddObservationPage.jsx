import React, { useContext, useState } from 'react';
import { Form, Input, Button, Upload, Layout, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { ObservationContext } from '../contexts/ObservationContext';
import "../css/AddObservationPage.css"
import LoadingContext from '../contexts/LoadingContext';
import upload_image_service from '../services/upload_image_service';
import { useNavigate } from 'react-router-dom';
import Loading from '../components/Loading';
const { Content } = Layout;

const AddObservationPage = () => {
  const { addObservation } = useContext(ObservationContext);
  const [selectedImage, setSelectedImage] = useState(null)
  const [imageUrl, setImageUrl] = useState(null);
  const [loadingState, loadinDispatch] = useContext(LoadingContext)
  const navigate = useNavigate()

  const onFinish = async (values) => {
    const url = await upload_image_service.uploadImage(selectedImage, loadinDispatch);
    if (url != null) {
      addObservation({ ...values, imageUrl: url });
      message.success('Observation added successfully');
      navigate("/observations")
    } else {
      message.error('Observation adding failed');
    }
  };

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const handleImageUpload = async (file) => {
    try {
      setSelectedImage(file)
      console.log("file seted")
    } catch (error) {
      message.error('Failed to upload image');
    }
  };

  if (loadingState.loading) {
    return <Loading />
  }


  return (
    <Layout
      style={{

        
      }}
      className="add-observation-page">
      <Content

      >
        <Form {...layout} name="nest-messages" onFinish={onFinish} style={{ marginTop: '5%', backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>
          <Form.Item name='name' label="Name" rules={[{ required: true, message: 'Please input the name!' }]}>
            <Input />
          </Form.Item>
          <Form.Item name='scientificName' label="Scientific Name" rules={[{ required: true, message: 'Please input the scientific name!' }]}>
            <Input />
          </Form.Item>
          <Form.Item name='description' label="Description" rules={[{ required: true, message: 'Please input the description!' }]}>
            <Input.TextArea />
          </Form.Item>
          <Form.Item name='speciesType' label="Species Type" rules={[{ required: true, message: 'Please input the species type!' }]}>
            <Input />
          </Form.Item>
          <Form.Item name='image' label="Image"
            onChange={(e) => {
              setSelectedImage(e.target.value);
            }}
          >
            <Upload accept="image/*"
              beforeUpload={() => false}
              onChange={(info) => handleImageUpload(info.file)}>
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Content>
    </Layout>
  );
};

export default AddObservationPage;

import React, { useContext, useState } from 'react';
import { Form, Input, Button, Upload, Layout, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { HabitatContext } from '../contexts/HabitatContext';
import upload_image_service from '../services/upload_image_service';
import Loading from '../components/Loading';
import LoadingContext from '../contexts/LoadingContext';
import { useNavigate } from 'react-router-dom';

const { Content } = Layout;

const AddHabitatPage = () => {
  const { addHabitat } = useContext(HabitatContext);
  const [loadingState,loadingDispatch]= useContext(LoadingContext);
  const [selectedImage, setSelectedImage] = useState(null)
  const [imageUrl, setImageUrl] = useState(null);
  const navigate= useNavigate()
  const onFinish = async (values) => {
    const url = await upload_image_service.uploadImage(selectedImage,loadingDispatch).then((url) => {
      if (url != null) {
        addHabitat({...values,imageUrl:url});
        message.success('Habitat added successfully');
        navigate("/habitats")
      } else {
        message.error("Habitate adding failed")
      }
    })
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



  if(loadingState.loading){
    return <Loading/>
  }

  return (
    <Layout className="add-habitat-page">
      <Content>
        <Form {...layout} name="nest-messages" onFinish={onFinish} style={{ marginTop: '15%', backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>
          <Form.Item name='name' label="Name" rules={[{ required: true, message: 'Please input the name!' }]}>
            <Input />
          </Form.Item>
          <Form.Item name='location' label="Location" rules={[{ required: true, message: 'Please input the location!' }]}>
            <Input />
          </Form.Item>
          <Form.Item name='climate' label="Climate" rules={[{ required: true, message: 'Please input the climate!' }]}>
            <Input />
          </Form.Item>
          <Form.Item name='image' label="Image">
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

export default AddHabitatPage;

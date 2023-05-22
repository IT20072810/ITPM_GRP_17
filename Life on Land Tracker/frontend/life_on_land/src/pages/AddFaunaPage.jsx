import React, { useContext, useState } from 'react';
import { Form, Input, Button, Upload, Layout, message, Select } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { FaunaContext } from '../contexts/FaunaContext';
import upload_image_service from '../services/upload_image_service';
import LoadingContext from '../contexts/LoadingContext';
import Loading from '../components/Loading';
import { Option } from 'antd/es/mentions';


const categories = [
  "mammal",
  "insect",
  "bird",
  "reptile",
  "micro-fauna",
  "fish"
]


const { Content } = Layout;

const AddFaunaPage = () => {
  const { addFauna } = useContext(FaunaContext);
  const [selectedImage, setSelectedImage] = useState(null)
  const [loadingState, loadingDispatch] = useContext(LoadingContext);
  const [selectedCategor, setSelectedCategory] = useState("")
  const [imageUrl, setImageUrl] = useState(null);
  const onFinish = async (values) => {
    await upload_image_service.uploadImage(selectedImage, loadingDispatch).then((url) => {
      if (url != null) {
        addFauna({ ...values, imageUrl: url, category: selectedCategor });
        message.success('Fauna added successfully');
        navigate("/habitats")
      } else {
        message.error("Fauna adding failed")
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

  if (loadingState.loading) {
    return <Loading />
  }

  return (
    <Layout className="add-fauna-page">
      <Content>
        <Form {...layout} name="nest-messages" onFinish={onFinish} style={{ marginTop: '15%', backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>
          <Form.Item
            label="Fauna Category"
          >
            <Select
              value={selectedCategor}
              onChange={((val) => {

                setSelectedCategory(val)
              })}
            >
              {
                categories.map((cat, index) => <Option key={cat} >{cat}</Option>)
              }
            </Select>

          </Form.Item>

          <Form.Item name='description' label="Description" rules={[{ required: true, message: 'Please input the description!' }]}>
            <Input.TextArea />
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

export default AddFaunaPage;
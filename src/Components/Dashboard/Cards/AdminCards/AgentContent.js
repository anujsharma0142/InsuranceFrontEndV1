import { Card, Button, Modal, Form, Input } from 'antd';
import React, { useState } from 'react';
import axios from 'axios';

const cardStyle = {
  flex: 1,
  margin: 10,
  width: 350,
  height: 300,
  backgroundColor: 'rgba(0, 0, 0, 0.8)', // set background color with opacity
  color: '#fff', // set font color to white
  textAlign: 'center' // center align card content
};

const titleStyle = {
  color: '#ddd' // set font color to a lighter shade of gray
};

const contentStyle = {
  color: '#ddd' // set font color to a lighter shade of gray
};

const AddAgentForm = ({ visible, onCancel, onFinish }) => {
  const [form] = Form.useForm();

  const handleOk = () => {
    form.submit();
  };

  const handleCancel = () => {
    form.resetFields();
    onCancel();
  };

  return (
    <Modal title="Add Agent" visible={visible} onOk={handleOk} onCancel={handleCancel}>
      <Form form={form} onFinish={onFinish}>
        <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email' }]}>
          <Input />
        </Form.Item>

        <Form.Item name="firstName" label="First Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item name="lastName" label="Last Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item name="phoneNo" label="Phone" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item name="qalification" label="Qualification" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item name="password" label="Password" rules={[{ required: true }]}>
          <Input.Password />
        </Form.Item>
      </Form>
    </Modal>
  );
};

const AgentContent = () => {
    const [addAgentVisible, setAddAgentVisible] = useState(false);
  
    const handleAddAgentClick = () => {
      setAddAgentVisible(true);
    };
  
    const handleAddAgentCancel = () => {
      setAddAgentVisible(false);
    };
  
    const onFinish = (values) => {
      const { email, name, lastName, phone, qualification, password } = values;
  
      axios
        .post('http://localhost:8083/api/v1/admin/addAgent', {
          email,
          firstName,
          lastName,
          phoneNo,
          qalification,
          password
        })
        .then((response) => {
          console.log(response.data); // handle success response
        })
        .catch((error) => {
          console.error(error); // handle error response
        });
  
      handleAddAgentCancel();
    };
  
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <Card title={<span style={titleStyle}>Add Agent</span>} style={cardStyle}>
          <p style={contentStyle}>Card content</p>
          <Button type="primary" onClick={handleAddAgentClick}>
            Add
          </Button>
          <AddAgentForm visible={addAgentVisible} onCancel={handleAddAgentCancel} onFinish={onFinish} />
        </Card>
        {/* ... other cards ... */}

        <Card title={<span style={titleStyle}>Add Agent</span>} style={cardStyle}>
          <p style={contentStyle}>Card content</p>
          <Button type="primary" onClick={handleAddAgentClick}>
            Add
          </Button>
          <AddAgentForm visible={addAgentVisible} onCancel={handleAddAgentCancel} onFinish={onFinish} />
        </Card>

        <Card title={<span style={titleStyle}>Add Agent</span>} style={cardStyle}>
          <p style={contentStyle}>Card content</p>
          <Button type="primary" onClick={handleAddAgentClick}>
            Add
          </Button>
          <AddAgentForm visible={addAgentVisible} onCancel={handleAddAgentCancel} onFinish={onFinish} />
        </Card>

        <Card title={<span style={titleStyle}>Add Agent</span>} style={cardStyle}>
          <p style={contentStyle}>Card content</p>
          <Button type="primary" onClick={handleAddAgentClick}>
            Add
          </Button>
          <AddAgentForm visible={addAgentVisible} onCancel={handleAddAgentCancel} onFinish={onFinish} />
        </Card>

        
      </div>
    );
  };
  
  export default AgentContent;
  
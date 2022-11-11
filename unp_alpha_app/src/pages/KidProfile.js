import React from 'react';
import 'antd/dist/antd.css';
// import './index.css';
import { Button, Form, Input, InputNumber } from 'antd';


const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
/* eslint-enable no-template-curly-in-string */

const Profilepage: React.FC = () => {
  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <div>
      Kid's Profile
    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item name={['first_name', 'first_name']} label="First Name">
        <Input />
      </Form.Item>
      <Form.Item name={['last_name', 'last_name']} label="Last Name">
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'username']} label="Username">
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'gender']} label="Gender">
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'location']} label="location">
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'school']} label="school">
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'grade']} label="grade">
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'ethnicity']} label="ethnicity">
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'age']} label="Age" rules={[{ type: 'number', min: 0, max: 99 }]}>
        <InputNumber />
      </Form.Item>
      <Form.Item name={['user', 'bio']} label="Bio">
        <Input.TextArea />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </div>
  );
};

export default Profilepage;
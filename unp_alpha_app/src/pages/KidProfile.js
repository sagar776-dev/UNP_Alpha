// import React from 'react';
// import 'antd/dist/antd.css';
// // import './index.css';
// import { Button, Form, Input, InputNumber } from 'antd';


// import React from 'react';
import 'antd/dist/antd.css';
// import './index.css';
import { Button, Form, Input, InputNumber } from 'antd';
import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
import Search from '../components/search';
=======
import Search from '../components/search/search';
>>>>>>> ashay
import Messenger from "../components/messenger/Messenger";
import 'antd/dist/antd.min.css';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;



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
   


<div >
{/* <Search/> */}
<Layout>      
<Header
  className="site-layout-sub-header-background"
  style={{
    padding: 0,
    height: '10vh'
  }}
/>      
<Layout>

<Sider
breakpoint="lg"
collapsedWidth="0"
// style={{marginTop:50}}      
onBreakpoint={(broken) => {
  console.log(broken);
}}
onCollapse={(collapsed, type) => {
  console.log(collapsed, type);
}}

>
{/* <div className="logo" /> */}
<Menu
  theme="dark"
  mode="inline"                
  defaultSelectedKeys={['2']}      

>
  <Menu.Item key='search'>        
    <Link to='/home'>Search </Link>                                     
  </Menu.Item>        
 <Menu.Item >                 
    <Link to='/profile'>Parent Profile   </Link>   
  </Menu.Item>
  <Menu.Item >                 
    <Link to='/Kidprofile'>Kid Profile </Link>   
  </Menu.Item>
  <Menu.Item >                 
<<<<<<< HEAD
    <Link to='/ViewFriends'>View Friends </Link>   
  </Menu.Item>
  <Menu.Item >                 
=======
>>>>>>> ashay
    <Link to='/inbox'>Inbox </Link>    
  </Menu.Item>
  
  <Menu.Item key='messenger'>   
    <Link to='/messenger'>Messenger </Link>                                                             
  </Menu.Item>
  <Link to='/login'>
  <Menu.Item style={{
  position: 'absolute',
  bottom: 0,
  zIndex: 1,
  transition: 'all 0.2s',
}}
>                    
    Sign Out
  </Menu.Item>
  </Link>
</Menu>
</Sider>
<Content
  style={{
     margin: '24px 16px 0',
  }}
>
  <div
    className="site-layout-background"
    style={{
      padding: 24,
      minHeight: '90vh',
    }}
  >
    {/* content */}
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
  
  </div>
</Content>
</Layout>
</Layout>
</div>
  );
};

export default Profilepage;
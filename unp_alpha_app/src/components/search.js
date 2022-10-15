import React, { useState } from 'react';
import axios, * as others from 'axios';
import 'antd/dist/antd.css';
import { Button, Checkbox, Form, Input } from 'antd';
import { Descriptions } from 'antd';

function Search() {
  // Declare a new state variable, which we'll call "count"
  const [data, setData] = useState();
  const onFinish = (e) => {
    console.log("reached here",e)
    axios.post('http://localhost:9000/kid/filters',e)
    .then(response => {
      console.log("response", response.data)
      setData( response.data)
    })
    .catch(error => {
      console.log(error);
    });
  }
  return (
    <div>
    <div className="App">
    <h3>Search Here tom Find Kids! </h3>
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      // onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="location"
        name="location"
        rules={[
          {
            required: true,
            message: 'Please input your location!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Grade"
        name="grade"
        rules={[
          {
            required: true,
            message: 'Please input your grade!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Search
        </Button>
      </Form.Item>
    </Form>
  ;
  </div>
        {data? data.message.map((item, i) => {
      return (
        <div>
        {/* <option key={i} value={item.id}> */}
          <div>
          <Descriptions title="Kids Info">
            <Descriptions.Item label="firstname">{item.first_name}</Descriptions.Item>
            <Descriptions.Item label="lastname"> {item.last_name}</Descriptions.Item>
            <Descriptions.Item label="grade">{item.grade}</Descriptions.Item>
            <Descriptions.Item label="location"> {item.location}</Descriptions.Item>
            <Descriptions.Item label="school">   {item.school}</Descriptions.Item>
            <Descriptions.Item label="street">{item.street}</Descriptions.Item>
      </Descriptions>
  </div>
        {/* </option> */}
        </div>
      );
    }): null}

    </div>
  );
}

export default Search;
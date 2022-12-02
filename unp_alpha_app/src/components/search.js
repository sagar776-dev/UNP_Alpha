import React, { useState } from "react";
import axios, * as others from "axios";
import "antd/dist/antd.css";
import { Button, Checkbox, Form, Input } from "antd";
import { Descriptions } from "antd";
import { Card } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Image } from "antd";
import { Space } from "antd";

import { useCookies } from "react-cookie";

function Search() {
  // Declare a new state variable, which we'll call "count"
  const [data, setData] = useState();
  const [cookies, setCookie] = useCookies(["user"]);
  const onFinish = (e) => {
    console.log("reached here", e);
    axios
      .post("http://localhost:8080/api/kid/filters", e)
      .then((response) => {
        console.log("response", response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const sendRequest = (id) => {
    console.log(cookies);
    let body = {
      "from": cookies.user.id,
      "to": id,
      "fromName": cookies.user.first_name+' '+cookies.user.last_name
    }
    axios
      .post("http://localhost:8080/api/request/sendRequest", body)
      .then((res) => {
        alert("Request sent!!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div style={{ margin: 0, padding: 0 }}>
      <div className="Search">
        <h3 style={{ marginBottom: 20, fontSize: 25 }}>
          Find Friends For Your Children In Your Locality!
        </h3>
        <Form
          labelAlign="left"
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
                message: "Please input your location!",
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
                message: "Please input your grade!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Age" name="age">
            <Input />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" ghost="true" htmlType="submit" shape="round">
              Search
            </Button>
          </Form.Item>
        </Form>
      </div>
      {data
        ? data.message.map((item, i) => {
            return (
              
              <div>
                {/* <option key={i} value={item.id}> */}
                <div>
                  <Descriptions>
                    <div className="site-card-border-less-wrapper">
                      <Card
                        title="Kids Info"
                        bordered={false}
                        style={{ width: "100%" }}
                      >
                        <Avatar
                          style={{ backgroundColor: "#87d068" }}
                          icon={<UserOutlined />}
                        />
                        <br></br>
                        <Space wrap>
                          <Button type="primary" onClick={() => sendRequest(item.parentid)}>Add parent as friend</Button>
                        </Space>
                        <div className="post-shown">

                        <Descriptions.Item label="firstname">
                          <div className="post-all">
                          <div className="post-title">
                          First Name:
                          </div>
                          <div className="post-value">
                          {item.first_name}
                          </div>
                          </div>
                        </Descriptions.Item>{" "}
                        <br />

                        <Descriptions.Item label="lastname">
                         
                          <div className="post-all">
                          <div className="post-title">
                          Last Name:
                          </div>
                          <div className="post-value">
                          {item.last_name}
                          </div>
                          </div>
                        </Descriptions.Item>
                        <br />
                        <Descriptions.Item label="grade">
                         

                          <div className="post-all">
                          <div className="post-title">
                          Grade:
                          </div>
                          <div className="post-value">
                          {item.grade}
                          </div>
                          </div>
                        </Descriptions.Item>
                        <br />
                        <Descriptions.Item label="location">
                       
                          <div className="post-all">
                          <div className="post-title">
                          Location:
                          </div>
                          <div className="post-value">
                          {item.location}
                          </div>
                          </div>
                        </Descriptions.Item>
                        <br />
                        <Descriptions.Item label="school">
                          
                          <div className="post-all">
                          <div className="post-title">
                          School: 
                          </div>
                          <div className="post-value">
                          {item.school}
                          </div>
                          </div>
                        </Descriptions.Item>
                        <br />
                        <Descriptions.Item label="street">
                        <div className="post-all">
                          <div className="post-title">
                          Street: 
                          </div>
                          <div className="post-value">
                          {item.street}
                          </div>
                          </div>
                       
                    
                        </Descriptions.Item>
                        </div>
                        <br />
                      </Card>
                    </div>
                  </Descriptions>
                  
                </div>
                {/* </option> */}
              </div>
              
            );
          })
        : null}
    </div>
  );
}

export default Search;

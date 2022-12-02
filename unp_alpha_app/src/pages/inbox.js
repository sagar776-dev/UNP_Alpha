


// import React, { useState } from 'react';
import axios, * as others from 'axios';
import 'antd/dist/antd.css';
// import "../index.css"
import { Button, Checkbox, Form, Input } from 'antd';
import { Descriptions } from 'antd';

import React, { useState, useEffect } from 'react';
import Search from '../components/search/search';
import Messenger from "../components/messenger/Messenger";
import 'antd/dist/antd.min.css';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;


function InboxPage() {
  // Declare a new state variable, which we'll call "count"
  const [data, setData] = useState();

  const list = [
    {
      sender: "Julie",
      receiver: "Christina",
      message:
        "Hi Christna! I found our sons go to same class. Do you like to meet on park next week? We can introduce our son to each other ",
    },
    {
      sender: "Max",
      receiver: "Christina",
      message: "It was great meeting you last week!",
    },
    {
      sender: "Jhon",
      receiver: "Christina",
      message:
        "Does your son like to play baseball? May be we can plan something like that",
    },
    {
      sender: "Julie",
      receiver: "Christina",
      message:
        "Hi Christna! I found our sons go to same class. Do you like to meet on park next week? We can introduce our son to each other ",
    },
    {
      sender: "Max",
      receiver: "Christina",
      message: "It was great meeting you last week!",
    },
    {
      sender: "Jhon",
      receiver: "Christina",
      message:
        "Does your son like to play baseball? May be we can plan something like that",
    },
  ];

  return (
    <div>
      {/* <Search/> */}
      <Layout>
        <Header
          className="site-layout-sub-header-background"
          style={{
            padding: 0,
            height: "10vh",
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
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["2"]}>
              <Menu.Item key="search">
                <Link to="/home">Search </Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/profile">Parent Profile </Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/Kidprofile">Kid Profile </Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/ViewFriends">View Friends </Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/inbox">Inbox </Link>
              </Menu.Item>

              <Menu.Item>
                <Link to="/viewfriends">View Friends </Link>
              </Menu.Item>

              <Menu.Item key="messenger">
                <Link to="/messenger">Messenger </Link>
              </Menu.Item>
              <Link to="/login">
                <Menu.Item
                  style={{
                    position: "absolute",
                    bottom: 0,
                    zIndex: 1,
                    transition: "all 0.2s",
                  }}
                >
                  Sign Out
                </Menu.Item>
              </Link>
            </Menu>
          </Sider>
          <Content
            style={{
              margin: "24px 16px 0",
            }}
          >
            <div
              className="site-layout-background"
              style={{
                padding: 24,
                minHeight: "90vh",
              }}
            >
              {/* content */}
              <div>
                {list.map((each) => (
                  <div className="message-box">
                    <div className="sender">
                      <b>sent:</b> {each.sender}
                    </div>
                    <div className="message">
                      <b>message: </b>
                      {each.message}
                    </div>
                    <div className="receive">
                      <b>received:</b> {each.receiver}
                      <hr />
                    </div>
                    <hr />
                    <br />
                  </div>
                ))}
              </div>

              <hr />
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default InboxPage;

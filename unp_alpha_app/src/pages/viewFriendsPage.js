import React, { useState, useEffect } from "react";
import ViewFriends from "../components/friend-request";
import "antd/dist/antd.min.css";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;

function viewFriendsPage() {
  const changeTab = (tabName) => {
    this.setState({ renderTab: tabName });
  };

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
                <Link to="/inbox">Inbox </Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/ViewFriends">View Friends </Link>
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
              <ViewFriends/>
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default viewFriendsPage;

import React, { useState, useEffect } from 'react';
import './App.css';
import Search from './components/search';
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

function searchpage() {
  useEffect(() => {
    document.title = 'Search Page';
  });
  return (
    <div className="App">
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
        // items={[UserOutlined,UserOutlined].map(
        //   (icon, index) => ({            
        //     key: String(index + 1),
        //     icon: React.createElement(icon),
        //     label: labels[index],
        //   }),
        // )}
      >
        <Menu.Item>                         
          Search
        </Menu.Item>
        <Menu.Item>                 
          Profile
        </Menu.Item>
        <Menu.Item style={{
        position: 'absolute',
        bottom: 0,
        zIndex: 1,
        transition: 'all 0.2s',
    }}>                    
          Sign Out
        </Menu.Item>
      </Menu>
    </Sider>
      <Content
        style={{
          // margin: '24px 16px 0',
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
          <Search/>
        
        </div>
      </Content>
    </Layout>
  </Layout>
    </div>
  );
}

export default App;

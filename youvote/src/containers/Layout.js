import React from 'react'
//importing the consumer
import { YouVoteConsumer } from '../components/Context';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;



const CustomLayout = (props) => {

  
    return (
               
        <YouVoteConsumer>
            {value => {
                const { api_loged_in } = value                
                
                return (
                    <Layout>
                    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                      <div className="logo" />
                      <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{ lineHeight: '64px' }}
                      >
                        <Menu.Item key="1">nav 1</Menu.Item>
                        <Menu.Item key="2">nav 2</Menu.Item>
                        <Menu.Item key="3">nav 3</Menu.Item>
                      </Menu>
                    </Header>
                    <Content style={{ padding: '0 50px', marginTop: 64 }}>
                      <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                      </Breadcrumb>
                      <div style={{ background: '#fff', padding: 24, minHeight: 380 }}> {props.children}</div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                  </Layout>
    
                )
                

            }}
        </YouVoteConsumer>
        

    )


}

export default CustomLayout
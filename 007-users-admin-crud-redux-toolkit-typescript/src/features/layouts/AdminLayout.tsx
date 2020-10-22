import React from "react";
import { Layout, Menu, Drawer, Button, Grid } from "antd";

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import "./AdminLayout.less";
import LeftMenu from "./LeftMenu";
import RightMenu from "./RightMenu";

const { Header, Sider, Content } = Layout;
const { useBreakpoint } = Grid;

type AppProps = {
  message?: string;
  children?: React.ReactNode;
};

const AdminLayout = ({ message, children }: AppProps) => {
  const [visible, setVisible] = React.useState(false);
  const { md } = useBreakpoint();

  const toggleVisible = () => {
    setVisible(!visible);
  };

  const onClose = () => {
    setVisible(false);
  };

  const showDrawer = () => {
    setVisible(true);
    console.log("efef");
  };

  return (

    <div className="background">

      <Layout >
        <Header>
          <div style={{ "display": "flex" }}>
            {!md &&
              // <Button className="barsMenu" type="text" onClick={showDrawer}>
              //   <span className="barsBtn"></span>
              // </Button>

              // <Button className="trigger" icon={<MenuUnfoldOutlined />} />
              // <MenuUnfoldOutlined className="trigger" />
              <div className="trigger" onClick={showDrawer}>
                <MenuOutlined   />
              </div>
              // React.createElement(!visible ? MenuUnfoldOutlined : MenuFoldOutlined, {
              //   className: 'trigger',
              //   onClick: showDrawer,
              // })
            }
            <div className="logo" />

            {md &&
              <LeftMenu />}
            <div className="rightMenu">
              <RightMenu /></div>
          </div>


          {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu> */}
        </Header>


        <Drawer
            title="Basic Drawer"
            placement="left"
            closable={false}
            onClose={onClose}
            visible={visible}
          >
            <LeftMenu />
          </Drawer>
        

        <Content>
          <div className="container">
            <div className="site-layout-content">{children}</div>
          </div>
        </Content>
      </Layout>
    </div>
  );
};

export default AdminLayout;

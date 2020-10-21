import React from 'react';
import { Menu, Grid, Avatar,  } from 'antd';
import { UserOutlined } from '@ant-design/icons';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const { useBreakpoint } = Grid;

const RightMenu = () => {
  const { md } = useBreakpoint();
  return (
    <Menu theme="dark" mode="horizontal" className="menu-background">
      <SubMenu key="account" title={<span>Hi!, Thada <Avatar size="small" icon={<UserOutlined />} /></span>}>
      <Menu.Item key="account:logout">Logout</Menu.Item>
      </SubMenu>
    </Menu>
  );
}

export default RightMenu;

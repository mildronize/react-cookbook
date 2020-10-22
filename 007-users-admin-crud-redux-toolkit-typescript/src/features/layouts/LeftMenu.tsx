import React from 'react';
import { Menu, Grid } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const { useBreakpoint } = Grid;

const LeftMenu = () => {
  const { md } = useBreakpoint();
  return (
    <Menu theme={md ? "dark" : "light"} mode={md ? "horizontal" : "inline"} defaultSelectedKeys={['home']} className="menu-background">
      <Menu.Item key="home">
        <a href="">Home</a>
      </Menu.Item>
      <SubMenu key="sub1F" title={<span>Data</span>}>
        <MenuItemGroup title="Main">
          <Menu.Item key="setting:1">Student</Menu.Item>
        </MenuItemGroup>
      </SubMenu>

    </Menu>
  );
}

export default LeftMenu;

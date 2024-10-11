
import {Button,Layout, theme} from 'antd';
import MenuList from '../../Components/MenuList';
import { useState } from 'react';
// import ToggleThemeButton from '../../Components/ToggleThemeButton';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

const {Header,Sider}= Layout;
const SideNavbar = () => {

  const [darkTheme,setDarkTheme]= useState(true);
  const [collaped,setCollaped]= useState(false);

  // const toggleTheme=()=>{
  //   setDarkTheme(!darkTheme);
  // }

  const {token : {colorBgContainer},}= theme.useToken();

  return (
    <Layout>
        <Sider collapsed={collaped} collapsible clasName="sidebar" trigger={null} theme={darkTheme? "dark":"light"}>
          <MenuList darkTheme={darkTheme}></MenuList>
          {/* <ToggleThemeButton darkTheme={darkTheme} toggleTheme={toggleTheme}></ToggleThemeButton> */}
        </Sider>

        <Layout>
          <Header style={{padding:0, backgroundColor:colorBgContainer}}>
            <Button type='text' className='toggle' onClick={()=>setCollaped(!collaped)} icon={collaped ?<MenuFoldOutlined></MenuFoldOutlined>:<MenuUnfoldOutlined></MenuUnfoldOutlined>}></Button>
          </Header>
        </Layout>
    </Layout>
  );
};

export default SideNavbar;
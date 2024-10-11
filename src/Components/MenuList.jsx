
import { ContactsOutlined, HomeOutlined } from '@ant-design/icons';
import {Menu} from 'antd';
import { Link } from 'react-router-dom';



const MenuList = () => {
    return (
        <Menu theme="dark" mode='inline' className='menu-bar'>
            <Menu.Item key="Home" icon={<HomeOutlined></HomeOutlined>}>
                <Link to='/'>Home</Link>
            </Menu.Item>
            <Menu.Item key="new_games" icon={<HomeOutlined></HomeOutlined>}>
            New Games
            </Menu.Item>
            <Menu.Item key="puzzle" icon={<HomeOutlined></HomeOutlined>}>
           Puzzles
            </Menu.Item>
            <Menu.Item  key="jobs" icon={<ContactsOutlined />}>
                <Link to=''>Jobs</Link>
            </Menu.Item>
            <Menu.Item  key="contact" icon={<ContactsOutlined />}>
                <Link to='contact'>Contact</Link>
            </Menu.Item>
            
        </Menu>
    );
};

export default MenuList;

import { Outlet } from 'react-router-dom';
import TopNavbar from '../Shared/TopNavbar/TopNavbar';
import SideNavbar from '../Shared/SideNavbar/SideNavbar';

const Layout = () => {
    return (
        <div className='bg-black max-w-screen max-h-full'>
            <TopNavbar></TopNavbar>

            <div className='flex'>
                <div className='flex-none h-full w-auto'>
                    <SideNavbar></SideNavbar>
                </div>
                <div className='grow h-auto ml-10'>
                    <Outlet></Outlet>
                </div>
            </div>

        </div>
    );
};

export default Layout;
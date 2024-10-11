
import { useState } from "react";

// react icons
import { IoIosSearch } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";
import Logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { LogoutOutlined } from "@ant-design/icons";

const ResponsiveNavbar = () => {

    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)

    return (
        <nav className="flex items-center justify-between max-w-5xl mx-auto relative p-3">
            <Link to={'/'}> <img src={Logo} alt="logo" className="w-[120px] " /></Link>


            <div className="flex items-center gap-[10px]">
                <div className="relative lg:flex hidden">
                    <input
                        className="py-1.5 pr-4 border border-text pl-10 rounded-full outline-none focus:border-primary text-black"
                        placeholder="Search..." />
                    <IoIosSearch className="absolute top-[9px] left-3 text-text text-[1.3rem]" />
                </div>


            </div>

            <div>

              
                    <button
                        className="bg-transparent outline outline-yellow-50 text-white rounded-md py-1 px-5 flex items-center gap-[10px] text-[0.9rem] ">
                        <LogoutOutlined />
                        Login
                    </button>
               
            </div>
        </nav>
    );
};

export default ResponsiveNavbar;

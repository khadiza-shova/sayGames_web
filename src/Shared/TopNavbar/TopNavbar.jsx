
import { useState } from "react";

// react icons
import { IoIosSearch } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";
import Logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

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
              
                <button className="px-6 py-1 border bg-white
               text-black font-sans font-semibold hover:text-primary transition duration-300 rounded"> Login
                </button>

                <CiMenuFries className="text-[1.6rem] text-textc cursor-pointer lg:hidden flex"
                    onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)} />
            </div>

            <aside
                className={` ${mobileSidebarOpen ? "translate-x-0 opacity-100 z-20" : "translate-x-[200px] opacity-0 z-[-1]"} lg:hidden bg-primary p-4 text-center absolute top-[60px] right-0 w-full sm:w-[300px] rounded-md transition-all duration-300`}>
                <div className="w-full relative mb-5">
                    <input
                        className="py-1.5 pr-4 pl-12 w-full rounded-full outline-none focus:border-primary"
                        placeholder="Search..." />
                    <IoIosSearch className="absolute top-[9px] left-5 text-text text-[1.3rem]" />
                </div>
                <ul className="items-center gap-[20px] text-[1rem] text-white flex flex-col">
                    <li className="hover:border-b-primary border-b-[2px] border-transparent transition-all duration-500 cursor-pointer capitalize">home</li>
                    <li className="hover:border-b-primary border-b-[2px] border-transparent transition-all duration-500 cursor-poin ter capitalize">about
                        us
                    </li>
                    <li className="hover:border-b-primary border-b-[2px] border-transparent transition-all duration-500 cursor-pointer capitalize">services</li>
                </ul>
            </aside>
        </nav>
    );
};

export default ResponsiveNavbar;

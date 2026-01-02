import { HOME_FRONT_URL } from "@/utils/urls/urlFront/privateUrl";
import { BsFillHouseFill, BsFillPersonFill, BsFillGearFill, BsListTask, BsArrowBarRight } from "react-icons/bs";
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '@/stores/authStore';
import React from 'react';
import AsideNavBarItem from "../AsideNavBarItem/AsideNavBarItem";

const AsideNavBar: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { user, logout } = useAuth();

    const PP_URL = `/assets/images/pp.jpg`;

    const sideBarCategories = [
        {
            title: 'Home',
            url: HOME_FRONT_URL,
            icon: BsFillHouseFill
        },
        {
            title: 'Profile',
            url: '/profile',
            icon: BsFillPersonFill
        },
        {
            title: 'Tasks',
            url: '/lists',
            icon: BsListTask
        },
        {
            title: 'Settings',
            url: '/settings',
            icon: BsFillGearFill
        }
    ];

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    const isActive = (url: string) => location.pathname === url;

    return (
        <aside className="col-span-2 bg-true-blue py-8 px-4 flex flex-col justify-between">
            <div className="flex flex-col gap-4">
                <div className="h-[100px] w-[100px] mx-auto">
                    <img src={PP_URL} alt="Profile" className="w-full h-full rounded-full object-cover border-4 border-white" />
                </div>
                <div className="text-center">
                    <h3 className="text-white text-lg font-semibold">{user?.name || 'User'}</h3>
                    <p className="text-white text-sm">{user?.email || ''}</p>
                </div>
                <ul className="flex flex-col gap-2">
                    {sideBarCategories.map((category) => {
                        const Icon = category.icon;
                        const active = isActive(category.url);
                        return (
                            <li key={category.title}>
                                <AsideNavBarItem category={category} active={active} Icon={Icon} />
                            </li>
                        );
                    })}
                </ul>
            </div>
            <button
                onClick={() => { handleLogout(); }}
                className="flex items-center gap-3 rounded-lg p-2 text-white hover:bg-white hover:text-true-blue transition-colors cursor-pointer"
            >
                <BsArrowBarRight className="h-8 w-8" />
                <span className="text-lg font-semibold">Log Out</span>
            </button>
        </aside>
    );
};

export default AsideNavBar;
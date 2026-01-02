import { Link } from "react-router-dom";
import React from "react";

interface AsideNavBarItemProps {
    category: { url: string; title: string };
    active: boolean;
    Icon: React.ElementType;
}

const AsideNavBarItem: React.FC<AsideNavBarItemProps> = ({ category, active, Icon }) => {
    return (
        <Link
            to={category.url}
            className={`group flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-light-blue hover:text-true-blue ${active
                    ? 'bg-white text-true-blue hover:text-true-blue'
                    : 'text-white hover:text-true-blue'
                }`}
        >
            <Icon className={`h-8 w-8 transition-colors ${active ? 'text-true-blue' : 'text-white group-hover:text-true-blue'}`} />
            <span className="text-lg font-semibold">
                {category.title}
            </span>
        </Link>
    );
};

export default AsideNavBarItem;
import React from 'react';
import {NavLink} from 'react-router-dom';
import { SiGooglemessages, SiHomify, SiJamboard} from 'react-icons/si';
import {FaBell, FaNetworkWired} from 'react-icons/fa';

const Navlinkage = ({href, link, svg}) => {
    return(
        <li className='point'>
            <NavLink to={href}>
                {svg} {link}
            </NavLink>
        </li>
    )
}

const NavData = [
    {
        link: "Home",
        svg: <SiHomify/>,
        href: '/'
    },
    {
        link: "My Network",
        svg: <FaNetworkWired />,
        href: "/network"
    },
    {
        link: "Jobs",
        svg: <SiJamboard />,
        href: "/jobs"
    },
    {
        link: "Messaging",
        svg: <SiGooglemessages />,
        href: "/messaging",
    },
    {
        link: "Notifications",
        svg: <FaBell />,
        href: "/notifications"
    }
]

export { Navlinkage, NavData}
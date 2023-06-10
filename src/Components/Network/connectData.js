import React from 'react';
import {FaNetworkWired} from 'react-icons/fa';

const connect = [
    {
        svg: <FaNetworkWired />,
        title: "Connections",
        total: () => Math.floor(Math.random() * 300),
    },
    {
        svg: <FaNetworkWired />,
        title: "Groups",
        total: () => Math.floor(Math.random() * 300),
    },
    {
        svg: <FaNetworkWired />,
        title: "Following & followers",
        total: () => Math.floor(Math.random() * 300),
    },
    {
        svg: <FaNetworkWired />,
        title: "Contacts",
        total: () => Math.floor(Math.random() * 300),
    },
]

export default connect;
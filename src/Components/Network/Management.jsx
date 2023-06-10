import connect from "./connectData";
import './../../paint/Network/management.css';
import {FaChevronDown} from 'react-icons/fa';
import React, {useEffect, useRef, useState} from 'react';

const Management = () => {
    const connections = useRef(null);
    const [condition, setCondition] = useState(false);

    useEffect(()=>{
        setCondition(false);
        const networking = [...document.querySelectorAll(".networking")];
        // get height
        let height = networking[0].clientHeight;
        let connectionsH = connections.current.clientHeight;
        connectionsH <= height ? connections.current.style.height = height * networking.length + "px" 
        : connections.current.style.height = height + "px";
        
    }, [condition])
    
    return <div className="management">
        <header className="manage-head">
            <h3>Manage my network</h3>
        </header>
        <div className="connections" ref={connections}>
            {
                connect.map((con, conIndex) => {
                    return <article className="networking" key={conIndex}>
                        {con.svg}
                        <p className="title">{con.title}</p>
                        <span className="count">{con.total()}</span>                        
                    </article>
                })
            }
        </div>
        <button className="show-less" onClick={()=> setCondition(prev => !prev)}>Show Less <FaChevronDown /> </button>
    </div>
}

export default Management;
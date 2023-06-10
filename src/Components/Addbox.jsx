import React from 'react';
import {FaPlus} from 'react-icons/fa';
import './../paint/addbox.css';

const Addbox = () => {
    return (
        <article className="addbox">
            <div className="pic">
                <span></span>
            </div>
            <div className="details">
                <h3 className="dept">Department</h3>
                <p className="category">company. Government Admin</p>
                <button className="follow">
                    <svg className='outline'>
                        <rect></rect>
                    </svg>
                    <FaPlus /> Follow
                </button>
            </div>
        </article>
    )
}

export default Addbox;
import './../../paint/Network/invitation.css';
import React, {useState} from 'react';
import {FaRegWindowClose} from 'react-icons/fa';

const People = () => {
    const [condition, setCondition] = useState(false);
    return <article className="people">
        <div className={`profile-photo ${condition ? "active" : null}`}>

        </div>
        {condition ? <div className='accepted'>
            <p className="confirm-me">Da-Hubb is now connection <a href='#'>Message</a></p>
            <FaRegWindowClose />
        </div> :
        <>
            <div className='detail'>
                <h4 className='name'>Da-Hubb</h4>
                <p className="status">Unemployed at none</p>
            </div>
            <button className='ignore'>Ignore</button>
            <button className='accept' onClick={() => {
                setCondition(true);
            }}>Accept</button>
        </>
        }
    </article>
}

const Invitation = () => {
    return (
        <div className="invitation">
            <header className="invite-head">
                <h3>Invitation</h3>
                <button className="show-all">See All <span className="count">7</span></button>
            </header>
            <People />
            <People />
            <People />
            <People />
        </div>
    )
}

export default Invitation;
import {FcDown, FcDoNotMix, FcPlus} from 'react-icons/fc';
import './../paint/recent.css';
import React, {useState, useEffect, useRef} from 'react';

const Recent = () => {
    const [condition, setCondition] = useState(true);
    const hashes = useRef(null);
    useEffect(()=>{
        const hash = [...document.querySelectorAll(".hash")];
        const hashContainer = hashes.current;
        // getting single height of a hash
        let height_of_hash = hash[0].clientHeight;
        let height_of_hashContainer = hashContainer.clientHeight;
        if(height_of_hashContainer === 0) {
            hashContainer.style.height = height_of_hash + "px";
        }else {
            hashContainer.style.height = 0 + "px";
        }
    }, [condition])
    
    return(
        <div className="recent">
            <article className='recent-main'>
                <header className="recent-head">
                    <p className="recent-text">Recent</p>
                    <FcDown 
                        style={{transform: condition && "rotate(0deg)"}}
                        onClick={() => setCondition(prevState => !prevState)}
                    />
                </header>
                <div className='hashes' ref={hashes}>
                    <article className="hash">
                        <FcDoNotMix /> <p className="hash-text">your recent</p>
                    </article>
                </div>
            </article>
            <div className="activities">
                <p className='group'>
                    <a href='#'>Group</a>
                </p>
                <p className='group'>
                    <a href='#'>Events</a>
                    <FcPlus />
                </p>
                <p className='group'>
                    <a href='#'>Followed Hashtags</a>
                </p>
            </div>
            <a className='discover' href='#'>
                Discover More
            </a>
        </div>
    )
}

export default Recent;
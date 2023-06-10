import { FaVideo, FaPhotoVideo } from 'react-icons/fa';
import {BsCalendarEvent, BsBook} from 'react-icons/bs';
import './../paint/Startpost.css';

const Operation = [
    {text: "Photo", svg: <FaPhotoVideo />},
    {text: "Video", svg: <FaVideo />},
    {text: "Event", svg: <BsCalendarEvent />},
    {text: "Write Article", svg: <BsBook />}
]

const Operational = ({text, svg}) => {
    return(
        <button className='button'>
            {svg} {text}
        </button>
    )
}

const Startpost = () => {
    const activities = Operation.map(act => {
        return <Operational
                key={act.text}
                {...act}
        />
    })

    return (
        <div className="post-start">
            <div className='post-input'>
                <span className='fig'></span>
                <input 
                    type='text'
                    name='write'
                    placeholder='Start a post'
                />
            </div>
            <div className='operation'>
                {activities}
            </div>
        </div>
    )
}

export default Startpost;
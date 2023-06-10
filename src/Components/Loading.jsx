import {FaLinkedin} from 'react-icons/fa'
import './../paint/loading.css';
const Loading = () => {
    return (
        <section className="loading">
            <FaLinkedin className='logo' />
            <div className='loader'></div>
        </section>
    )
}

export default Loading;
import './../paint/addfeed.css';
import {FaInfo, FaChevronRight} from 'react-icons/fa';
import Addbox from './Addbox';

const Addfeed = () => {
    return <div className="addfeed">
        <div className="addfeed-main">
            <header className="addhead">
                <h3 className="add-title">Add to your feed</h3>
                <FaInfo />
            </header>
            <Addbox />
            <Addbox />
            <Addbox />
            <a href="#">View all recommendations <FaChevronRight /></a>
        </div>
        <div className='empty'>

        </div>
        <footer className="add-foot">
            <p>About</p>
            <p>Accessibility</p>
            <p>Help Center</p>
            <p>Impressum</p>
            <p>Privacy & Terms</p>
            <p>Ad Choices</p>
            <p>Advertising</p>
            <p>Business Services</p>
            <p>Get the LinkedIn app</p>
            <p>More</p>
        </footer>
    </div>
}

export default Addfeed;
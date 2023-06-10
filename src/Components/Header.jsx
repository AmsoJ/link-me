import {FaLinkedin, FaSearch} from 'react-icons/fa';
import './../paint/header.css';
import Nav from './Nav';
const Header = () => {
    return(
        <header className="master">
            <FaLinkedin className='logo' />
            <div className='searchbar'>
                <FaSearch className='search-icon' />
                <input
                    type='text'
                    placeholder='search'
                    name='search'
                />
            </div>
           <Nav />
           <div className="other">
            <li>
                <FaLinkedin />
                For Business
            </li>
            <a href="premium">Try Premium for free</a>
           </div>
        </header>
    )
}

export default Header;
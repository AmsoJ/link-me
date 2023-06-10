import './../paint/profile.css';
import {FcApproval, FcPieChart, FcDown, FcDoNotMix, FcPlus} from 'react-icons/fc'
import Recent from './Recent';


const Profile = () => {
    return <div className='profile'>
        <div className='about-profile'>
            <figure className='cover-profile'>

            </figure>
            <fieldset className='main-profile'>
                <legend className='profile-pic'>

                </legend>
                <h3 className='profile-name'>Your Name</h3>
                <p className='skills'>lorem ipsum dolor</p>
            </fieldset>
            <div className='connect'>
                <header className='connect-head'>
                    <p className='connect-title'>Connections</p>
                    <output className='new-connects'>{Math.floor(Math.random() * 8)}</output>
                </header>
                <p className="connect-text"><b>Grow your network</b></p>
            </div>
            <div className='access'>
                <p className="access-text">Access exclusive tools & insights</p>
                <a className='link' href="#" onClick={e => e.preventDefault()}><FcApproval /> Try Premium for free</a>
            </div>
            <div className='insight'>
                <FcPieChart className='in-icons' /> <p className="in-text">My items</p>
            </div>
        </div>
        <Recent />
    </div>
}
export default Profile;
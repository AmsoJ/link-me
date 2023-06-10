import './../paint/home.css';
import Addfeed from './Addfeed';
import Postfeed from './Postfeed';
import Profile from './Profile';

function Home() {
    return <section className='home'>
        <Profile />
        <Postfeed />
        <Addfeed />
    </section>
}

export default Home;
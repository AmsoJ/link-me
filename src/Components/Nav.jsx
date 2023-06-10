import { NavData, Navlinkage } from "../Databox/NavData"
import './../paint/nav.css';

const Nav = () => {
    return(
        <nav className='compass'>
            <ul className='co-ordinates'>
                {
                    NavData.map(links => {
                        return(
                            <Navlinkage
                                key={links.link}
                                {...links}
                            />
                        )
                    })
                }
                <li className="point">
                    <span className="img"></span>
                    Me
                </li>
            </ul>
        </nav>
    )
}

export default Nav;
import Invitation from "./Network/Invitation";
import './../paint/Network/network.css';
import Management from "./Network/Management";

const Network = () => {
    return <section className="network">
        <div className="manage-network">
            <Management />
            <div className="blank"></div>
            <a href="#">Grow your network</a>
        </div>
        <div className="network-activites">
            <Invitation />
        </div>
    </section>
}

export default Network;
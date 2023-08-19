import logo from './images/logo.png';
import icon from './images/icon.png';
import dp from './images/dp.png';




function Header(){
    return(
<header id="header">
        <section id="tophead">
            <div className="container">
                <div className="row" >
                    <div className="col s4">
                        <a href="index.php" id="logo"><img src={logo} alt="Let's Vote" className="bigscreen"/><img src="{icon}" alt="Let's Vote" className="smallscreen"/></a>
                    </div>
                    <div className="col s8 topnav">
                        <ul>
                            <li id="viewnotifications"><a href="#!"><i className="fas fa-bell"></i> Notifications</a>
                                <div id="notifications">
                                    
                                </div>
                            </li>
                            <li id="toggleprofile"><a href="#!"><img src={dp} alt=""/> <i className="fas fa-sort-down"></i></a>
                                <div id="profilelinks">
                                    <div id="mobilefoot">
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </header>

    )
}
export default Header;
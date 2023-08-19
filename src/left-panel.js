import { Link } from 'react-router-dom';

function LeftPanel(){
    return(
<div className="col s12 m12 l2 personalinks">
<ul>
    <li><a href="index.php"><i className="fas fa-home"></i> Home</a></li>
    <li className="splmenu"><Link to="/create"><i className="fas fa-plus-circle"></i> Create Poll</Link></li>
    <li><a href="my-polls.php"><i className="fas fa-poll"></i> My Polls</a></li>
    <li><a href="#!"><i className="fas fa-hashtag"></i> Trends</a></li>
</ul>

<footer id="footer">
&copy; 2022. All Rights are Reserved.
<p><a href="#!">Terms &amp; Conditions</a> | <a href="#!">Privacy Policy</a></p>
</footer>

</div>
    );
}

export default LeftPanel;

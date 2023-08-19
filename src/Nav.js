import LeftPanel from './left-panel';
import Leftp from './leftp';
import RightPanel from './right-panel';
import Header from './header';
import MiddleArea from './mid-box';

function Nav(){

    return (
    <div>
    <Header />
     <LeftPanel/>
     <RightPanel item="Trending Polls"/>   
    </div>
    
    )
}

export default Nav;
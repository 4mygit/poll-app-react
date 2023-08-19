import LeftPanel from './left-panel';
import RightPanel from './right-panel';
import Header from './header';
import { Link } from 'react-router-dom';


function CreatePoll(){
    
    

    return (
    <div>
 <Header />
     <LeftPanel/>
     <div className="middle-box">
            
            <div className="sub-middle-box">
                <Link to='/plform' className='formelement'>Yes/No Poll </Link>
                <Link to='/yesno' className='formelement'>Multiple Choice </Link>
        
            </div>

            
      
        </div>
     
     <RightPanel item="Trending Polls"/>    </div>
    
    )
}

export default CreatePoll;
import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';

import LeftPanel from './left-panel';
import RightPanel from './right-panel';
import Header from './header';
import { getAuthToken } from './util/auth';

async function addPoll(pollname){
    const token = getAuthToken()
    console.log(token)
   const response = await fetch('http://localhost:3000/poll/v1/createynpoll',{
        method:'POST',
        body: JSON.stringify(pollname),
        headers:{
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+ token
        }
    });
    const data = await response.json();
    console.log(data)
}


function PollForm(){

    
   const nameInputRef = useRef();
    const [pollName, setpollName] =  useState('')
    const [pollId, setPollId] =  useState('')



const formSubmission = event =>{
    event.preventDefault()
    console.log(pollName)
    console.log(pollId)
    const pollData = {'pollname':pollName}
    addPoll(pollData)
}
    return (
    <div>
 <Header />
     <LeftPanel/>
     <div className="middle-box">
            
            <div className="sub-middle-box"><label>Create Poll</label></div>
            <div className="sub-middle-box">
                <form onSubmit={formSubmission}>
                <textarea  onChange={ e => setpollName(e.target.value)} id='pollname'></textarea>
                <textarea onChange={ e => setPollId(e.target.value)} id='pollid'></textarea>

                <button className='formelement'>Submit</button>
                </form>
            </div>

            
      
        </div>
     
     <RightPanel item="Trending Polls"/>    </div>
    
    )
}

export default PollForm;
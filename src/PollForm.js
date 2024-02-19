import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import { useEffect } from "react";

import LeftPanel from './left-panel';
import RightMenu from './right-menu';
import Header from './header';
import { getAuthToken } from './util/auth';




function PollForm(){

    const cars = ["Saab", "Volvo", "BMW"];

   const nameInputRef = useRef();
    const [pollName, setpollName] =  useState('')
    const [pollId, setPollId] =  useState('')
    const [pollDBData, setpollData] =  useState([])

    
    useEffect( () => {

        getpollDBData()
    }, [])
    

    async function addPoll(pollname){
        const token = getAuthToken()
       // console.log(token)
       const response = await fetch('http://localhost:3000/poll/v1/createynpoll',{
            method:'POST',
            body: JSON.stringify(pollname),
            headers:{
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+ token
            }
        });
        const data = await response.json();
        if(data.response == 'success'){
        getpollDBData()
        console.log(data.response)
    }
    }

    const getpollDBData = async () =>{
        const response = await fetch('http://localhost:3000/poll/v1/getpollnames');
        const pollData = await response.json()
       // console.log(pollData)
        //console.log(pollData[0])
        setpollData(pollData.response)
       console.log(pollData.response)
      // pollDBData.map(d => (console.log(d.pollname)))

    }   

 

const formSubmission = event =>{
    event.preventDefault()
    //console.log(pollName)
    //console.log(pollId)
    const pollData = {'pollname':pollName}
    addPoll(pollData)
    //getpollDBData()
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

                <button className='formelement'>Submit</button>
                </form>
            </div>

            
      
        </div>
     
     <RightMenu item="Trending Polls" pdata = {pollDBData}/>  
       </div>
    
    )
}

export default PollForm;
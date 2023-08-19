import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';


import LeftPanel from './left-panel';
import RightPanel from './right-panel';
import Header from './header';
import { getAuthToken } from './util/auth';
function Login(){

    const [inputFields, setInputFields] = useState([
        { name: '', salary: '' }
      ])

      async function addPoll(){
       // const token = getAuthToken()

        const response = await fetch('http://localhost:3000/poll/v1/login',{
             method:'GET',
            /*  body: JSON.stringify(pollname),
             headers:{
                 'Content-Type': 'application/json'
             } */
            });
         const data = await response.json();
         console.log(data.token)
         localStorage.setItem('token',data.token)
     }
     
     const formSubmission = event =>{
    event.preventDefault()
   
    addPoll()
}

/* const formSubmission = event =>{
    event.preventDefault()
    //console.log(pollName)
    console.log(inputFields)
}
const addFields = () => {
    let newField = { name: '', salary: '' }

    setInputFields([...inputFields, newField])
}

const handleFormChange = (event,index) => {
    let data = [...inputFields];
    data[index][event.target.name] = event.target.value;
    setInputFields(data);
 } */
    return (
    <div>
 <Header />
     <LeftPanel/>
     <div className="middle-box">
            
            <div className="sub-middle-box"><label>Create Poll</label></div>
            <div className="sub-middle-box">
                <form onSubmit={formSubmission}>
                <textarea   id='pollname'></textarea>
                

                {
                    inputFields.map((input, index) => {
                        return(
                        
                            
                <input name='name' key={index} value={input.name}  />
                     )}
                )
                }
                <button className='formelement' >Login</button> 
                </form>
            </div>
      
        </div>
     
     <RightPanel item="Trending Polls"/>    </div>
    
    )
}

export default Login;
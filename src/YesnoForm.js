import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';

import LeftPanel from './left-panel';
import RightPanel from './right-panel';
import Header from './header';

function YesnoForm(){

    const [inputFields, setInputFields] = useState([
        { name: '', salary: '' }
      ])

const formSubmission = event =>{
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
 }
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
                        
                            
                <input name='name' key={index} value={input.name}  onChange={event => handleFormChange(event, index)}/>
                     )}
                )
                }
                <button className='formelement' >Submit</button> <button className='formelement' onClick={addFields} >Add</button>
                </form>
            </div>

            
      
        </div>
     
     <RightPanel item="Trending Polls"/>    </div>
    
    )
}

export default YesnoForm;
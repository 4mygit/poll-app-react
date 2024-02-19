import { useEffect } from "react";
import { useState} from "react";

function RightMenu(props){
    const [pollDataObject, setpollDataObject] = useState([])
      useEffect( () => {

    const getpollData = async () =>{
        const response = await fetch('http://localhost:3000/poll/v1/getpollnames');
        const pollData = await response.json()
        //console.log(pollData)
        //console.log(pollData[0])
       setpollDataObject(pollData.response)
       console.log(pollData.response)
       pollDataObject.map(d => (console.log(d.pollname)))

    }   
    getpollData()

        }, [])

            const cars = ["Saab", "Volvo", "BMW"];

    return(
        <div className="comm new-right-panel">
                                
                           
                            <ul className="separator">
                            <li><div>{props.item}</div></li>
                            {props.pdata.map(d => (<li key={d.id}><a href="#">{d.pollname}</a></li>))}   

                            
                        
                     </ul>

                                      
    </div>

    );
}

export default RightMenu;

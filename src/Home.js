import React, { useEffect, useState } from "react";
import { Route, useNavigate } from "react-router-dom";

import LeftPanel from './left-panel';
import Leftp from './leftp';
import RightPanel from './right-panel';
import Header from './header';
import MiddleArea from './mid-box';

function Home(){


    const navigate = useNavigate();
    localStorage.setItem('user-token', 'jjjj');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const checkUserToken = () => {
        const userToken = localStorage.getItem('user-token');
        if (!userToken || userToken === 'undefined') {
            setIsLoggedIn(false);
            return navigate('/yesno');
        }
        setIsLoggedIn(true);
    }
    useEffect(() => {
            checkUserToken();
        }, [isLoggedIn]);


    return (
    <div>
    <Header />
     <LeftPanel/>
     <MiddleArea/>
     
     <RightPanel item="Trending Polls"/>   
    </div>
    
    )
}

export default Home;
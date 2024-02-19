import logo from './logo.svg';
import './App.css';
import "./style/style.css"
import "./css/normalize.css"
import "./css/materialize.min.css"
import "./css/animate.css"
import "./css/hover.css"
import "./css/project.css"



import LeftPanel from './left-panel';
import Leftp from './leftp';
import RightPanel from './right-panel';
import Header from './header';
import MiddleArea from './mid-box';
import Home from './Home';
import CreatePoll from './CreatePoll'
import PollForm from './PollForm';
import YesnoForm from './YesnoForm';
import Login from './Login';
import {action as Logout} from './logout'
import LinkLogout from './LinkLogout'

import Errorpage from './error'

import  {createBrowserRouter, createRoutesFromElements,  RouterProvider,Routes,Route} from 'react-router-dom';

const router = createBrowserRouter([
  {path: '/', element: <Home/>},
  {path: '/addvote', element: <RightPanel/>},
  {path: '/create', element: <CreatePoll/>},
  {path: '/plform', element: <PollForm/>},
  {path: '/yesno', element: <YesnoForm/>},
  {path: '/login', element: <Login/>},
  {path: '*', element: <Errorpage/>},
  {path: '/logout',action:Logout},
  


])




function App() {

  

  return (
    <RouterProvider router = {router} />
   );
}

export default App;

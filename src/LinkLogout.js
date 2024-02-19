import { redirect } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export function LinkLogout(){
    const navigate = useNavigate();

    localStorage.removeItem('ntoken')
    navigate('/');
}

export default LinkLogout;
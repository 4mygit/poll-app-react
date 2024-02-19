import { redirect } from "react-router-dom";

export function action(){
    localStorage.removeItem('ntoken')
    return redirect('/login')
}

export default action;
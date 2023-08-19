import { Outlet } from "react-router-dom";
import Nav from "./Nav";

function Common(){
return(
    <>
    <Nav />
    <Outlet/>
    </>
)
}

export default Common;
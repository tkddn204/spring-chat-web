import {createBrowserRouter, createRoutesFromElements, redirect, Route} from "react-router-dom";
import App from "../components/layout/App";
import Login from "../components/login/Login";
import Register from "../components/register/Register";
import ChatBox from "../components/chatting/ChatBox";
import OAuth from "../components/auth/OAuth";

const authLoader = async () => {
    const member = sessionStorage.getItem('member');
    if (!member) {
        return redirect("/login");
    }
    return null;
}

const RouterConfig = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<App/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/chat" loader={authLoader} element={<ChatBox/>}/>
            <Route path="/auth/:provider" element={<OAuth/>}/>
        </Route>
    ));

export default RouterConfig;
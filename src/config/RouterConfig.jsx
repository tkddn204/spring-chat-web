import {BrowserRouter as Router, redirect, Route, Routes} from "react-router-dom";
import App from "../components/layout/App";
import Login from "../components/login/Login";
import Register from "../components/register/Register";
import ChatBox from "../components/chatting/ChatBox";

const RouterConfig = () => (
    <Router>
        <Routes>
            <Route path="/" element={<App/>}>
                <Route path="login" element={<Login/>}/>
                <Route path="register" element={<Register/>}/>
                <Route path="chat" element={<ChatBox />} />
            </Route>
        </Routes>
    </Router>
);

export default RouterConfig;
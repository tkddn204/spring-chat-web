import {BrowserRouter as Router, redirect, Route, Routes} from "react-router-dom";
import App from "../containers/App";
import Login from "../containers/Login";
import AuthApi from "../api/auth";
import Register from "../containers/Register";
import GoogleLogin from "../components/GoogleLogin";

const Logout = async () => {
    await AuthApi.logout();
    return redirect("/");
};

const RouterConfig = () => (
    <Router>
        <Routes>
            <Route path="/" element={<App/>}>
                <Route path="login" element={<Login/>}/>
                <Route path="register" element={<Register/>}/>
                <Route path="logout" action={Logout}/>
                {/*<Route path="/auth/google/redirect" element={<GoogleLogin/>}/>*/}
            </Route>
        </Routes>
    </Router>
);

export default RouterConfig;
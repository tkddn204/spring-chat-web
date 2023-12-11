import {redirect, useLocation, useSearchParams} from "react-router-dom";
import {useEffect} from "react";

const GoogleLogin = () => {
    const [searchParams] = useSearchParams();
    useEffect(() => {
        sessionStorage.setItem("id", searchParams.get("id"));
        sessionStorage.setItem("name", searchParams.get("name"));
        sessionStorage.setItem("accessToken", searchParams.get("accessToken"));
    }, [searchParams]);

    return redirect("/");
};

export default GoogleLogin;
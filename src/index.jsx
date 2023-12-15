import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev";
import RouterConfig from "./config/RouterConfig";
import {RouterProvider} from "react-router-dom";

const googleClientId = process.env.REACT_APP_OAUTH_GOOGLE_CLIENT_ID;

const envCheck = () => {
    if (!googleClientId) {
        console.log("google client Id를 환경변수에 입력해주세요.");
        process.exit();
    }
    const kakaoClientId = process.env.REACT_APP_OAUTH_KAKAO_CLIENT_ID;
    if (!kakaoClientId) {
        console.log("kakao client Id를 환경변수에 입력해주세요.");
        process.exit();
    }
    const kakaoRedirectURI = process.env.REACT_APP_OAUTH_KAKAO_REDIRECT_URI;
    if (!kakaoRedirectURI) {
        console.log("kakao redirect URI를 환경변수에 입력해주세요.");
        process.exit();
    }
}
envCheck();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <DevSupport ComponentPreviews={ComponentPreviews}
                    useInitialHook={useInitial}
        >
            <RouterProvider router={RouterConfig}/>
        </DevSupport>
    </React.StrictMode>
);

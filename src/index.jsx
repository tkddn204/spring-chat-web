import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev";
import RouterConfig from "./config/RouterConfig";
import {GoogleOAuthProvider} from "@react-oauth/google";

let googleClientId = process.env.REACT_APP_OAUTH_GOOGLE_CLIENT_ID;
if (!googleClientId) {
    console.log("google clientId를 환경변수에 입력해주세요.");
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <DevSupport ComponentPreviews={ComponentPreviews}
                    useInitialHook={useInitial}
        >
            <GoogleOAuthProvider clientId={googleClientId}>
                <RouterConfig/>
            </GoogleOAuthProvider>
        </DevSupport>
    </React.StrictMode>
);

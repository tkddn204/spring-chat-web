import {useNavigate, useParams, useSearchParams} from "react-router-dom";
import {useEffect} from "react";
import AuthApi from "../../api/auth";
import {OAUTH_PROVIDER} from "../../constant/url";
import {debounce} from "lodash";

const OAuth = () => {
    const {provider} = useParams();
    const [params] = useSearchParams();
    const navigate = useNavigate();

    const requestOAuthLoginToServer = debounce((provider) => {
        const loginRequestParams = Object.fromEntries(params);
        if (provider === OAUTH_PROVIDER.google.toLowerCase()) {
            AuthApi.googleLogin(loginRequestParams).then(() => {
                navigate("/chat");
            })
        } else if (provider === OAUTH_PROVIDER.kakao.toLowerCase()) {
            AuthApi.kakaoLogin(loginRequestParams).then(() => {
                navigate("/chat");
            })
        }
    }, 500);

    useEffect(() => {
        requestOAuthLoginToServer(provider);
    }, []);

    return (
        <div>
            {`${provider} OAuth 로그인 중...`}
        </div>
    );
}

export default OAuth;
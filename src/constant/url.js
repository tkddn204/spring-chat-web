export const API_BASE_URL = "http://localhost:8080";
export const API_AUTH_URL = `${API_BASE_URL}/v1/auth`;
export const API_OAUTH_URL = `${API_BASE_URL}/v1/oauth`;
export const API_CHAT_URL = `${API_BASE_URL}/v1/chat`;

export const OAUTH_PROVIDER = {
    google: 'GOOGLE',
    kakao: 'KAKAO'
}

export const OAUTH_API_URL = {
    GOOGLE: `https://accounts.google.com/o/oauth2/v2/auth`,
    KAKAO: `https://kauth.kakao.com/oauth/authorize`
}

export const OAUTH_PARAMS = {
    GOOGLE: {
        client_id: process.env.REACT_APP_OAUTH_GOOGLE_CLIENT_ID,
        redirect_uri: process.env.REACT_APP_OAUTH_GOOGLE_REDIRECT_URI,
        response_type: 'code',
        scope: 'openid email profile'
    },
    KAKAO: {
        client_id: process.env.REACT_APP_OAUTH_KAKAO_CLIENT_ID,
        redirect_uri: process.env.REACT_APP_OAUTH_KAKAO_REDIRECT_URI,
        response_type: 'code',
        scope: 'openid profile_image profile_nickname account_email'
    }
}
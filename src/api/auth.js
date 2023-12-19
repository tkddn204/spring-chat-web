import axios, {HttpStatusCode} from "axios";
import {API_AUTH_URL, API_OAUTH_URL} from "../constant/url";
import _ from "lodash";
import {disconnectSocket} from "./chat";

class AuthApi {
    async login(username, password) {
        const response = await axios.post(`${API_AUTH_URL}/authenticate`, {
            username,
            password
        });

        if (response.status >= HttpStatusCode.BadRequest) {
            console.log(response);
            return response.data;
        }


        sessionStorage.setItem("member", JSON.stringify(response.data));
        return response.data;
    }

    async logout() {
        const response = await axios.post(`${API_AUTH_URL}/signout`,
            {},
            {headers: this.authHeader()});

        if (response.status >= 400) {
            console.log(response);
        }

        disconnectSocket()
        return response.data;
    }

    async register(email, password, name) {
        const response = await axios.post(`${API_AUTH_URL}/register`, {
            email,
            password,
            name
        });

        if (response.status >= 400) {
            console.log(response);
            return response.data;
        }

        sessionStorage.setItem("member", JSON.stringify(response.data));
        return response.data;
    }

    authHeader() {
        const member = JSON.parse(sessionStorage.getItem("member"));

        const res = {};
        if (_.has(member, 'accessToken')) {
            res.Authorization = `Bearer ${member.accessToken}`;
        }
        return res;
    }

    async getMemberInfo() {
        const response = await axios.get(`${API_AUTH_URL}/info`);

        if (response.status >= 400) {
            console.log(response);
            return response.data;
        }

        sessionStorage.setItem("member", JSON.stringify(response.data));
        return response.data;
    }

    async googleLogin({ code }) {
        const response = await axios.post(`${API_OAUTH_URL}/login/google`, {
            code
        });
        
        if (response.status >= HttpStatusCode.BadRequest) {
            console.log(response);
            return response.data;
        }

        sessionStorage.setItem("member", JSON.stringify(response.data));
    }

    async kakaoLogin({code}) {
        const response = await axios.post(`${API_OAUTH_URL}/login/kakao`, {
            code
        });

        if (response.status >= HttpStatusCode.BadRequest) {
            console.log(response);
            return response.data;
        }

        sessionStorage.setItem("member", JSON.stringify(response.data));
    }
}

export default new AuthApi();
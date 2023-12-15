import axios from "axios";
import {API_CHAT_URL} from "../constant/url";


class ChatAPI {
    async getAllRooms() {
        const response = await axios.get(API_CHAT_URL);

        if (response.status >= 400) {
            console.log(response);
            return response.data;
        }
        console.log(response);

        return response.data;
    }
}

export default new ChatAPI();
import axios from "axios";
import {API_CHAT_URL} from "../constant/url";
import AuthApi from "./auth";
import * as SockJS from "sockjs-client";
import {ActivationState, Client} from "@stomp/stompjs";
import _ from "lodash";

let stompClient;
let sub;

const isConnected = () => {
    return !_.isUndefined(stompClient) && stompClient.status === ActivationState.ACTIVE
}

const connectSocket = async (roomId) => {
    const authHeader = {
        Authorization: JSON.parse(sessionStorage.getItem("member")).accessToken
    };

    stompClient = new Client({
        webSocketFactory: () => new SockJS('http://localhost:8080/v1/chat/stomp'),
        connectHeaders: authHeader,
        disconnectHeaders: authHeader,
        onConnect: frame => {
            console.log(`Socket Connected.`)
            console.log(frame)
            sub = stompClient.subscribe(`/topic/${roomId}`,
                message => {
                    console.log(`Received: ${message}`)
                },
                authHeader
            )
            console.log(`Socket Subscribed. ${sub.id}`)
        }
    });
    stompClient.activate();
}

const disconnectSocket = () => {
    const authHeader = {
        Authorization: JSON.parse(sessionStorage.getItem("member")).accessToken
    };

    if (isConnected()) {
        stompClient.unsubscribe(sub, authHeader);
        stompClient.deactivate();
    }
}

const sendMessage = (roomId, message) => {
    const authHeader = {
        Authorization: JSON.parse(sessionStorage.getItem("member")).accessToken
    };

    if (isConnected) {
        stompClient.publish({
            destination: `/topic/message`,
            headers: authHeader,
            body: JSON.stringify(message)
        });
    }
}

const getAllRooms = async () => {
    const response = await axios.get(API_CHAT_URL);

    if (response.status >= 400) {
        console.log(response);
        return response.data;
    }
    console.log(response);

    return response.data;
}

const getChatMessages = async (roomId) => {
    const response = await axios.get(API_CHAT_URL + `/room/message/${roomId}`,
        {headers: AuthApi.authHeader()});

    if (response.status >= 400) {
        console.log(response);
        return response.data;
    }
    console.log(response);

    return response.data;
}

const createRoom = async () => {
    const response = await axios.post(API_CHAT_URL + `/room`,
        {
            roomName: "채팅방" + (Math.random() * 100000)
        },
        {headers: AuthApi.authHeader()});

    if (response.status >= 400) {
        console.log(response);
        return response.data;
    }
    console.log(response);

    return response.status === 200 ? Promise.resolve() : Promise.reject();
}

const enterRoom = async (roomId) => {
    const response = await axios.get(API_CHAT_URL + `/room/enter/${roomId}`,
        {headers: AuthApi.authHeader()});

    if (response.status >= 400) {
        console.log(response);
        return response.data;
    }
    console.log(response);

    return response.status === 200 ? Promise.resolve() : Promise.reject();
}

export {
    isConnected,
    connectSocket,
    disconnectSocket,
    getAllRooms,
    getChatMessages,
    createRoom,
    enterRoom,
    sendMessage
}
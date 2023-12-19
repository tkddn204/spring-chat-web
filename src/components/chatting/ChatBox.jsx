import ChatRoomList from "./room/ChatRoomList";
import ChatMessageList from "./message/ChatMessageList";
import {useEffect, useState} from "react";
import Header from "../layout/Header";
import _, {debounce} from "lodash";
import {connectSocket, createRoom, enterRoom, getAllRooms} from "../../api/chat";

const ChatBox = () => {
    const [chatRooms, setChatRooms] = useState([]);
    const [currentChatRoomId, setCurrentChatRoomId] = useState(0);


    const onPlusButtonClick = (event) => {
        event.preventDefault();
        createRoom().then(success => {
            loadChatRoomsFromServer();
        })
    }

    const onClickChatRoomItem = async (roomId) => {
        await enterRoom(roomId);
        setCurrentChatRoomId(roomId);
        await connectSocket(roomId);
    }

    const loadChatRoomsFromServer = debounce(() => {
        getAllRooms().then(res => {
            if (_.has(res, 'chatRooms')) {
                setChatRooms(res.chatRooms);
            }
        })
    }, 500)

    useEffect(() => {
        loadChatRoomsFromServer();
        const timer = setTimeout(() => {
            loadChatRoomsFromServer();
        }, 10000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="container mx-auto">
            <Header/>
            <div className=" h-screen">
                <div className="flex border border-grey rounded shadow-lg h-full">
                    <ChatRoomList chatRooms={chatRooms}
                                  onPlusButtonClick={onPlusButtonClick}
                                  onClickChatRoomItem={onClickChatRoomItem}
                    />
                    <ChatMessageList currentRoomId={currentChatRoomId}/>
                </div>
            </div>
        </div>
    );
}

export default ChatBox;
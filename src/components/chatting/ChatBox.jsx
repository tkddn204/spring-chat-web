import ChatRoomList from "./room/ChatRoomList";
import ChatMessageList from "./message/ChatMessageList";
import ChatAPI from '../../api/chat';
import {useEffect, useState} from "react";

const ChatBox = () => {
    const [chatRooms, setChatRooms] = useState([]);
    const [currentChatRoom, setCurrentChatRoom] = useState({});

    // useEffect(() => {
    //     setChatRoom(ChatAPI.getAllRooms());
    // }, []);

    return (
        <div className="container mx-auto">
            <div className="py-6 h-screen">
                <div className="flex border border-grey rounded shadow-lg h-full">
                    <ChatRoomList chatRoom={chatRooms}/>
                    <ChatMessageList chatRoom={currentChatRoom} />
                </div>
            </div>
        </div>
    );
}

export default ChatBox;
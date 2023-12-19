import {useEffect, useState} from "react";
import ChatMessageListHeader from "./ChatMessageListHeader";
import ChatMessageInput from "./ChatMessageInput";
import DateMessageItem from "./items/DateMessageItem";
import _ from "lodash";
import {getChatMessages} from "../../../api/chat";

const ChatMessageList = ({currentRoomId}) => {
    const [chatMessage, setChatMessage] = useState([]);
    const [nextDay, setNextDay] = useState(new Date(0));

    useEffect(() => {
        getChatMessages(currentRoomId).then(setChatMessage)
    }, [currentRoomId]);

    const isNewDay = (date) => {
        if (date > nextDay) {
            const tommorow = new Date(date);
            tommorow.setDate(date.getDate() + 1);
            setNextDay(tommorow);
            return true;
        }
        return false;
    }

    return (
        <div className="w-2/3 border flex flex-col">
            <ChatMessageListHeader />
            <div className="bg-gray-50 flex-1 overflow-auto">
                <ul role="list">
                    {!_.isEmpty(chatMessage) ? chatMessage.map((message) => (
                        <>
                            {isNewDay(message.date) ? <DateMessageItem date={nextDay} /> : null}
                            <li key={message.id} className="flex justify-between gap-x-6 py-5">
                                {message.message}
                            </li>
                        </>
                    )) : null }
                </ul>
            </div>
            <ChatMessageInput roomId={currentRoomId}/>
        </div>
    )
}

export default ChatMessageList;
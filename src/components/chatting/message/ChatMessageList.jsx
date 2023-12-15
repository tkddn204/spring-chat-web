import {useState} from "react";
import ChatMessageListHeader from "./ChatMessageListHeader";
import ChatMessageInput from "./ChatMessageInput";
import DateMessageItem from "./items/DateMessageItem";

const ChatMessageList = ({ chatRoom }) => {
    const [chatMessage, setChatMessage] = useState(chatRoom ? chatRoom.messages : []);
    const [nextDay, setNextDay] = useState(new Date(0));

    const isNewDay = (date) => {
        if (date > nextDay) {
            // TODO: 다음 Date 계산?
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
                    {Array.isArray(chatMessage) && chatMessage.length ? chatMessage.map((message) => (
                        <>
                            {isNewDay(message.date) ? <DateMessageItem date={nextDay} /> : null}
                            <li key={message.id} className="flex justify-between gap-x-6 py-5">
                                {message.message}
                            </li>
                        </>
                    )) : null }
                </ul>
            </div>
            <ChatMessageInput />
        </div>
    )
}

export default ChatMessageList;
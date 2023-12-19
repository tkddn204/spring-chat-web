import SendButton from "./SendButton";
import {sendMessage} from "../../../api/chat";
import {useState} from "react";

const ChatMessageInput = ({roomId}) => {
    const [message, setMessage] = useState("")

    const onChangeInput = e => {
        setMessage(e.target.value)
    }
    const onClickSendButton = () => {
        const messageObj = {
            messageType: "MESSAGE",
            roomId,
            message,
            timeStamp: +new Date()
        }
        sendMessage(roomId, messageObj)
        setMessage("")
    }

    return (
        <div className="bg-grey-lighter px-4 py-4 flex items-center">
            <div className="flex-1 mx-4">
                <input
                    onChange={onChangeInput}
                    value={message}
                    disabled={!roomId}
                    className="w-full border rounded px-2 py-2" type="text"
                    placeholder="메세지 입력..."
                />
            </div>
            <div>
                <SendButton onClickSendButton={onClickSendButton}/>
            </div>
        </div>
    );
}

export default ChatMessageInput;
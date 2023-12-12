import SendButton from "./SendButton";

const ChatMessageInput = () => {
    return (
        <div className="bg-grey-lighter px-4 py-4 flex items-center">
            <div className="flex-1 mx-4">
                <input
                    className="w-full border rounded px-2 py-2" type="text"
                    placeholder="메세지 입력..."
                />
            </div>
            <div>
                <SendButton />
            </div>
        </div>
    );
}

export default ChatMessageInput;
import EllipsisButton from "./EllipsisButton";

const ChatRoomListHeader = () => {
    return (
        <div
            className="flex items-center bg-emerald-50 py-3 px-3 bg-grey-lighter flex-row justify-between">
            <span className="text-2xl">채팅 메세지</span>
            <div className="cursor-pointer">
                <EllipsisButton/>
            </div>
        </div>
    );
}

export default ChatRoomListHeader;
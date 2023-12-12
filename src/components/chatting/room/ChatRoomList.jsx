import ChatRoomListHeader from "./ChatRoomListHeader";
import _ from "lodash";
import ChatRoomItem from "./ChatRoomItem";

const ChatRoomList = ({chatRooms}) => {
    return (
        <div className="w-1/3 border flex flex-col">
            <ChatRoomListHeader/>
            <ul role="list" className="bg-grey-lighter flex-1 overflow-auto">
                {Array.isArray(chatRooms) && chatRooms.length ? chatRooms.map((room) =>
                    <ChatRoomItem roomInfo={room}/>
                ) : null}
            </ul>
        </div>
    )
}

export default ChatRoomList;
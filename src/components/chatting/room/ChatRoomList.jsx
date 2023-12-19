import ChatRoomListHeader from "./ChatRoomListHeader";
import ChatRoomItem from "./ChatRoomItem";
import _ from "lodash";

const ChatRoomList = ({chatRooms, onPlusButtonClick, onClickChatRoomItem}) => {
    return (
        <div className="w-1/3 border flex flex-col">
            <ChatRoomListHeader onPlusButtonClick={onPlusButtonClick}/>
            <ul role="list" className="bg-grey-lighter flex-1 overflow-auto">
                {!_.isEmpty(chatRooms) ? chatRooms.map((room) =>
                    <ChatRoomItem key={room.roomId} onClick={() => onClickChatRoomItem(room.roomId)} roomInfo={room}/>
                ) : null}
            </ul>
        </div>
    )
}

export default ChatRoomList;
const ChatRoomItem = ({onClick, roomInfo}) => {
    return (<li onClick={onClick} className="px-3 flex items-center bg-grey-light cursor-pointer hover:bg-emerald-100">
        <div className="flex min-w-0 gap-x-4 mx-4 flex-1 border-b border-grey-lighter py-4">
            <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">{roomInfo.roomName}</p>
            </div>
            <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
                <p className="mt-1 text-xs leading-5 text-gray-500">
                    {roomInfo.totalMember}명
                </p>
            </div>
        </div>
    </li>);
}

export default ChatRoomItem;
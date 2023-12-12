const ChatRoomItem = ({roomInfo}) => {
    return () => {
        return (<li key={roomInfo.id} className="px-3 flex items-center bg-grey-light cursor-pointer">
            <div className="flex min-w-0 gap-x-4 ml-4 flex-1 border-b border-grey-lighter py-4">
                <div className="min-w-0 flex-auto">
                    <p className="text-sm font-semibold leading-6 text-gray-900" style={`
                                [data-letters]:before {
                                content:attr(data-letters);
                                display:inline-block;
                                font-size:1em;
                                width:2.5em;
                                height:2.5em;
                                line-height:2.5em;
                                text-align:center;
                                border-radius:50%;
                                background:plum;
                                vertical-align:middle;
                                margin-right:1em;
                                color:white;
                            }`}>{roomInfo.name}</p>
                </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <p className="text-sm leading-6 text-gray-900">{roomInfo.title}</p>
                <p className="mt-1 text-xs leading-5 text-gray-500">
                    {roomInfo.count}
                </p>
            </div>
        </li>);
    }
}

export default ChatRoomItem;
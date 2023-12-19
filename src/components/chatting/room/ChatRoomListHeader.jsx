import SearchButton from "./SearchButton";
import {useRef, useState} from "react";
import PlusButton from "./PlusButton";

const ChatRoomListHeader = ({onPlusButtonClick}) => {
    const searchInputRef = useRef(null);
    const [isOpenSearchInput, setOpenSearchInput] = useState(false);

    const onSearchButtonClick = (event) => {
        event.preventDefault();
        setOpenSearchInput(!isOpenSearchInput);
        if (isOpenSearchInput) searchInputRef.current.focus();
    }

    return (
        <div className="bg-emerald-50 py-3 px-3">
            <div className="bg-grey-lighter flex flex-row justify-between items-center">
                <div className="flex flex-row justify-between">
                    <span className="text-2xl">채팅방 리스트</span>
                    <div className="ml-3 cursor-pointer" onClick={onPlusButtonClick}>
                        <PlusButton/>
                    </div>
                </div>
                <div className="cursor-pointer" onClick={onSearchButtonClick}>
                    <SearchButton/>
                </div>
            </div>

            {isOpenSearchInput ?
                <div className="py-2 px-2 bg-grey-lightest">
                    <input type="text" className="w-full px-2 py-2 text-sm" placeholder="Search or start new chat"
                           ref={searchInputRef}/>
                </div> : null}
        </div>
    );
}

export default ChatRoomListHeader;
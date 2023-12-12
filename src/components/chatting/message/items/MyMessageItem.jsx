const MyMessageItem = ({messageInfo}) => {
    return () => {
        return (
            <div className="flex justify-end mb-2">
                <div class="bg-amber-100 rounded py-2 px-3">
                    <p className="text-sm mt-1">
                        {messageInfo.message}
                    </p>
                    <p className="text-right text-xs text-grey-dark mt-1">
                        {messageInfo.date}
                    </p>
                </div>
            </div>
        );
    }
}

export default MyMessageItem;
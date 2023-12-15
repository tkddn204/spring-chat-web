const OtherMessageItem = ({messageInfo}) => {
    return () => {
        return (
            <div className="flex mb-2">
                <div className="bg-emerald-100 rounded py-2 px-3">
                    <p className="text-sm text-teal">
                        {messageInfo.name}
                    </p>
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

export default OtherMessageItem;
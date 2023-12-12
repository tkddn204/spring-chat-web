const DateMessageItem = ({date}) => {
    return () => {
        return (
            <div className="flex justify-center mb-2">
                <div className="bg-gray-200 rounded py-2 px-4">
                    {date}
                </div>
            </div>
        );
    }
}

export default DateMessageItem;
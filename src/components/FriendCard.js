const FriendCard = ({ picture, firstName, lastName }) => {
    return (
        <div className="flex flex-col items-center max-w-sm  rounded-lg border  shadow-md bg-gray-800 border-gray-700">
            <img className="mt-5 rounded-xl" src={picture} alt="" />

            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                    {firstName} {lastName}
                </h5>
            </div>
        </div>
    );
};

export default FriendCard;

import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { FriendsContext } from "../contexts/Friends";

import FriendCard from "../components/FriendCard";

const Friends = () => {
    const { friends } = useContext(FriendsContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!friends) {
            navigate("/profile");
        }
        // eslint-disable-next-line
    }, []);

    return (
        <article className="py-5 flex flex-col items-center justify-center text-center bg-black min-h-[100vh]">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {friends?.map((friend) => {
                    return (
                        <FriendCard
                            key={friend?.name.first}
                            picture={friend?.picture.large}
                            firstName={friend?.name.first}
                            lastName={friend?.name.last}
                        />
                    );
                })}
            </div>
        </article>
    );
};

export default Friends;

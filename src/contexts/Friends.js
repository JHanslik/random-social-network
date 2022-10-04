import { createContext, useState } from "react";

const FriendsContext = createContext({});

const FriendsContextProvider = ({ children }) => {
    const [friends, setFriends] = useState(null);

    const value = {
        friends,
        setFriends,
    };

    return (
        <FriendsContext.Provider value={value}>
            {children}
        </FriendsContext.Provider>
    );
};

export { FriendsContext, FriendsContextProvider };

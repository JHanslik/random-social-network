import { BrowserRouter, Routes, Route } from "react-router-dom";

import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Friends from "./pages/Friends";

import { UserContextProvider } from "./contexts/User";
import { FriendsContextProvider } from "./contexts/Friends";

const App = () => {
    return (
        <BrowserRouter>
            <UserContextProvider>
                <FriendsContextProvider>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/friends" element={<Friends />} />
                    </Routes>
                </FriendsContextProvider>
            </UserContextProvider>
        </BrowserRouter>
    );
};

export default App;

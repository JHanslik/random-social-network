import { BrowserRouter, Routes, Route } from "react-router-dom";

import Profile from "./pages/Profile";
import Login from "./pages/Login";

import { UserContextProvider } from "./contexts/User";

const App = () => {
    return (
        <BrowserRouter>
            <UserContextProvider>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </UserContextProvider>
        </BrowserRouter>
    );
};

export default App;

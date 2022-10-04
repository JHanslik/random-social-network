import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/User";
import { FriendsContext } from "../contexts/Friends";

import moment from "moment";
import FriendCard from "../components/FriendCard";

const Profile = () => {
    const { user } = useContext(UserContext);
    const { friends, setFriends } = useContext(FriendsContext);
    const [element, setElement] = useState(1);

    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate("/");
        }
        // eslint-disable-next-line
    }, []);

    const onHoverUser = () => {
        setElement(1);
    };

    const onHoverEmail = () => {
        setElement(2);
    };

    const onHoverDob = () => {
        setElement(3);
    };

    const onHoverAddress = () => {
        setElement(4);
    };

    const onHoverPhone = () => {
        setElement(5);
    };

    const onHoverPassword = () => {
        setElement(6);
    };

    const fetchFriends = async () => {
        const request = await fetch(
            `
                https://randomuser.me/api/?results=${Math.floor(
                    Math.random() * 50 + 1
                )}`
        );
        const response = await request.json();
        console.log(response.results);
        setFriends(response.results);
    };

    return (
        <article className="flex flex-col items-center justify-center text-center bg-black min-h-[100vh]">
            <img
                className="rounded-full border-4 border-black my-5"
                src={user?.picture.large}
                alt={user?.name.first}
            />
            {element === 1 && (
                <div>
                    <p className="text-white">Hi, my name is</p>
                    <h1 className="text-white text-2xl font-bold">
                        {user?.name.first} {user?.name.last}
                    </h1>
                </div>
            )}
            {element === 2 && (
                <div>
                    <p className="text-white">My email address is</p>
                    <h1 className="text-white text-2xl font-bold">
                        {user?.email}
                    </h1>
                </div>
            )}
            {element === 3 && (
                <div>
                    <p className="text-white">My birthday is</p>
                    <h1 className="text-white text-2xl font-bold">
                        {moment(user?.dob.date).format("DD/MM/YYYY")}
                    </h1>
                </div>
            )}
            {element === 4 && (
                <div>
                    <p className="text-white">My address is</p>
                    <h1 className="text-white text-2xl font-bold">
                        {user?.location.street.number}{" "}
                        {user?.location.street.name}
                    </h1>
                </div>
            )}
            {element === 5 && (
                <div>
                    <p className="text-white">My phone number is</p>
                    <h1 className="text-white text-2xl font-bold">
                        {user?.cell}
                    </h1>
                </div>
            )}
            {element === 6 && (
                <div>
                    <p className="text-white">My password is</p>
                    <h1 className="text-white text-2xl font-bold">
                        {user?.login.password}
                    </h1>
                </div>
            )}

            <div>
                <ul className="flex my-5">
                    <li
                        onMouseEnter={onHoverUser}
                        className={`mx-3 ${
                            element === 1 ? "text-emerald-500" : "text-white"
                        }`}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                        </svg>
                    </li>
                    <li
                        onMouseEnter={onHoverEmail}
                        className={`mx-3 ${
                            element === 2 ? "text-emerald-500" : "text-white"
                        }`}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                            />
                        </svg>
                    </li>
                    <li
                        onMouseEnter={onHoverDob}
                        className={`mx-3 ${
                            element === 3 ? "text-emerald-500" : "text-white"
                        }`}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                            />
                        </svg>
                    </li>
                    <li
                        onMouseEnter={onHoverAddress}
                        className={`mx-3 ${
                            element === 4 ? "text-emerald-500" : "text-white"
                        }`}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
                            />
                        </svg>
                    </li>
                    <li
                        onMouseEnter={onHoverPhone}
                        className={`mx-3 ${
                            element === 5 ? "text-emerald-500" : "text-white"
                        }`}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                            />
                        </svg>
                    </li>
                    <li
                        onMouseEnter={onHoverPassword}
                        className={`mx-3 ${
                            element === 6 ? "text-emerald-500" : "text-white"
                        }`}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                            />
                        </svg>
                    </li>
                </ul>
            </div>
            {!friends ? (
                <button
                    className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                    type="button"
                    onClick={fetchFriends}
                >
                    Add friends
                </button>
            ) : (
                <section>
                    <h3 className="text-white text-xl font-bold">Friends :</h3>
                    <Link to={"/friends"} className="text-cyan-400">
                        Friends' page
                    </Link>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                        {friends.map((friend) => {
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
                </section>
            )}
        </article>
    );
};

export default Profile;

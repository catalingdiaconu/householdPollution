import React, { useState } from "react";

export const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center h-screen">
            <label className="mb-2">
                <span className="text-gray-700">Username:</span>
                <input type="text" value={username} onChange={handleUsernameChange} className="block w-full p-2 border rounded-md" />
            </label>
            <label className="mb-2">
                <span className="text-gray-700">Password:</span>
                <input type="password" value={password} onChange={handlePasswordChange} className="block w-full p-2 border rounded-md" />
            </label>
            <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">Login</button>
        </form>
    );
};

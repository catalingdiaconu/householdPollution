import React, { useState } from "react";

interface LoginProps {
    onLogin: (username: string, password: string) => void;
}

export const Login: React.FC = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
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

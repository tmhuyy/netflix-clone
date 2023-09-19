"use client";

import { useState } from "react";
import Input from "@/components/Input";

const Auth = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const changeEmailHandler = function (e: any) {
        setEmail(e.target.value);
    };

    return (
        <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
            <div className="bg-black w-full h-full lg:bg-opacity-50">
                <nav className="px-12 py-15">
                    <img
                        src="/images/logo.png"
                        alt="netflix logo"
                        className="h-12"
                    />
                </nav>
                <div className="flex justify-center">
                    <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
                        <h2 className="text-white text-4xl mb-8 font-semibold">
                            Sign in
                        </h2>
                        <div className="flex flex-col gap-4">
                            <Input
                                id="username"
                                onChange={(e: any) =>
                                    setUsername(e.target.value)
                                }
                                label="Username"
                                type="username"
                                value={username}
                            />
                            <Input
                                id="email"
                                onChange={(e: any) => setEmail(e.target.value)}
                                label="Email"
                                type="email"
                                value={email}
                            />
                            <Input
                                id="password"
                                onChange={(e: any) =>
                                    setPassword(e.target.value)
                                }
                                label="Password"
                                type="password"
                                value={password}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Auth;

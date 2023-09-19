"use client";

import { useCallback, useState } from "react";
import Input from "@/components/Input";

const Auth = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [variant, setVariant] = useState("login");

    const toggleVariant = useCallback(() => {
        setVariant((preVariant) =>
            preVariant === "login" ? "register" : "login"
        );
    }, []);

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
                            {variant === "login"
                                ? "Sign in"
                                : "Create an account"}
                        </h2>
                        <div className="flex flex-col gap-4">
                            {variant === "register" && (
                                <Input
                                    id="username"
                                    onChange={(e: any) =>
                                        setUsername(e.target.value)
                                    }
                                    label="Username"
                                    type="username"
                                    value={username}
                                />
                            )}

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
                        <button className="w-full bg-red-500 py-3 mt-7 text-white rounded-md hover:bg-red-700 transition">
                            Login
                        </button>
                        <p className="text-neutral-500 mt-12">
                            First time using Netflix?
                            <span
                                onClick={toggleVariant}
                                className="text-white ml-1 hover:underline cursor-pointer"
                            >
                                Create an account
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Auth;

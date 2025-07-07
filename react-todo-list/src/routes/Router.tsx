import React from "react";
import {Routes, Route} from "react-router-dom";
//BrowserRouter,

// INTERFACE
import {UserInterface} from "../interfaces/user.interface";

// COMPONENTS
import {SignUp} from "../pages/signUp";
import {Login} from "../pages/login";
import {Main} from "../pages/main";

type AppRouterType = {
    isLogin: boolean;
    userInfo: UserInterface | null;
};

export const AppRouter = ({ isLogin, userInfo }: AppRouterType) => {
    console.log("AppRouter isLogin:", isLogin);
    console.log("AppRouter userInfo:", userInfo);

    return (
    <Routes>
        <Route
            path="/"
            element={
            isLogin ? <Main userInfo={userInfo} /> : <Login />
            }
        />
        <Route path="/signup" element={<SignUp />} />
    </Routes>
    );
};


export {};
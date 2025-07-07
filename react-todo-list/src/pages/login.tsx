import React, { ChangeEvent, useState } from "react";
import { Link, useNavigate} from "react-router-dom";

// INTERFACE
import { UserInputInterface } from "../interfaces/user.interface";

// CSS
import { UserForm } from "../styles/userForm.styled";
import { Button, TextField } from "@mui/material";

import { firebaseAuth } from "../initFirebase";
import { signInWithEmailAndPassword } from "firebase/auth";


export const Login = () => {
    const [inputs, setInputs] = useState<UserInputInterface>({
    email: "",
    password: "",
    });
    const navigate = useNavigate();

    const { email, password } = inputs;

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setInputs({ ...inputs, [name]: value });
    };
    const onSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        await signInWithEmailAndPassword(firebaseAuth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("로그인 성공:", user);
            navigate("/");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.warn(`${errorCode} = ${errorMessage}`);
        });
    };

    return (
    <UserForm>
        <div className={"doc-title"}>
        <span>Login</span>
        </div>
        <article className={"user-form-article"}>
        <div className={"user-form-wrap"}>
            <div className={"user-form"}>
            <form onSubmit={onSubmit}>
            <TextField
                onChange={onChange}
                value={email}
                label="이메일"
                variant="outlined"
                name={"email"}
                type={"email"}
                required
            />
            <TextField
                onChange={onChange}
                value={password}
                label="password"
                variant="outlined"
                name={"password"}
                type={"password"}
                required
            />
            <Button
                variant={"contained"}
                type={"submit"}
                disabled={
                email.length !== 0 && password.length !== 0 ? false : true
                }
            >
                Log In
            </Button>
            </form>
        </div>
        <div className={"cont-link"}>
            <Link
            to={"/signup"}
            style={{ textDecoration: "none", color: "inherit" }}
            >
            회원가입
            </Link>
        </div>
        </div>
    </article>
    </UserForm>
);
};

export {}
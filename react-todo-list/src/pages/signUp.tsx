
import React, {ChangeEvent, useState} from "react";
import {Link,useNavigate} from "react-router-dom";
import moment from "moment";

// FIREBASE
import {firebaseAuth, fireStoreJob} from "../initFirebase";
import {createUserWithEmailAndPassword} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

// INTERFACE
import {UserInputInterface} from "../interfaces/user.interface";

// CSS
import {UserForm} from "../styles/userForm.styled";
import {Button, TextField} from "@mui/material";

export const SignUp = () => {
    //const firestore_path = "users";
    const navigate = useNavigate();
    const [inputs, setInputs] = useState<UserInputInterface>({
        email: "",
        displayName: "",
        password: ""
    });

    const {email, displayName, password} = inputs;

    const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const {name, value} = e.currentTarget;
        setInputs({...inputs, [name]: value});
    }

    const onSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        await createUserWithEmailAndPassword(firebaseAuth, email, password)
            .then(async (userCredential) => {
                const user = userCredential.user;
                console.log(user)
                await setDoc(doc(fireStoreJob, "users", user.uid), {
                    uid: user.uid,
                    ...inputs,
                    date_created: moment().utc().format()
                })
                navigate("/");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.warn(`${errorCode} - ${errorMessage}`)
            })
    }

    return <UserForm>
        <div className={'doc-title'}>
            <span>회원가입</span>
        </div>
        <article className={'user-form-article'}>
            <div className={'user-form-wrap'}>
                <div className={'user-form'}>
                    <form onSubmit={onSubmit}>
                        <TextField label="이메일" variant="outlined"
                                onChange={onChange} value={email} name={'email'} type={'email'}
                                required/>
                        <TextField label="이름" variant="outlined"
                                onChange={onChange} value={displayName} name={'displayName'} type={'text'}
                                required/>
                        <TextField label="비밀번호" variant="outlined"
                                onChange={onChange} value={password} name={'password'} type={'password'}
                                required/>
                        <Button variant={'contained'} type={"submit"}
                                disabled={email.length !== 0 && displayName?.length !== 0 && password.length !== 0 ? false : true}>
                            회원가입
                        </Button>
                    </form>
                </div>
                        <div className={"cont-link"}>
            <Link
            to={"/"}
            style={{ textDecoration: "none", color: "inherit" }}
            >
            로그인
            </Link>
        </div>
            </div>
        </article>
    </UserForm>
}

export {}
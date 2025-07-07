
import React, {ChangeEvent, useState} from "react";
import {useNavigate} from "react-router-dom";
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
            <span>Sign Up</span>
        </div>
        <article className={'user-form-article'}>
            <div className={'user-form-wrap'}>
                <div className={'user-form'}>
                    <form onSubmit={onSubmit}>
                        <TextField label="email" variant="outlined"
                                onChange={onChange} value={email} name={'email'} type={'email'}
                                required/>
                        <TextField label="displayName" variant="outlined"
                                onChange={onChange} value={displayName} name={'displayName'} type={'text'}
                                required/>
                        <TextField label="password" variant="outlined"
                                onChange={onChange} value={password} name={'password'} type={'password'}
                                required/>
                        <Button variant={'contained'} type={"submit"}
                                disabled={email.length !== 0 && displayName?.length !== 0 && password.length !== 0 ? false : true}>
                            Sign Up
                        </Button>
                    </form>
                </div>
            </div>
        </article>
    </UserForm>
}

export {}
import React, { ChangeEvent, useState } from "react";
import moment from "moment";

// FIREBASE
import { fireStoreJob } from "../initFirebase";
import { collection, addDoc } from "firebase/firestore";

// INTERFACE
import { TodoInputInterface } from "../interfaces/todo.interface";
import { UserInterface } from "../interfaces/user.interface";
import { Button, Input } from "@mui/material";

// CSS
import { TodoFormWrap } from "../styles/todoForm.styled";

type TodoFormType = {
  userInfo: UserInterface;
};

export const TodoForm = ({ userInfo }: TodoFormType) => {
  const firestore_path = "tasks";
  const [inputs, setInputs] = useState<TodoInputInterface>({
    task: "",
    date: "",
  });

  const { task, date } = inputs;

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setInputs({ ...inputs, [name]: value });
  };

  const onClick = async (e: any) => {
    if (task === "") {
      alert("Please write task");
      return false;
    }

    await addDoc(collection(fireStoreJob, firestore_path), {
      uid: userInfo.uid,
      task: task,
      status: "READY",
      date: date,
      date_created: moment().utc().format(),
    });
    setInputs({ task: "", date: "" });
  };
  return (
    <TodoFormWrap>
      <div className={'task-title'}>
        Enter Your Task
      </div>
      <div className={'task-input-box'}>
        <div>
          <Input
              onChange={onChange}
              value={task}
              name={"task"}
              placeholder={"What is your task"}
              type={"text"}
          />
        </div>
        <div>
          <Input
              onChange={onChange}
              value={date}
              name={"date"}
              placeholder={"Dead Line"}
              type={"date"}
          />
        </div>
        <div>
          <Button onClick={onClick} type={"button"} variant={"contained"}>
            Submit
          </Button>
        </div>
      </div>

    </TodoFormWrap>
  );
};

export {}
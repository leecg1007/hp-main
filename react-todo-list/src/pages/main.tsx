import React from "react";

// COMPONENT
import { TodoList } from "../Components/todoList";
import { TodoForm } from "../Components/todoForm";
import { logout } from "../utils/firebaseAuth";

// CSS
import { MainWrapper } from "../styles/main.styled";
import { Button } from "@mui/material"; // MUI 버튼 사용

export const Main = ({ userInfo }: any) => {
  const handleLogout = async () => {
    await logout(); // 로그아웃 실행
    window.location.reload(); // 새로고침으로 로그인 화면으로 이동 (간단한 처리)
  };

  return (
    <MainWrapper>
      <div className={"main-box"}>
        <div className={"doc-title"}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <h1>TODO LIST</h1>
            <Button onClick={handleLogout} variant="outlined" size="small">
              Logout
            </Button>
          </div>
          <div>
            <span>Hello <strong>{userInfo.displayName}</strong></span>
          </div>
        </div>
        <div className={"todo-box"}>
          <TodoList userInfo={userInfo} />
          <TodoForm userInfo={userInfo} />
        </div>
      </div>
    </MainWrapper>
  );
};



export {}

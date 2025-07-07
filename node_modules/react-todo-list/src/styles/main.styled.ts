import { styled } from "@mui/material";

export const MainWrapper = styled("div")`
  .main-box {
    width: 80%;
    margin-left: 50%;
    transform: translateX(-50%);
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .doc-title {
    display: flex;
    background-color: #eee;
    flex-direction: column;
    margin: 50px 0px;
    padding: 10px;
    border-radius: 8px;
  }

  .doc-title > div {
    padding: 10px;
  }

  .todo-box {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  /* 할 일 리스트 스타일 */
  .todo-list {
    margin-top: 30px;
  }

  .task-item {
    background-color: #fff;
    padding: 15px;
    margin: 10px 0;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .task-item h3 {
    margin: 0;
    font-size: 1.2em;
  }

  .task-item p {
    margin: 5px 0;
    font-size: 0.9em;
  }

  .task-input-box {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .task-title {
    font-size: 1.5em;
    margin-bottom: 10px;
  }
    .doc-title button {
  margin-left: 10px;
  padding: 5px 10px;
  background: #d32f2f;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
`;

export {}
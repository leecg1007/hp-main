import { styled } from "@mui/material";

export const UserForm = styled("div")`
  .doc-title {
    padding-top: 50px;
    display: block;
    width: 580px;
    height: 27px;
    margin: 0 auto;
    background-size: 100px 80px;
    font-size: 19px;
    line-height: 27px;
    text-align: center;
    vertical-align: top;
  }

  .user-form-article {
    box-sizing: border-box;
    width: 580px;
    height: 100%;
    margin: 40px auto 42px;
    padding: 0 69px;
    border: 1px solid rgba(0, 0, 0, .12);
    font-size: 12px;
  }

  .user-form-article > .user-form-wrap {
    word-wrap: break-word;
    position: relative;
    padding: 10px 0px
  }

  .user-form {
    padding: 50px;
  }

  .user-form > form {
    display: flex;
    flex-direction: column;
  }

  .user-form > form div {
    margin : 8px 0px;
  }

  .user-form > form button {
    margin-top: 10px;
    padding: 15px;
    margin-bottom: 20px;
  }
`;
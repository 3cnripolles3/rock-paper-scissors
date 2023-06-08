import { css } from 'lit';

export const MyHomeStyles = css`
section {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
    margin-top: 20%;
  }

  img {
    width: 29px;
    background-color: #c987d5;
    padding: 15px 20px;
    border-radius: 50%;
  }
  p {
    font-size: 25px;
  }
  .inputContainer {
    position: relative;
    width: 70%;
  }

  #name {
    height: 55px;
    width: 90%;
    border: 0.2px solid #848284;
    border-radius: 5px;
    font-size: 16px;
    padding: 0 20px;
    background: none;
    color: white;
    outline: none;
  }
  ::placeholder {
    color: transparent;
  }

  label {
    position: absolute;
    left: 15px;
    top: 19px;
    padding: 0 4px;
    color: #848284;
    font-size: 18px;
    transition: 0.3s;
  }
  #name:focus {
    border: 2px solid #86c2fa;
  }
  #name:focus + label {
    top: -7px;
    left: 17px;
    font-size: 15px;
    color: #86c2fa;
    background-color: black;
  }

  #name:not(:placeholder-shown) + label {
    top: -7px;
    left: 17px;
    font-size: 15px;
    color: #86c2fa;
    background-color: black;
  }
  .btn {
    width: 66%;
    margin-top: 40px;
    margin-right: 50px;
    background-color: #86c2fa;
    color: #527595;
    border: 2px solid #b7d2e9;
    border-radius: 5px;
    padding: 12px;
    cursor: pointer;
    font-weight: bold;
  }
  @media only screen and (max-width: 768px) {
    .btn {
      margin-right: 0px;
      margin-left: 10px;
      width: 73%;
    }
  }
`;

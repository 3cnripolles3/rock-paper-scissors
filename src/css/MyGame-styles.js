import { css } from 'lit';

export const MyGameStyles = css`
  header {
    background-color: #2e2e31;
    height: 80px;
    display: flex;
    justify-content: space-between;
  }
  p {
    padding-left: 19px;
    font-size: 25px;
  }

  .go-out {
    width: 30px;
    padding-top: 25px;
    padding-right: 19px;
    cursor: pointer;
  }
  .game {
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 100vw;
    margin-top: 20%;
  }

  .buttons {
    display: flex;
    justify-content: center;
    width: 100vw;
  }

  button {
    background-color: #86c2fa;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 80px;
    border-style: none;
    border-left: 2px solid #60aff7;
    cursor: pointer;
  }

  .left-button {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }
  .right-button {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  .hand {
    width: 50px;
  }
  .clicked {
    background-color: #2e2e31;
    border-left: 2px solid black;
    cursor: default;
  }
  #result {
    margin-top: -10px;
  }
`;

import { styled } from "styled-components";

export const NewTaskContainer = styled.div`
  form {
    width: 736px;
    margin: auto;
    margin-top: -25px;
    display: flex;

    input {
      width: 638px;
      height: 54px;
      border-radius: 8px;
      border: 0;
      background: ${(props) => props.theme["gray-500"]};
      margin-right: 8px;
      color: ${(props) => props.theme["gray-100"]};
      padding: 16px;
      &::placeholder {
        color: ${(props) => props.theme["gray-300"]};
      }
    }

    button {
      width: 90px;
      height: 52px;
      border-radius: 8px;
      background: ${(props) => props.theme["blue-dark"]};
      color: ${(props) => props.theme["gray-100"]};
      font-weight: bold;
      font-size: 14px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
      }
      
      &:not(:disabled):hover {
        background: ${(props) => props.theme["blue"]};
        cursor: pointer;
      }
      gap: 8px;
    }
  }
`;

import { styled } from "styled-components";
import {PencilLine, Trash } from "phosphor-react";

export const TasksContainer = styled.div`
  width: 736px;
  height: 377px;
  margin: auto;

`;
export const StyledPencilLine = styled(PencilLine)`
   color: ${(props) => props.theme["gray-300"]};
  transition: color 0.1s;

  &:hover {
    color: ${(props) => props.theme["purple"]};
  }
`;

export const StyledTrash = styled(Trash)`
   color: ${(props) => props.theme["gray-300"]};
  transition: color 0.1s;

  &:hover {
    color: ${(props) => props.theme["danger"]};
  }
`;

export const TasksInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 64px 0 24px;
  height: 19px;
  font-size: 14px;
  margin-left: 8px;
`;

export const BaseTasks = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  span {
    color: ${(props) => props.theme["gray-200"]};
    border-radius: 100px;
    background-color: ${(props) => props.theme["gray-400"]};
    padding: 2px 8px;
    margin: auto;
    font-size: 12px;
  }
`;

export const CreatedTasks = styled(BaseTasks)`
  p {
    color: ${(props) => props.theme["blue"]};
    font-weight: bold;
  }
`;

export const CompletedTasks = styled(BaseTasks)`
  p {
    color: ${(props) => props.theme["purple"]};
    font-weight: bold;
  }
`;

export const TaskContent = styled.div`
  display: flex;
  height: 80px;
  justify-content: space-between;
  align-items: stretch;
  padding: 12px;
  background-color: ${(props) => props.theme["gray-500"]};
  border-radius: 8px;
  margin-bottom: 12px;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme["gray-500"]};
    border: 0;
    margin-top: 5px;
    border-radius: 4px;
    cursor: pointer;
    height: 24px;
    width: 24px;

    &:hover {
      background-color: ${(props) => props.theme["gray-400"]};
    }

    &:hover .trashIcon {
      color: ${(props) => props.theme["danger"]};
    }
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2px;

`;

export const Task = styled.div<{ checked: boolean }>`
  display: flex;
  gap: 12px;

  &:hover {
    cursor: pointer;
  }
  p {
    width: 632px;
    font-size: 14px;
    line-height: 22px;
    ${(props) =>
      props.checked &&
      `
      text-decoration: line-through;
      color: #808080;
    `}
  }
`;

export const ModalChildren = styled.div`
  input {
    background: ${(props) => props.theme["gray-400"]};
    color: ${(props) => props.theme["gray-100"]};
    border: 0;
    border-radius: 8px;
    padding: 12px;
    width: 438px;

  }
  h1 {
    font-size: 20px;
    margin-bottom: 20px;
    color: ${(props) => props.theme["purple"]};

  }
  div {
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-top: 20px;
  }

  button {
    width: 80px;
    height: 40px;
    border-radius: 8px;
    background: ${(props) => props.theme["blue-dark"]};
    color: ${(props) => props.theme["gray-100"]};
    font-size: 14px;
      
      &:hover {
        background: ${(props) => props.theme["blue"]};
        cursor: pointer;
      }

  }
`;

import { Trash } from "phosphor-react";
import { styled } from "styled-components";

export const TasksContainer = styled.div`
  width: 736px;
  height: 451px;
  margin: auto;
  margin-bottom: 20px;
`;

export const TasksInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 64px 0 24px;
  height: 19px;
  font-size: 14px;
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
  height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 16px;
  background-color: ${(props) => props.theme["gray-500"]};
  border-radius: 8px;
  margin-bottom: 12px;

  button {
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

export const TrashIcon = styled(Trash)`
  color: #808080;
  margin: 2px 3px;
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

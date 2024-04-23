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
  background-color: ${(props) => props.theme["gray-400"]};
  border-radius: 8px;
  margin-bottom: 12px;

  button {
    background-color: ${(props) => props.theme["gray-400"]};
    border: 0;
    margin-top: 5px;
    display: flex;
    align-items: flex-center;
  }
`;

export const Task = styled.div<{ completed: boolean }>`
  display: flex;
  gap: 12px;
  p {
    width: 632px;
    font-size: 14px;
    line-height: 22px;
    ${(props) =>
    props.completed &&
    `
      text-decoration: line-through;
      color: #808080;
    `}
  }
`;

import React, { useState } from "react";
import { ActionType } from "../hooks/useActions";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

type ButtonType = {
  $bg: string;
};

export const Button = styled.button<ButtonType>`
  width: 100%;
  display: flex;
  gap: 8px;
  justify-content: space-between;
  align-items: center;
  min-height: 72px;
  background: ${({ $bg }) => $bg};
  color: #fff;
  box-shadow: inset 0px 0px 10px #00000040;
  border-radius: 4px;
  margin: 0 4px;
  padding: 8px 16px;
  cursor: pointer;
  border: solid 2px #000000;
  transition: opacity 0.2s ease;

  &:disabled {
    opacity: 0.5;
  }
`;

const Name = styled.div`
  font-size: 1.5rem;
  text-align: left;
`;

const Value = styled.div`
  font-size: 2rem;
`;

const EditButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-right: 4px;
`;

const ButtonDelete = styled.button`
  font-size: 2rem;
  line-height: 30px;
  background: #369;
  color: #fff;
  width: 34px;
  height: 34px;
  border: solid 2px #000000;
  border-radius: 4px;
`;

type Props = {
  action: ActionType;
  changeBalance: (value: number) => void;
  deleteAction: (name: string) => void;
  balance: number;
  type: 1 | -1;
  edit: boolean;
};

function Action({
  action,
  changeBalance,
  deleteAction,
  balance,
  type,
  edit,
}: Props) {
  const [disabled, setDisabled] = useState(false);

  const clickHandler = () => {
    changeBalance(action.value);
    setDisabled(true);
    setTimeout(() => {
      setDisabled(false);
    }, 400);
  };

  const deleteHandler = () => {
    console.log(action.name);
    deleteAction(action.name);
  };

  return (
    <Wrapper>
      <Button
        $bg={type === 1 ? "#393" : "#933"}
        onClick={clickHandler}
        disabled={disabled || balance + action.value < 0}
      >
        <Name>{action.name}</Name>
        <Value>{action.value} </Value>
      </Button>
      {edit ? (
        <EditButtons>
          <ButtonDelete onClick={deleteHandler}>X</ButtonDelete>
          <ButtonDelete onClick={deleteHandler}>E</ButtonDelete>
        </EditButtons>
      ) : null}
    </Wrapper>
  );
}

export default Action;

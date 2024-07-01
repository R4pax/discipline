import React from "react";
import { ActionType } from "../hooks/useActions";
import styled from "styled-components";
import Action from "./Action";
import AddAction from "./AddAction";

const Wrapper = styled.div`
  display: flex;
  padding-top: 112px;
  gap: 4px;
  flex-direction: column;
`;

type Props = {
  actions: ActionType[];
  changeBalance: (value: number) => void;
  type: 1 | -1;
  balance: number;
  addAction: (newAction: ActionType) => void;
  deleteAction: (name: string) => void;
  edit: boolean;
};

function Actions({
  actions,
  changeBalance,
  type,
  balance,
  addAction,
  deleteAction,
  edit,
}: Props) {
  const mappedActions = actions
    .filter((action) => action.value * type > 0)
    .sort((a, b) => type * (a.value - b.value));

  return (
    <Wrapper>
      {mappedActions.map((action, index) => (
        <Action
          action={action}
          changeBalance={changeBalance}
          balance={balance}
          type={type}
          key={String(type) + index}
          edit={edit}
          deleteAction={deleteAction}
        />
      ))}
      <AddAction type={type} addAction={addAction} />
    </Wrapper>
  );
}

export default Actions;

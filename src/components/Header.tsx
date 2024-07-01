import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  max-width: 480px;
  padding: 4px;
  display: flex;
  flex-wrap: wrap;
  background: #fff;
  gap: 4px;
`;

const Balance = styled.div`
  position: relative;
  font-size: 2rem;
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #369;
  color: #fff;
  box-shadow: inset 0px 0px 10px #00000080;
  border-radius: 4px;
  border: solid 2px #000000;
`;

type ButtonEditProps = {
  $edit: boolean;
};

const ButtonEdit = styled.button<ButtonEditProps>`
  position: absolute;
  top: 0;
  right: 0;
  margin: -2px;
  height: 48px;
  width: 48px;
  background: ${({ $edit }) => ($edit ? "#00ff0040" : "#ffffff40")};
  color: #fff;
  border: solid 2px #000000;
  font-size: 2rem;
  border-radius: 4px;
`;

type ActionSwitchProps = {
  $bg: string;
};

const ActionSwitch = styled.button<ActionSwitchProps>`
  font-size: 1.5rem;
  display: block;
  width: calc(50% - 2px);
  height: 48px;
  border: none;
  color: #fff;
  background: ${({ $bg }) => $bg};
  cursor: pointer;
  box-shadow: inset 0px 0px 10px #00000080;
  border-radius: 4px;
  border: solid 2px #000000;
`;

type Props = {
  balance: number;
  setType: Dispatch<SetStateAction<1 | -1>>;
  setEdit: Dispatch<React.SetStateAction<boolean>>;
  edit: boolean;
};

function Header({ balance, setType, edit, setEdit }: Props) {
  const editHandle = () => {
    setEdit((v) => !v);
  };

  return (
    <Wrapper>
      <Balance>
        {balance}
        <ButtonEdit onClick={editHandle} $edit={edit}>
          E
        </ButtonEdit>
      </Balance>
      <ActionSwitch $bg={"#090"} onClick={() => setType(1)}>
        Копим
      </ActionSwitch>
      <ActionSwitch $bg={"#900"} onClick={() => setType(-1)}>
        Тратим
      </ActionSwitch>
    </Wrapper>
  );
}

export default Header;

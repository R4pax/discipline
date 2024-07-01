import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "./Action";
import { ActionType } from "../hooks/useActions";

const StyledButton = styled(Button)`
  justify-content: center;
  font-size: 4rem;
  line-height: 0.1;
  opacity: 0.7;
  width: calc(100% - 8px);
`;

const ModalWrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #00000040;
`;

const Modal = styled.div`
  position: relative;
  width: 100%;
  max-width: 468px;
  min-height: 200px;
  background: #fff;
  outline: solid 2px #000;
  border-radius: 4px;
  overflow: hidden;
  background: #fff;
  padding: 0 0.5rem;
`;

const CloseButton = styled.button`
  position: absolute;
  font-family: monospace;
  font-weight: bold;
  font-size: 1.5rem;
  width: 2rem;
  height: 2rem;
  top: 0px;
  right: 0px;
  background: transparent;
  border: none;
`;

const Title = styled.div`
  font-size: 1.5rem;
  line-height: 2rem;
  margin-bottom: 0.5rem;
`;

const SubTitle = styled.div`
  font-size: 1rem;
  line-height: 1.5rem;
`;

const Input = styled.input`
  width: 100%;
  font-size: 1.25rem;
  line-height: 1.5rem;
  padding: 0.25rem;
  margin-bottom: 0.5rem;
  border: solid 2px #369;
`;

const ButtonOK = styled.button`
  width: 84px;
  height: 42px;
  font-size: 1.25rem;
  border: solid 2px #000;
  background: #369;
  color: #fff;
  border-radius: 4px;
  margin: 0.5rem auto;
  display: block;
`;

type Props = {
  type: 1 | -1;
  addAction: (newAction: ActionType) => void;
};

function AddAction({ type, addAction }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [value, setValue] = useState(0);

  const changeName = (e: any) => {
    setName(e.target.value);
  };

  const changeValue = (e: any) => {
    const newValue = e.target.value;
    // eslint-disable-next-line eqeqeq
    if (newValue != Number(newValue)) return;
    setValue(+e.target.value);
  };

  const submit = () => {
    addAction({ name, value: type * Number(value) });
    setIsOpen(false);
  };

  const closeHandle = () => {
    setIsOpen(false);
  };

  const openHandle = () => {
    setIsOpen(true);
  };

  return (
    <>
      <StyledButton $bg={type === 1 ? "#393" : "#933"} onClick={openHandle}>
        +
      </StyledButton>
      {isOpen ? (
        <ModalWrapper>
          <Modal>
            <CloseButton onClick={closeHandle}>x</CloseButton>
            <Title>Новое действие</Title>
            <SubTitle>Название</SubTitle>
            <Input value={name} onChange={changeName} />
            <SubTitle>
              Сколько баллов {type === 1 ? "добавляем" : "списываем"}
            </SubTitle>
            <Input value={value} onChange={changeValue} />
            <ButtonOK onClick={submit} disabled={!name || !value}>
              OK
            </ButtonOK>
          </Modal>
        </ModalWrapper>
      ) : null}
    </>
  );
}

export default AddAction;

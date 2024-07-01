import React, { useState } from "react";
import Container from "./components/Container";
import Header from "./components/Header";
import "./App.css";
import useBalance from "./hooks/useBalance";
import useActions from "./hooks/useActions";
import Actions from "./components/Actions";

function App() {
  const [type, setType] = useState<1 | -1>(1);
  const [edit, setEdit] = useState(false);
  const { balance, changeBalance } = useBalance();
  const { actions, addAction, deleteAction } = useActions();

  return (
    <Container>
      <Header
        balance={balance}
        setType={setType}
        edit={edit}
        setEdit={setEdit}
      ></Header>
      <Actions
        actions={actions}
        changeBalance={changeBalance}
        type={type}
        balance={balance}
        addAction={addAction}
        deleteAction={deleteAction}
        edit={edit}
      />
    </Container>
  );
}

export default App;

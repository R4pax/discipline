import { useEffect, useState } from "react";
import { getStore, setStore } from "../utils/localstore";

export type ActionType = {
  name: string;
  value: number;
  oncePerDay?: boolean;
};

const DefaultActions: ActionType[] = [
  {
    name: "Пройти 5000 шагов",
    value: 50,
  },
  {
    name: "Утром сделать зарядку",
    value: 100,
    oncePerDay: true,
  },
  {
    name: "Поработать 1 час",
    value: 20,
  },
  {
    name: "20 приседаний",
    value: 10,
  },
  {
    name: "20 отжиманий",
    value: 10,
  },
  {
    name: "Прочитать 100 страниц",
    value: 50,
  },
  {
    name: "Сходить в зал",
    value: 200,
  },
  {
    name: "Кальян на чердаке",
    value: -300,
  },
  {
    name: "Выпить 25мг алко",
    value: -300,
  },
  {
    name: "Потупить в комп 1 час",
    value: -100,
  },
];

function useActions() {
  const storedActions = getStore("actions");
  const [actions, setActions] = useState<ActionType[]>(storedActions || []);

  useEffect(() => {
    if (!storedActions) {
      setActions(DefaultActions);
      setStore("actions", DefaultActions);
    }
  }, [storedActions]);

  const addAction = (newAction: ActionType) => {
    const newActions = [...actions, newAction];
    setActions(newActions);
    setStore("actions", newActions);
  };

  const deleteAction = (name: string) => {
    const newActions = actions.filter((value) => value.name !== name);
    setActions(newActions);
    setStore("actions", newActions);
  };

  return { actions, addAction, deleteAction };
}

export default useActions;

import { FC, useCallback, useState, memo, useMemo } from "react";
import "./Navigation.scss";
import ItemNavigation from "./ItemNavigation/ItemNavigation";
import { dataThemes } from "../../../data/courseTopics";
import { TDispatch } from "../../../types/types";
interface INavigation {
  dispatch: TDispatch;
}
const Navigation: FC<INavigation> = memo(({ dispatch }) => {
  const [isActive, setIsActive] = useState("Все темы");

  const setIsActiveFunc = useCallback(
    (name: string): void => {
      setIsActive((prev) => (prev = name));
    },
    [isActive],
  );

  const objUseState = {
    isActive,
    setIsActiveFunc,
  };

  const dataThemesMap = useMemo(
    () =>
      dataThemes.map((elem, index) => (
        <ItemNavigation
          dispatch={dispatch}
          key={index}
          name={elem}
          {...objUseState}
        />
      )),
    [isActive],
  );

  return <ul className="ul">{dataThemesMap}</ul>;
});

export default Navigation;

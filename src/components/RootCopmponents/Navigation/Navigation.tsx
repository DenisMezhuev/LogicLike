import { FC, useCallback, useState, memo, useMemo } from "react";
import "./Navigation.scss";
import ItemNavigation from "./ItemNavigation/ItemNavigation";
import { dataThemes } from "../../../data/courseTopics";

const Navigation: FC = memo(() => {
  const [isActive, setIsActive] = useState("Все темы");

  const setIsActiveFunc = useCallback(
    (name: string): void => {
      setIsActive((prev) => (prev = name));
    },
    [isActive]
  );

  const objUseState = {
    isActive,
    setIsActiveFunc,
  };

  const dataThemesMap = useMemo(
    () =>
      dataThemes.map((elem, index) => (
        <ItemNavigation key={index} name={elem} {...objUseState} />
      )),
    [isActive]
  );

  return <ul className="ul">{dataThemesMap}</ul>;
});

export default Navigation;

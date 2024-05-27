import { FC, useContext, memo, useMemo, useCallback } from "react";

import { ContextDispanch } from "../../RootCopmponents";
import { EThemesName } from "../../../../types/types";
import {
  actionCreaterAllTopics,
  actionCreaterLogicAndThinking,
  actionCreaterRiddles,
  actionCreaterTravel,
  actionCreaterTrips,
} from "../../../../reducer/actionCreater";
interface Iname {
  name: string;
  isActive: string;
  setIsActiveFunc: (name: string) => void;
}

const ItemNavigation: FC<Iname> = memo(
  ({ name, isActive, setIsActiveFunc }) => {
    const dispatch = useContext(ContextDispanch);

    const handlerClick = useCallback(
      (name: string) => {
        if (dispatch === undefined) {
          return;
        }
        switch (name.trim()) {
          case EThemesName.ALL_TOPICS:
            return dispatch(actionCreaterAllTopics());
          case EThemesName.LOGIC_AND_THINKING:
            return dispatch(actionCreaterLogicAndThinking());
          case EThemesName.RIDDLES:
            return dispatch(actionCreaterRiddles());
          case EThemesName.TRIPS:
            return dispatch(actionCreaterTrips());
          case EThemesName.TRAVEL:
            return dispatch(actionCreaterTravel());
          default:
            return console.log("error");
        }
      },
      [name]
    );

    const rootFunc = useCallback(
      (name: string) => {
        setIsActiveFunc(name);
        handlerClick(name);
      },
      [name]
    );

    const classActive = useMemo(
      () => (isActive === name ? "active" : " "),
      [isActive]
    );

    return (
      <li className={classActive} onClick={() => rootFunc(name)}>
        {name}
      </li>
    );
  }
);

export default ItemNavigation;

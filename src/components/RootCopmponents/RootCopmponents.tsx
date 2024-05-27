import {
  Dispatch,
  createContext,
  memo,
  useCallback,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";

import Navigation from "./Navigation/Navigation";
import Courses from "./Сourses/Сourses";
import { EAction, IresponseData, data } from "../../types/types";
import { Action, stateReducer } from "../../reducer/stateReducer";
import styles from "./RootCopmponents.module.scss";
import { arrConst } from "../../constants/constants";
import { actionCreaterGetData } from "../../reducer/actionCreater";

export const ContextDispanch = createContext<Dispatch<Action> | undefined>(
  undefined
);

const RootCopmponents = memo(() => {
  const initialState: IresponseData = {
    items: arrConst,
    arrTheme: arrConst,
    theme: EAction.ALL_TOPICS,
  };

  const [backendData, dispatch] = useReducer(stateReducer, initialState);
  const [isLoading, setIsLoading] = useState(true);
  const refDepsBackendData = useRef<null | string>();
  const refBackendData = useRef();

  const getQuery = async () => {
    try {
      const result = await fetch("https://logiclike.com/docs/courses.json");
      const data: data[] = await result.json();
      dispatch(actionCreaterGetData(data));
      setIsLoading(!isLoading);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getQuery();
  }, []);

  if (isLoading) {
    return <></>;
  }
  
  const memoFuncBackendData = (obj: IresponseData, deps: string) => {
    if (Object.is(refDepsBackendData.current, deps)) {
      return refBackendData.current;
    } else {
      let result = JSON.parse(JSON.stringify(obj));
      refBackendData.current = result;
      refDepsBackendData.current = deps;
      return result;
    }
  };

  let memoBackendData = memoFuncBackendData(backendData, backendData.theme);

  return (
    <div className={styles.wrapper}>
      <ContextDispanch.Provider value={dispatch}>
        <Navigation />
      </ContextDispanch.Provider>
      <Courses {...memoBackendData} />
    </div>
  );
});

export default RootCopmponents;

import { FC, memo, useCallback, useMemo } from "react";
import { v4 as uuidv4 } from "uuid";
import { data, EAction } from "../../../types/types";
import ItemCourses from "./ItemCourses/ItemCourses";
import styles from "./Сourses.module.scss";

interface PropsCourses {
  items: data[];
  arrTheme: data[];
  theme: EAction;
}

const Сourses: FC<PropsCourses> = memo(({ items, theme, arrTheme }) => {
  const mapDate = useCallback(
    (elem: data[]) =>
      elem.map((item) => <ItemCourses key={uuidv4()} data={item} />),
    [theme]
  );

  const result = useMemo(
    () => (theme === EAction.ALL_TOPICS ? mapDate(items) : mapDate(arrTheme)),
    [theme]
  );

  return <div className={styles.wrapper}>{result}</div>;
});

export default Сourses;

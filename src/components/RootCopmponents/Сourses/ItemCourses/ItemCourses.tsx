import { FC, memo } from "react";
import { data } from "../../../../types/types";
import styles from "./ItemCourses.module.scss";

interface PropsItemCourses {
  data: data;
}

const ItemCourses: FC<PropsItemCourses> = memo(({ data }) => {
  return (
    <div className={styles.card}>
      <div className={styles.wrapper} style={{ background: data.bgColor }}>
        {" "}
        <img src={data.image} alt="img" />
      </div>
      <div className={styles.text}>
        <span>{data.name}</span>
      </div>
    </div>
  );
});

export default ItemCourses;

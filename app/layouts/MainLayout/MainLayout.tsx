import { FC, PropsWithChildren } from "react";
import styles from "./MainLayout.module.scss";

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;

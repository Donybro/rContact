import { FC, PropsWithChildren } from "react";
import styles from "./MainLayout.module.scss";
import Header from "../../components/Header/Header";

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default MainLayout;

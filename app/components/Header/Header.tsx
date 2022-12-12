import { FC } from "react";

import ProfileDropDown from "./ProfileDropDown/ProfileDropDown";
import styles from "./Header.module.scss";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const Header: FC = () => {
  const { email } = useTypedSelector((state) => state.user.user);
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.email}>{email}</h3>
      <ProfileDropDown />
    </div>
  );
};

export default Header;

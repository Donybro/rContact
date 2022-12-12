import { FC, PropsWithChildren, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useAction } from "../hooks/useAction";

const AppLayout: FC<PropsWithChildren> = ({ children }) => {
  const userId = Cookies.get("userId");
  const [isLoading, setIsLoading] = useState(false);

  const { me } = useAction();

  useEffect(() => {
    if (userId) {
      setIsLoading(true);
      me(userId);
      setIsLoading(false);
    }
  }, [userId]);

  return (
    <>
      {isLoading && <div>Страница загружается</div>}
      {!isLoading && children}
    </>
  );
};

export default AppLayout;

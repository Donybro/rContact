import { FC, PropsWithChildren } from "react";

const Tag: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={"px-[12px] py-[8px] bg-amber-600 text-white"}>
      {children}
    </div>
  );
};

export default Tag;

import { FC } from "react";
import MainLayout from "../app/layouts/MainLayout/MainLayout";
import CreateContact from "../app/components/Views/CreateContact/CreateContact";

const Create: FC = () => {
  return (
    <MainLayout>
      <CreateContact />
    </MainLayout>
  );
};

export default Create;

import { FC } from "react";
import MainLayout from "../app/layouts/MainLayout/MainLayout";
import CreateContact from "../app/components/Views/CreateContact/CreateContact";
import AuthProtectedLayout from "../app/layouts/AuthProtectedLayout";

const Create: FC = () => {
  return (
    <MainLayout>
      <AuthProtectedLayout>
        <CreateContact />
      </AuthProtectedLayout>
    </MainLayout>
  );
};

export default Create;

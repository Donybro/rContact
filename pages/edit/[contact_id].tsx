import { FC } from "react";
import MainLayout from "../../app/layouts/MainLayout/MainLayout";
import EditContact from "../../app/components/Views/EditContact/EditContact";
import AuthProtectedLayout from "../../app/layouts/AuthProtectedLayout";

const Index: FC = () => {
  return (
    <MainLayout>
      <AuthProtectedLayout>
        <EditContact />
      </AuthProtectedLayout>
    </MainLayout>
  );
};

export default Index;

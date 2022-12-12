import { FC } from "react";
import MainLayout from "../../app/layouts/MainLayout/MainLayout";
import EditContact from "../../app/components/Views/EditContact/EditContact";

const Index: FC = () => {
  return (
    <MainLayout>
      <EditContact />
    </MainLayout>
  );
};

export default Index;

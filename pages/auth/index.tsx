import { FC } from "react";
import AuthView from "../../app/components/Views/Auth/AuthView";
import MainLayout from "../../app/layouts/MainLayout/MainLayout";

const Index: FC = () => {
  return (
    <MainLayout>
      <AuthView />
    </MainLayout>
  );
};

export default Index;

import { FC } from "react";
import MainLayout from "../../app/layouts/MainLayout/MainLayout";
import RegisterView from "../../app/components/Views/Auth/RegisterView";

const Register: FC = () => {
  return (
    <MainLayout>
      <RegisterView />
    </MainLayout>
  );
};

export default Register;

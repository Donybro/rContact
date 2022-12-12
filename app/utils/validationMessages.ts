export const requiredValidatorMessage = ({ path }: any) => {
  return `Это поле обязательно для заполнения`;
};
export const emailValidatorMessage = (args: any) => {
  return "Пожалуйста введите правильный email";
};
export const minValidatorMessage = (args: any) => {
  return `Поле не должно быть меньше чем ${args.min}`;
};

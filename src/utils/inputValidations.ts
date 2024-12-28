export const validateEmail = (email: string) => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!regex.test(email)) throw Error("Formato de email invalido");
};

export const onlyStrings = (param: string, input: string) => {
  const regex = /^[a-zA-Z\s]+$/;

  if (!regex.test(param))
    throw Error(
      `En el campo ${input} solo esta permitido letras, no numeros o caracteres especiales`
    );
};

export const validateLenghtFromTo = (
  param: string,
  input: string,
  num1: number,
  num2: number
) => {
  if (param.length < num1 || param.length > num2)
    throw Error(`La longitud de ${input} debe ser entre ${num1} y ${num2}`);
};

export const securePassword = (
  param: string,
  input: string,
  minLength: number
) => {
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/;

  if (!regex.test(param))
    throw Error(
      `${input} debe tener al menos ${minLength} caracteres de longitud, minusculas y mayusculas, un numero y un caracter especial.`
    );
};

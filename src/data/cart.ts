export interface CartItem {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

export const initialCartItems: CartItem[] = [
  {
    id: 1,
    name: "Green Apple",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC4bDAHC4b7UhmkO7nHgs2vjXZ6egKyv4IZCUP0MkH7vjcgd1cC8QHldltnUEO6MlNr4dXHibNB4RQuCo6yRd7P1GtjRzHpiqXxVKzr_vsOBodY_qSyASHz4W-zg4urN9781S_pH7TTOTSe0DfITyYSOs-c0epBdkrJrH_kaI8c0zjROsQqnjofaE-yNE1MV59WEW-U_V5xVEiYH_3qXPlgQSaF81DN0HUciwkA93D_MS6XDSNodbtzRSssU-guwikE_6JG6xijPJMr",
    price: 14.0,
    quantity: 5,
  },
  {
    id: 2,
    name: "Fresh Indian Malta",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC3wItrBNG9WQNDg8l-g9OvRuz8-32QB2o01TcZaygzgvcm14S0SaPUx3UIqnzE1WRo3FCV-MoAFqzUHkQezakuvyXtCgf7aY6mJVMijokZFfS3Xiy3C2UgPJ8q-ELa07bvl4EFumkEx8DGWsLbYji5IsL5nUBHjLMBWAJfEQ9Cvyw9oZZicaLW1aVql0PoOPV6vpyxKcXkN2bwKht2vL2SyCGrC-_pS0dI_UR1ZCnNbE0326U1Xb_Qnxqdli-G5WTUjy9Ur4O75bM0",
    price: 20.0,
    quantity: 1,
  },
  {
    id: 3,
    name: "Chinese Cabbage",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCAQ1o5TrQMR4Omk8VNLXbL42lpLQ_yq-QDrr_lFl8R1-qlrehwDtcM3rPHj0KjDCQZpiBI8c2vSR8OEBeABZ2fwQ24JUPkuyiGrINxe__ahBl0lviaediuViPAVwo43CPs5U5pswFL60ySiTJSSvOSKhoDI-t7sTBSDQCi_Vm0BE99RJ7OI0tdIXIYTP1okuFwffrYncSg1VdtxVVKXdvESgX20eH9QQMKXNz51zXAekf2JLOoO5PyWb5o7wChnJJdxbcWUNtTxnx3",
    price: 12.0,
    quantity: 1,
  },
];

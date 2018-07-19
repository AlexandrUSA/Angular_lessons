export interface Car {
  id?: number;
  name: string;
  year: number;
  added: boolean;
  price: number;
}

export interface User {
  email: string;
  password: string;
  password_confirm: string;
  country: string;
}

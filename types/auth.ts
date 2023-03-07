export enum Role {
  Admin,
  Avulso,
  Pescador,
  Pesquisador,
}

export interface User {
  id: string;
  birthdate: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  cpf: string;
  role: Role;
}

export interface Login {
  token: string;
  user: User;
}

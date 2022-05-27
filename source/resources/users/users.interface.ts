export interface IUser {
  email: string;
  password: string;
  username: string;
}

export interface TokenData {
  token: string;
  expiresIn: number | string;
}

// what to store in the JWT token when generating token
// and when verifying it.
export type TokenDataStored = {
  _id: string;
};

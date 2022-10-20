export interface User {
  id:	number,
  username:	string,
  displayName: string,
  admin: boolean,
};

export interface NewUser {
  password:	string
  username:	string
  displayName: string
}
/// <reference types="react-scripts" />

interface LogInCredentials {
  password: string,
  username: string,
}

export interface LogUpCredentials extends LogInCreds {
  displayName: string,

}

export interface IError {
  parameter: string;
  message: string;
}

export interface IServerError {
  message: string;
  code: string;
  unknownProperty?: string;
  errors: IError[];
}

export interface RegisterUserResponseSuccess {
  id: string;
  username: string;
}

export interface RegisterUserResponseError {
  ok: false;
  error: string;
}

export type RegisterUserResponse =
  | RegisterUserResponseSuccess
  | RegisterUserResponseError;

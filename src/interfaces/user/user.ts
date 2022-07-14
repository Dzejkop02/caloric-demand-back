export interface RegisterUserResponseSuccess {
  ok: true;
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

export interface OneDayFromDatabase {
  id: string;
  day: number;
  kcal: number;
  weight: number;
}

export interface OneFilteredDay {
  id?: string;
  day: number;
  kcal?: number;
  weight?: number;
  hasInfo: boolean;
}

export interface getDataResponseSuccess {
  ok: true;
  data: OneFilteredDay[];
}

export interface getDataResponseError {
  ok: false;
  message: string;
}

export type getDataResponse = getDataResponseSuccess | getDataResponseError;

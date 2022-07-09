export interface OneDayFromDatabase {
  id: string;
  day: number;
  kcal: number;
  weight: number;
}

export interface OneFilteredDay {
  id: string | null;
  day: number;
  kcal: number | null;
  weight: number | null;
  hasInfo: boolean;
}

export type getDataResponse = OneFilteredDay[];

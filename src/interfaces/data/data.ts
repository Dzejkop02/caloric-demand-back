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

export type getDataResponse = OneFilteredDay[];

export interface OneDay {
  id: string;
  day: number;
  kcal: number;
  weight: number;
}

export type getDataResponse = OneDay[];

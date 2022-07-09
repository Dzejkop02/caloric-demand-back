import { getDataResponse, OneDayFromDatabase } from '../interfaces';

export const sortData = (data: OneDayFromDatabase[]): getDataResponse => {
  const arr: getDataResponse = Array.from({ length: 14 }, (_, i) => ({
    id: null,
    day: i + 1,
    kcal: null,
    weight: null,
    hasInfo: false,
  }));

  for (const { id, day, kcal, weight } of data) {
    if (day >= 1 && day <= 14) {
      arr[day].id = id;
      arr[day].kcal = kcal;
      arr[day].weight = weight;
      arr[day].hasInfo = true;
    }
  }

  return arr;
};

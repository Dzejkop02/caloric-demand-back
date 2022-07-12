import {
  getDataResponseSuccess,
  OneDayFromDatabase,
  OneFilteredDay,
} from '../interfaces';

export const sortData = (
  data: OneDayFromDatabase[],
): getDataResponseSuccess => {
  const arr: OneFilteredDay[] = Array.from({ length: 15 }, (_, i) => ({
    day: i++,
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

  arr.shift();

  return {
    ok: true,
    data: arr,
  };
};

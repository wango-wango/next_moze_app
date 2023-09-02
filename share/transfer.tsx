// 時間戳轉成日期
export const timeStempToDate = (timeStemp: string) => {
  return new Date(+timeStemp)
    .toLocaleDateString()
    .split("/")
    .map((v) => v.padStart(2, "0"))
    .join("-");
};

// 日期轉成時間戳
export const DateToTimeStemp = (date: Date) => {
  return new Date(date).getTime().toString();
};

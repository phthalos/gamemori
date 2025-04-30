const newDate = new Date();

const dayKR = ["일", "월", "화", "수", "목", "금", "토"];

const year = newDate.getFullYear();
const month = newDate.getMonth() + 1;
const date = newDate.getDate();
const getDay = newDate.getDay();
const day = dayKR[getDay];
const hours = newDate.getHours();
const minutes = newDate.getMinutes();

export { year, month, date, day, hours, minutes };

const newDate = new Date();

const dayKR = ["일", "월", "화", "수", "목", "금", "토"];

const year = newDate.getFullYear();
const month = newDate.getMonth() + 1;
const date = newDate.getDate();
const getDay = newDate.getDay();
const day = dayKR[getDay];
const hours = newDate.getHours();
const minutes = newDate.getMinutes();

function convertISO(isoString: string) {
    const date = new Date(isoString);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    return `${year}. ${month}. ${day}. ${hours}:${minutes}:${seconds}`;
}

export { year, month, date, day, hours, minutes, convertISO };

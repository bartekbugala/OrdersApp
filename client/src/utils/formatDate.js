export default function formatDate(dateToFormat, short = false) {
  let date = new Date(dateToFormat);
  let yearPart = short === true ? '' : '.' + date.getFullYear();
  let formatted_date =
    (date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()) +
    '.' +
    (date.getMonth() + 1 < 10
      ? `0${date.getMonth() + 1}`
      : date.getMonth() + 1) +
    yearPart;

  return isNaN(date) ? 0 : formatted_date;
}

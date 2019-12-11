export default function formatDate(dateToFormat, short = false) {
  let date = new Date(dateToFormat);
  let yearPart = short ? '' : date.getFullYear() + '-';
  let formatted_date =
    yearPart +
    (date.getMonth() + 1 < 10
      ? '0' + date.getMonth() + 1
      : date.getMonth() + 1) +
    '-' +
    (date.getDate() < 10 ? '0' + date.getDate() : date.getDate());

  return formatted_date;
}

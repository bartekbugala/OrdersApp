export default function formatDate(dateToFormat) {
  let date = new Date(dateToFormat);
  let formatted_date =
    date.getFullYear() +
    '-' +
    (date.getMonth() + 1 < 10
      ? '0' + date.getMonth() + 1
      : date.getMonth() + 1) +
    '-' +
    (date.getDate() < 10 ? '0' + date.getDate() : date.getDate());

  return formatted_date;
}

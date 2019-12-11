export default function countDaysLeft(startDate, term) {
  let start = new Date(startDate);
  let today = new Date();
  let daysFromStart = Math.floor((today - start) / 86400000);
  let calculatedDays = term - daysFromStart;
  return calculatedDays;
}

export default function sortByColumn(array, key, valueType, direction) {
  switch (valueType) {
    case 'number':
      return array.sort((a, b) =>
        direction === 'asc'
          ? parseFloat(a[key]) - parseFloat(b[key])
          : parseFloat(b[key]) - parseFloat(a[key])
      );
    case 'string':
      return array.sort((a, b) =>
        direction === 'asc'
          ? a[key].localeCompare(b[key])
          : b[key].localeCompare(a[key])
      );
    case 'date':
      return array.sort((a, b) =>
        direction === 'asc'
          ? new Date(a[key]) - new Date(b[key])
          : new Date(b[key]) - new Date(a[key])
      );
    default:
      return array.sort((a, b) =>
        direction === 'asc' ? a[key] - b[key] : b[key] - a[key]
      );
  }
}

/* export function sortByNumber(array, key, direction) {
  return array.sort((a, b) =>
    direction === 'asc'
      ? parseFloat(a[key]) - parseFloat(b[key])
      : parseFloat(b[key]) - parseFloat(a[key])
  );
}

export function sortByString(array, key, direction) {
  return array.sort((a, b) =>
    direction === 'asc' ? a[key] - b[key] : b[key] - a[key]
  );
}

export function sortByDate(array, key, direction) {
  return array.sort((a, b) =>
    // Turn strings into dates, and then subtract them
    // to get a value that is either negative, positive, or zero.
    direction === 'asc'
      ? new Date(a[key].date) - new Date(b[key].date)
      : new Date(b[key].date) - new Date(a[key].date)
  );
} */

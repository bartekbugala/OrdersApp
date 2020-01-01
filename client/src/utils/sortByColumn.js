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
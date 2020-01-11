import countDaysLeft from './countDaysLeft';

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
    case 'productionTerm':
      return array.sort((a, b) =>
        direction === 'asc'
          ? countDaysLeft(a.downpayment, a[key]) -
            countDaysLeft(b.downpayment, b[key])
          : countDaysLeft(b.downpayment, b[key]) -
            countDaysLeft(a.downpayment, a[key])
      );
    case 'date':
      return array.sort((a, b) =>
        direction === 'asc'
          ? new Date(a[key]) - new Date(b[key])
          : new Date(b[key]) - new Date(a[key])
      );

    case 'boolean':
      return array.sort((a, b) =>
        direction === 'asc' ? b[key] - a[key] : a[key] - b[key]
      );
    default:
      return array.sort((a, b) =>
        direction === 'asc' ? a[key] - b[key] : b[key] - a[key]
      );
  }
}

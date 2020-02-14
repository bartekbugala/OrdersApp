export function returnFloatChar(value) {
  // change non floating point characters to ''
  // change comma to dot
  return value.replace(/[^0-9.,]/g, '').replace(/,/, '.');
}
export function returnIntChar(value) {
  // change non integer characters to ''
  return value.replace(/[^0-9]/g, '').replace(/,/, '');
}

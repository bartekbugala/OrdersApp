export default function currentFromSquareMeters(panelType, squareMeters = 0) {
  let panelWidth = 0;
  let currentFromSquareMeters = 0;
  if (panelType === 'D') {
    panelWidth = 1;
  } else if (panelType === 'S') {
    panelWidth = 1.175;
  }
  currentFromSquareMeters =
    panelWidth !== 0 ? Math.ceil(squareMeters / panelWidth) : '';
  return currentFromSquareMeters !== 0 ? currentFromSquareMeters : '';
}

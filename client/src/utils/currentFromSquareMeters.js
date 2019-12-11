export default function currentFromSquareMeters(panelType, squareMeters) {
    let panelWidth = 0;
    if (panelType === 'D') {
        panelWidth = 1;
    } else if (panelType === 'S') {
        panelWidth = 1.175;
    }
    return (panelWidth) !== 0
        ? Math.ceil(squareMeters / panelWidth)
        : ''
}

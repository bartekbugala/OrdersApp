export function countM2(productionsArray) {
  let m2 = 0;
  productionsArray.forEach(el => (m2 += el.m2));
  return Math.round(m2 * 100) / 100;
}

export function filterByType(productionsArray, propName, type) {
  function isType(el, index, array) {
    return el[propName] === type;
  }
  return productionsArray.filter(isType);
}

export function filterByTypeArray(productionsArray, propName, typesArray) {
  function isType(el, index, array) {
    return typesArray.includes(el[propName]);
  }
  return productionsArray.filter(isType);
}

export function filterExclusiveTypeArray(
  productionsArray,
  propName,
  typesArray
) {
  function isType(el, index, array) {
    return !typesArray.includes(el[propName]);
  }
  return productionsArray.filter(isType);
}

////////////////// CORE TYPES

export function countCoreM3(productionsArray) {
  function singleCoreM3(m2, thickness) {
    return (m2 * thickness) / 1000;
  }
  let m3 = 0;
  productionsArray.forEach(el =>
    el.type === 'D'
      ? (m3 += singleCoreM3(el.m2, el.thickness) + el.m2 * 0.015)
      : (m3 += singleCoreM3(el.m2, el.thickness))
  );
  return Math.round(m3 * 100) / 100;
}

/////////// STEEL SHEETS
export function propsArrayFromArray(productionsArray, propName) {
  let propsArray = [];
  productionsArray.forEach(el => {
    if (!propsArray.includes(el[propName])) {
      propsArray.push(el[propName]);
    }
  });
  return propsArray;
}

export function countM(productionsArray) {
  let meters = 0;
  productionsArray.forEach(el => {
    if (el.type === 'S') {
      meters += el.m2 / 1.175;
    }
    if (el.type === 'D') {
      meters += el.m2;
    }
  });
  return Math.round((meters * 100) / 100);
}
////////////// PRODUCTIONS
export function filterByMonth(productionsArray, datePropName, month) {
  function isType(el, index, array) {
    let date = new Date(el[datePropName]);
    return (date.getMonth() + 1).toString() === month;
  }
  return productionsArray.filter(isType);
}
export function filterByYear(productionsArray, datePropName, year) {
  function isType(el, index, array) {
    let date = new Date(el[datePropName]);
    return date.getFullYear().toString() === year;
  }
  return productionsArray.filter(isType);
}

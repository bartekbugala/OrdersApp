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

////////////////// RDZENIE

export function countCoreM3(productionsArray) {
  function singleCoreM3(m2, thickness) {
    return (m2 * thickness) / 1000;
  }
  let m3 = 0;
  productionsArray.forEach(el => (m3 += singleCoreM3(el.m2, el.thickness)));
  return Math.round(m3 * 100) / 100;
}

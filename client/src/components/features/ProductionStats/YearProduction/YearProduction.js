import React from 'react';

import {
  countM2,
  filterByType,
  filterByMonth,
  propsArrayFromArray
} from '../../../../utils/stats';

let monthsArr = [
  'STY',
  'LUT',
  'MAR',
  'KWI',
  'MAJ',
  'CZE',
  'LIP',
  'SIE',
  'WRZ',
  'PAŹ',
  'LIS',
  'GRU'
];

const YearProduction = ({ productions }) => {
  return (
    <table className="table table-warning table-striped table-bordered table-responsive-md table-hover text-center">
      <tbody>
        <tr>
          <th>Kod</th>
          {monthsArr.map((el, ind) => (
            <th key={ind}>{el}</th>
          ))}
        </tr>
        {propsArrayFromArray(productions, 'csa').map((el, indx) => {
          return (
            <tr key={indx}>
              <td>{el}</td>
              {monthsArr.map((subEl, index) => (
                <td key={index}>
                  {countM2(
                    filterByMonth(
                      filterByType(productions, 'csa', `${el}`),
                      'productionDate',
                      `${index + 1}`
                    )
                  )}
                </td>
              ))}
            </tr>
          );
        })}
        <tr>
          <td>RAZEM</td>
          {monthsArr.map((subEl, index) => (
            <td key={index}>
              {countM2(
                filterByMonth(productions, 'productionDate', `${index + 1}`)
              )}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};
export default YearProduction;

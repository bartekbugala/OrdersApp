import React from 'react';

import {
  filterByType,
  propsArrayFromArray,
  countM
} from '../../../../utils/stats';

const RequiredSteelOutside = ({ productions }) => {
  return (
    <table className="table table-success table-striped table-bordered table-responsive-md table-hover text-center">
      <thead>
        <tr>
          <th>Kolor</th>
          <th>Szerokość (mm)</th>
          <th>Ilość (mb)</th>
          <th>Waga (kg)</th>
        </tr>
      </thead>
      <tbody>
        {propsArrayFromArray(productions, 'colorOutside').map(el => {
          return (
            <tr>
              <td>{el}</td>
              <td>1250</td>
              <td>{countM(filterByType(productions, 'colorOutside', el))}</td>
              <td>
                {Math.ceil(
                  countM(filterByType(productions, 'colorOutside', el)) * 4.9
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default RequiredSteelOutside;

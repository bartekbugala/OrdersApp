import React from 'react';

import {
  filterByType,
  propsArrayFromArray,
  countM
} from '../../../../utils/stats';

const RequiredSteelInsideRoof = ({ productions }) => {
  return (
    <table className="table table-secondary table-striped table-bordered table-responsive-md table-hover text-center">
      <thead>
        <tr>
          <th>Kolor</th>
          <th>Szerokość (mm)</th>
          <th>Ilość (mb)</th>
          <th>Waga (kg)</th>
        </tr>
      </thead>
      <tbody>
        {propsArrayFromArray(
          filterByType(productions, 'type', 'D'),
          'colorInside'
        ).map((el, ind) => {
          return (
            <tr key={ind}>
              <td>{el}</td>
              <td>1065</td>
              <td>
                {countM(
                  filterByType(
                    filterByType(productions, 'type', 'D'),
                    'colorInside',
                    el
                  )
                )}
              </td>
              <td>
                {Math.ceil(
                  countM(
                    filterByType(
                      filterByType(productions, 'type', 'D'),
                      'colorInside',
                      el
                    )
                  ) * 4.18
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default RequiredSteelInsideRoof;

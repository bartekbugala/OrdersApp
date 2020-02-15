import React from 'react';

import {
  countM2,
  filterByType,
  filterExclusiveTypeArray
} from '../../../../utils/stats';

const RequiredCores = ({ productions }) => {
  return (
    <table className="table table-info table-bordered table-responsive-md table-striped table-hover text-center">
      <thead>
        <tr>
          <th>Typ / Rdzeń</th>
          <th>
            Ilość (m<sup>2</sup>)
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>D-St</td>
          <td>
            {countM2(
              filterByType(filterByType(productions, 'core', 'St'), 'type', 'D')
            )}
          </td>
        </tr>
        <tr>
          <td>S-St</td>
          <td>
            {countM2(
              filterByType(filterByType(productions, 'core', 'St'), 'type', 'S')
            )}
          </td>
        </tr>
        <tr>
          <td>D-Wm</td>
          <td>
            {countM2(
              filterByType(filterByType(productions, 'core', 'Wm'), 'type', 'D')
            )}
          </td>
        </tr>
        <tr>
          <td>S-Wm</td>
          <td>
            {countM2(
              filterByType(filterByType(productions, 'core', 'Wm'), 'type', 'S')
            )}
          </td>
        </tr>
        <tr>
          <td>Inne</td>
          <td>
            {countM2(filterExclusiveTypeArray(productions, 'type', ['D', 'S']))}
          </td>
        </tr>
        <tr>
          <td>RAZEM</td>
          <td>{countM2(productions)}</td>
        </tr>
      </tbody>
    </table>
  );
};
export default RequiredCores;

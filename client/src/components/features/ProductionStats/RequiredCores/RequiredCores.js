import React from 'react';

import { filterByType, countCoreM3 } from '../../../../utils/stats';

const RequiredCores = ({ productions }) => {
  return (
    <table className="table-secondary table table-bordered table-striped table-responsive-md table-hover text-center">
      <thead>
        <tr>
          <th>Rodzaj</th>
          <th>
            Ilość (m<sup>3</sup>)
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Styropian Dach</td>
          <td>
            {countCoreM3(
              filterByType(filterByType(productions, 'core', 'St'), 'type', 'D')
            )}
          </td>
        </tr>
        <tr>
          <td>Styropian Ściana</td>
          <td>
            {countCoreM3(
              filterByType(filterByType(productions, 'core', 'St'), 'type', 'S')
            )}
          </td>
        </tr>
        <tr>
          <td>Wełna Mineralna</td>
          <td>{countCoreM3(filterByType(productions, 'core', 'Wm'))}</td>
        </tr>
        <tr>
          <td>PUR</td>
          <td>{countCoreM3(filterByType(productions, 'core', 'PUR'))}</td>
        </tr>
        <tr>
          <td>XPS</td>
          <td>{countCoreM3(filterByType(productions, 'core', 'XPS'))}</td>
        </tr>
      </tbody>
    </table>
  );
};
export default RequiredCores;

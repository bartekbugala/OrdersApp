import React from 'react';
import { PropTypes } from 'prop-types';
import { isEqual } from 'lodash';
import {
  countM2,
  filterByType,
  filterByTypeArray,
  countCoreM3,
  filterExclusiveTypeArray
} from '../../../utils/stats';
// components
import Alert from '../../common/Alert/Alert';
import Spinner from '../../common/Spinner/Spinner';

class CurrentProductions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      today: new Date()
    };
  }

  componentDidMount() {
    const { loadCurrentProductions } = this.props;
    loadCurrentProductions();
  }

  render() {
    const { currentProductions } = this.props;
    const { startDate } = this.state;
    // let m2RoofMw = currentProductions.filter(el.);
    console.log(currentProductions);
    return (
      <div className="row">
        <div className="col-3">
          <h5>Zamówienia bieżące:</h5>
          <table className="table table-bordered table-responsive-md table-hover text-center">
            <thead>
              <tr>
                <th>Rodzaj Zestawienia</th>
                <th>Wartość</th>
                <th>JM</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>D-St</td>
                <td>
                  {countM2(
                    filterByType(
                      filterByType(currentProductions, 'core', 'St'),
                      'type',
                      'D'
                    )
                  )}
                </td>
                <td>
                  m<sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>S-St</td>
                <td>
                  {countM2(
                    filterByType(
                      filterByType(currentProductions, 'core', 'St'),
                      'type',
                      'S'
                    )
                  )}
                </td>
                <td>
                  m<sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>D-Wm</td>
                <td>
                  {countM2(
                    filterByType(
                      filterByType(currentProductions, 'core', 'Wm'),
                      'type',
                      'D'
                    )
                  )}
                </td>
                <td>
                  m<sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>S-Wm</td>
                <td>
                  {countM2(
                    filterByType(
                      filterByType(currentProductions, 'core', 'Wm'),
                      'type',
                      'S'
                    )
                  )}
                </td>
                <td>
                  m<sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Inne</td>
                <td>
                  {countM2(
                    filterExclusiveTypeArray(currentProductions, 'type', [
                      'D',
                      'S'
                    ])
                  )}
                </td>
                <td>
                  m<sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>RAZEM</td>
                <td>{countM2(currentProductions)}</td>
                <td>
                  m<sup>2</sup>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-3">
          <h5>Potrzebne Rdzenie:</h5>
          <table className="table-secondary table table-bordered table-responsive-md table-hover text-center">
            <thead>
              <tr>
                <th>Rodzaj</th>
                <th>Wartość</th>
                <th>JM</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Styropian Dach</td>
                <td>
                  {countCoreM3(
                    filterByType(
                      filterByType(currentProductions, 'core', 'St'),
                      'type',
                      'D'
                    )
                  )}
                </td>
                <td>
                  m<sup>3</sup>
                </td>
              </tr>
              <tr>
                <td>Styropian Ściana</td>
                <td>
                  {countCoreM3(
                    filterByType(
                      filterByType(currentProductions, 'core', 'St'),
                      'type',
                      'S'
                    )
                  )}
                </td>
                <td>
                  m<sup>3</sup>
                </td>
              </tr>
              <tr>
                <td>Wełna Mineralna</td>
                <td>
                  {countCoreM3(filterByType(currentProductions, 'core', 'Wm'))}
                </td>
                <td>
                  m<sup>3</sup>
                </td>
              </tr>
              <tr>
                <td>PUR</td>
                <td>
                  {countCoreM3(filterByType(currentProductions, 'core', 'PUR'))}
                </td>
                <td>
                  m<sup>3</sup>
                </td>
              </tr>
              <tr>
                <td>XPS</td>
                <td>
                  {countCoreM3(filterByType(currentProductions, 'core', 'XPS'))}
                </td>
                <td>
                  m<sup>3</sup>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default CurrentProductions;

CurrentProductions.propTypes = {
  currentProductions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      orderNumber: PropTypes.string,
      clientName: PropTypes.string,
      downpayment: PropTypes.string,
      productionTerm: PropTypes.number,
      finalPayment: PropTypes.bool,
      finished: PropTypes.bool.isRequired,
      type: PropTypes.string,
      colorOutside: PropTypes.string,
      colorInside: PropTypes.string,
      core: PropTypes.string,
      thickness: PropTypes.number,
      m2: PropTypes.number,
      csa: PropTypes.string
    })
  )
  //loadPostsByPage: PropTypes.func
};

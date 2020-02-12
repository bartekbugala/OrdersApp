import React from 'react';
import { PropTypes } from 'prop-types';
import { isEqual } from 'lodash';
import {
  countM2,
  filterByType,
  filterByTypeArray,
  filterByMonth,
  filterByYear,
  countCoreM3,
  filterExclusiveTypeArray,
  propsArrayFromArray,
  countM
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
    const {
      loadCurrentProductions,
      loadFinishedProductions,
      loadTransportedProductions
    } = this.props;
    loadCurrentProductions();
    loadFinishedProductions();
    loadTransportedProductions();
  }

  render() {
    const {
      currentProductions,
      finishedProductions,
      transportedProductions
    } = this.props;
    const { startDate } = this.state;
    let fullYear = new Date(Date.now()).getFullYear();
    let finishedAndTranspotedProd = finishedProductions.concat(
      transportedProductions
    );
    let thisYearFinishedProductions = filterByYear(
      finishedAndTranspotedProd,
      'productionDate',
      `${fullYear}`
    );
    // let m2RoofMw = currentProductions.filter(el.);
    console.log(currentProductions);
    return (
      <div className="row">
        <div className="col-3">
          <h5>Zamówienia bieżące:</h5>
          <table className="table table-info table-bordered table-responsive-md table-hover text-center">
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
                    filterByType(
                      filterByType(currentProductions, 'core', 'St'),
                      'type',
                      'D'
                    )
                  )}
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
              </tr>
              <tr>
                <td>RAZEM</td>
                <td>{countM2(currentProductions)}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-4">
          <h5>Potrzebne Blachy Zewnętrzne:</h5>
          <table className="table table-success table-striped table-bordered table-responsive-md table-hover text-center">
            <thead>
              <tr>
                <th>Kolor</th>
                <th>Szerokość (mm)</th>
                <th>Ilość (mb)</th>
              </tr>
            </thead>
            <tbody>
              {propsArrayFromArray(currentProductions, 'colorOutside').map(
                el => {
                  return (
                    <tr>
                      <td>{el}</td>
                      <td>1250</td>
                      <td>
                        {countM(
                          filterByType(currentProductions, 'colorOutside', el)
                        )}
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
          <h5>Potrzebne Blachy Wewnętrzne:</h5>
          <table className="table table-secondary table-striped table-bordered table-responsive-md table-hover text-center">
            <thead>
              <tr>
                <th>Kolor</th>
                <th>Szerokość (mm)</th>
                <th>Ilość (mb)</th>
              </tr>
            </thead>
            <tbody>
              {propsArrayFromArray(currentProductions, 'colorInside').map(
                el => {
                  return (
                    <tr>
                      <td>{el}</td>
                      <td>1065</td>
                      <td>
                        {countM(
                          filterByType(
                            filterByType(currentProductions, 'type', 'D'),
                            'colorInside',
                            el
                          )
                        )}
                      </td>
                    </tr>
                  );
                }
              )}
              {propsArrayFromArray(currentProductions, 'colorInside').map(
                el => {
                  return (
                    <tr>
                      <td>{el}</td>
                      <td>1250</td>
                      <td>
                        {countM(
                          filterByType(
                            filterByType(currentProductions, 'type', 'S'),
                            'colorInside',
                            el
                          )
                        )}
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </div>
        <div className="col-3">
          <h5>Potrzebne Rdzenie:</h5>
          <table className="table-secondary table table-bordered table-responsive-md table-hover text-center">
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
                    filterByType(
                      filterByType(currentProductions, 'core', 'St'),
                      'type',
                      'D'
                    )
                  )}
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
              </tr>
              <tr>
                <td>Wełna Mineralna</td>
                <td>
                  {countCoreM3(filterByType(currentProductions, 'core', 'Wm'))}
                </td>
              </tr>
              <tr>
                <td>PUR</td>
                <td>
                  {countCoreM3(filterByType(currentProductions, 'core', 'PUR'))}
                </td>
              </tr>
              <tr>
                <td>XPS</td>
                <td>
                  {countCoreM3(filterByType(currentProductions, 'core', 'XPS'))}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="row">
          <div className="col col-12">
            <h5>
              Produkcja w m<sup>2</sup> w roku{' '}
              {new Date(Date.now()).getFullYear()} według miesięcy:
            </h5>
            <table className="table table-warning table-bordered table-responsive-md table-hover text-center">
              <tbody>
                <tr>
                  <th>Kod</th>
                  <th>STY</th>
                  <th>LUT</th>
                  <th>MAR</th>
                  <th>KWI</th>
                  <th>MAJ</th>
                  <th>CZE</th>
                  <th>LIP</th>
                  <th>SIE</th>
                  <th>WRZ</th>
                  <th>PAŹ</th>
                  <th>LIS</th>
                  <th>GRU</th>
                </tr>
                {propsArrayFromArray(thisYearFinishedProductions, 'csa').map(
                  el => {
                    return (
                      <tr>
                        <td>{el}</td>
                        <td>
                          {countM2(
                            filterByMonth(
                              filterByType(
                                thisYearFinishedProductions,
                                'csa',
                                `${el}`
                              ),
                              'productionDate',
                              '1'
                            )
                          )}
                        </td>
                        <td>
                          {countM2(
                            filterByMonth(
                              filterByType(
                                thisYearFinishedProductions,
                                'csa',
                                `${el}`
                              ),
                              'productionDate',
                              '2'
                            )
                          )}
                        </td>
                        <td>
                          {countM2(
                            filterByMonth(
                              filterByType(
                                thisYearFinishedProductions,
                                'csa',
                                `${el}`
                              ),
                              'productionDate',
                              '3'
                            )
                          )}
                        </td>
                        <td>
                          {countM2(
                            filterByMonth(
                              filterByType(
                                thisYearFinishedProductions,
                                'csa',
                                `${el}`
                              ),
                              'productionDate',
                              '4'
                            )
                          )}
                        </td>
                        <td>
                          {countM2(
                            filterByMonth(
                              filterByType(
                                thisYearFinishedProductions,
                                'csa',
                                `${el}`
                              ),
                              'productionDate',
                              '5'
                            )
                          )}
                        </td>
                        <td>
                          {countM2(
                            filterByMonth(
                              filterByType(
                                thisYearFinishedProductions,
                                'csa',
                                `${el}`
                              ),
                              'productionDate',
                              '6'
                            )
                          )}
                        </td>
                        <td>
                          {countM2(
                            filterByMonth(
                              filterByType(
                                thisYearFinishedProductions,
                                'csa',
                                `${el}`
                              ),
                              'productionDate',
                              '7'
                            )
                          )}
                        </td>
                        <td>
                          {countM2(
                            filterByMonth(
                              filterByType(
                                thisYearFinishedProductions,
                                'csa',
                                `${el}`
                              ),
                              'productionDate',
                              '8'
                            )
                          )}
                        </td>
                        <td>
                          {countM2(
                            filterByMonth(
                              filterByType(
                                thisYearFinishedProductions,
                                'csa',
                                `${el}`
                              ),
                              'productionDate',
                              '9'
                            )
                          )}
                        </td>
                        <td>
                          {countM2(
                            filterByMonth(
                              filterByType(
                                thisYearFinishedProductions,
                                'csa',
                                `${el}`
                              ),
                              'productionDate',
                              '10'
                            )
                          )}
                        </td>
                        <td>
                          {countM2(
                            filterByMonth(
                              filterByType(
                                thisYearFinishedProductions,
                                'csa',
                                `${el}`
                              ),
                              'productionDate',
                              '11'
                            )
                          )}
                        </td>
                        <td>
                          {countM2(
                            filterByMonth(
                              filterByType(
                                thisYearFinishedProductions,
                                'csa',
                                `${el}`
                              ),
                              'productionDate',
                              '12'
                            )
                          )}
                        </td>
                      </tr>
                    );
                  }
                )}
                <tr>
                  <td>RAZEM</td>
                  <td>
                    {countM2(
                      filterByMonth(
                        thisYearFinishedProductions,
                        'productionDate',
                        '1'
                      )
                    )}
                  </td>
                  <td>
                    {countM2(
                      filterByMonth(
                        thisYearFinishedProductions,
                        'productionDate',
                        '2'
                      )
                    )}
                  </td>
                  <td>
                    {countM2(
                      filterByMonth(
                        thisYearFinishedProductions,
                        'productionDate',
                        '3'
                      )
                    )}
                  </td>
                  <td>
                    {countM2(
                      filterByMonth(
                        thisYearFinishedProductions,
                        'productionDate',
                        '4'
                      )
                    )}
                  </td>
                  <td>
                    {countM2(
                      filterByMonth(
                        thisYearFinishedProductions,
                        'productionDate',
                        '5'
                      )
                    )}
                  </td>
                  <td>
                    {countM2(
                      filterByMonth(
                        thisYearFinishedProductions,
                        'productionDate',
                        '6'
                      )
                    )}
                  </td>
                  <td>
                    {countM2(
                      filterByMonth(
                        thisYearFinishedProductions,
                        'productionDate',
                        '7'
                      )
                    )}
                  </td>
                  <td>
                    {countM2(
                      filterByMonth(
                        thisYearFinishedProductions,
                        'productionDate',
                        '8'
                      )
                    )}
                  </td>
                  <td>
                    {countM2(
                      filterByMonth(
                        thisYearFinishedProductions,
                        'productionDate',
                        '9'
                      )
                    )}
                  </td>
                  <td>
                    {countM2(
                      filterByMonth(
                        thisYearFinishedProductions,
                        'productionDate',
                        '10'
                      )
                    )}
                  </td>
                  <td>
                    {countM2(
                      filterByMonth(
                        thisYearFinishedProductions,
                        'productionDate',
                        '11'
                      )
                    )}
                  </td>
                  <td>
                    {countM2(
                      filterByMonth(
                        thisYearFinishedProductions,
                        'productionDate',
                        '12'
                      )
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
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

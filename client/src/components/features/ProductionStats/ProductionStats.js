import React from 'react';
import { PropTypes } from 'prop-types';
import { filterByYear } from '../../../utils/stats';

import CurrentOrders from './CurrentOrders/CurrentOrders';
import RequiredCores from './RequiredCores/RequiredCores';
import RequiredSteelOutside from './RequiredSteelOutside/RequiredSteelOutside';
import RequiredSteelInsideWall from './RequiredSteelInsideWall/RequiredSteelInsideWall';
import RequiredSteelInsideRoof from './RequiredSteelInsideRoof/RequiredSteelInsideRoof';
import YearProduction from './YearProduction/YearProduction';

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
    let fullYear = new Date(Date.now()).getFullYear();
    let finishedAndTranspotedProd = finishedProductions.concat(
      transportedProductions
    );
    let thisYearFinishedProductions = filterByYear(
      finishedAndTranspotedProd,
      'productionDate',
      `${fullYear}`
    );
    let lastYearFinishedProductions = filterByYear(
      finishedAndTranspotedProd,
      'productionDate',
      `${fullYear - 1}`
    );
    console.log(currentProductions);
    return (
      <div className="row">
        <div className="col-4">
          <h5>Zamówienia bieżące:</h5>
          <CurrentOrders productions={currentProductions} />
          <h5>Potrzebne Rdzenie:</h5>
          <RequiredCores productions={currentProductions} />
        </div>
        <div className="col-4">
          <h5>Potrzebne Blachy Zewnętrzne:</h5>
          <RequiredSteelOutside productions={currentProductions} />
        </div>
        <div className="col-4">
          <h5>Blachy Wewnętrzne na Ściany</h5>
          <RequiredSteelInsideWall productions={currentProductions} />
          <h5>Blachy Wewnętrzne na dachy:</h5>
          <RequiredSteelInsideRoof productions={currentProductions} />
        </div>
        <div className="row">
          <div className="col col-12">
            <h5>
              Produkcja w m<sup>2</sup> w roku {fullYear} według miesięcy:
            </h5>
            <YearProduction productions={thisYearFinishedProductions} />
            <h5>
              Produkcja w m<sup>2</sup> w roku {fullYear - 1} według miesięcy:
            </h5>
            <YearProduction productions={lastYearFinishedProductions} />
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
};

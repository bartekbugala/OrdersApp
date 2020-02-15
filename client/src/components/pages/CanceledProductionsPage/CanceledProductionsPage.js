import React from 'react';
import CanceledProductions from '../../features/ProductionLists/CanceledProductions/CanceledProductionsContainer';
import Title from '../../common/Title/Title';

class CanceledProductionsPage extends React.Component {
  render() {
    return (
      <section>
        <Title>Anulowane produkcje</Title>
        <CanceledProductions />
      </section>
    );
  }
}
export default CanceledProductionsPage;

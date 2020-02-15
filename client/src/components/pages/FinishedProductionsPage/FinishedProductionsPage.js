import React from 'react';
import FinishedProductions from '../../features/ProductionLists/FinishedProductions/FinishedProductionsContainer';
import Title from '../../common/Title/Title';

class FinishedProductionsPage extends React.Component {
  render() {
    return (
      <section>
        <Title>Wyprodukowane</Title>
        <FinishedProductions />
      </section>
    );
  }
}
export default FinishedProductionsPage;

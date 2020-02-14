import React from 'react';
import Title from '../../common/Title/Title';
import ProductionStats from '../../features/ProductionStats/ProductionStatsContainer';

class CurrentProductionsPage extends React.Component {
  render() {
    return (
      <section>
        <Title>Statystyki - {new Date(Date.now()).toLocaleDateString()}</Title>
        <ProductionStats />
      </section>
    );
  }
}
export default CurrentProductionsPage;

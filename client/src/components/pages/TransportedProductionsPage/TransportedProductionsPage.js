import React from 'react';
import TransportedProductions from '../../features/TransportedProductions/TransportedProductionsContainer';
import Title from '../../common/Title/Title';

class TransportedProductionsPage extends React.Component {
  render() {
    return (
      <section>
        <Title>Wywiezione produkcje</Title>
        <TransportedProductions />
      </section>
    );
  }
}
export default TransportedProductionsPage;

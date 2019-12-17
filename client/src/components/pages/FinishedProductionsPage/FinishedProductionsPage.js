import React from 'react';
import FinishedProductions from '../../features/FinishedProductions/FinishedProductionsContainer';
import Title from '../../common/Title/Title';

class FinishedProductionsPage extends React.Component {
  render() {
    return (
      <section>
        <Title>Wyprodukowane produkcje</Title>
        <FinishedProductions />
      </section>
    );
  }
}
export default FinishedProductionsPage;

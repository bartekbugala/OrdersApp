import React from 'react';
import CurrentProductions from '../../features/CurrentProductions/CurrentProductionsContainer';
import Title from '../../common/Title/Title';

class CurrentProductionsPage extends React.Component {
  render() {
    return (
      <section>
        <Title>Bieżące produkcje</Title>
        <CurrentProductions />
      </section>
    );
  }
}
export default CurrentProductionsPage;

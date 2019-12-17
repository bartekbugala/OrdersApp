import React from 'react';
import AllProductions from '../../features/AllProductions/AllProductionsContainer';
import Title from '../../common/Title/Title';

class AllProductionsPage extends React.Component {
  render() {
    return (
      <section>
        <Title>Wszystkie produkcje</Title>
        <AllProductions />
      </section>
    );
  }
}
export default AllProductionsPage;

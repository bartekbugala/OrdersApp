import React from 'react';
// components
import OrderlistEditProduction from '../../common/OrderList/OrderlistEditProduction/OrderlistEditProduction';
import Modal from '../../common/Modal/Modal';

class EditProduction extends React.Component {
  handleEditChange = e => {
    const { editedProduction, updateEdited } = this.props;
    updateEdited({ ...editedProduction, [e.target.name]: e.target.value });
  };

  handleEditDateSelect = date => {
    const { editedProduction, updateEdited } = this.props;
    updateEdited({ ...editedProduction, downpayment: date });
  };

  handleEditDateChange = date => {
    const { editedProduction, updateEdited } = this.props;
    updateEdited({ ...editedProduction, downpayment: date });
  };

  handleEditCheckBoxChange = e => {
    const { editedProduction, updateEdited } = this.props;
    const target = e.target;
    updateEdited({
      ...editedProduction,
      finalPayment: target.checked === true ? true : false
    });
  };

  handleEditForm = e => {
    e.preventDefault();
    const {
      updateProduction,
      loadProductions,
      loadEditedProduction
    } = this.props;
    const { editedProduction } = this.props;
    const loadEdited = id => {
      loadEditedProduction(id);
      this.props.closeEdit();
    };
    updateProduction(
      editedProduction.id,
      editedProduction,
      loadProductions
    ).then(loadEdited(editedProduction.id));
  };

  render() {
    const {
      handleEditChange,
      handleEditDateSelect,
      handleEditDateChange,
      handleEditCheckBoxChange,
      handleEditForm
    } = this;
    const { startDate, closeEdit, editedProduction, handleForm } = this.props;
    return (
      <Modal handleModal={closeEdit}>
        <h3>Edycja pozycji</h3>
        <OrderlistEditProduction
          handleChange={handleEditChange}
          editedProduction={editedProduction}
          handleDateChange={handleEditDateChange}
          handleCheckBoxChange={handleEditCheckBoxChange}
          handleDateSelect={handleEditDateSelect}
          startDate={startDate}
          handleForm={handleEditForm}
          closeEdit={closeEdit}
        />
      </Modal>
    );
  }
}
export default EditProduction;

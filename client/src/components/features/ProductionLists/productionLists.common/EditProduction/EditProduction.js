import React from 'react';
import EditProductionForm from './EditProductionForm/EditProductionForm';
import Modal from '../../../../common/Modal/Modal';
import {
  returnFloatChar,
  returnIntChar
} from '../../../../../utils/inputValidation';

class EditProduction extends React.Component {
  handleEditChange = e => {
    const { editedProduction, updateEdited } = this.props;
    updateEdited({
      ...editedProduction,
      [e.target.name]: e.target.value
    });
  };

  handleEditChangeFloat = e => {
    const { editedProduction, updateEdited } = this.props;
    updateEdited({
      ...editedProduction,
      [e.target.name]: returnFloatChar(e.target.value)
    });
  };

  handleEditChangeInt = e => {
    const { editedProduction, updateEdited } = this.props;
    updateEdited({
      ...editedProduction,
      [e.target.name]: returnIntChar(e.target.value)
    });
  };

  handleEditDateSelect = date => {
    const { editedProduction, updateEdited } = this.props;
    console.log(date);
    updateEdited({ ...editedProduction, downpayment: date });
  };

  handleEditDateChange = date => {
    const { editedProduction, updateEdited } = this.props;
    updateEdited({ ...editedProduction, downpayment: date });
  };

  ///
  handleEditProductionDateSelect = date => {
    const { editedProduction, updateEdited } = this.props;
    updateEdited({ ...editedProduction, productionDate: date });
  };

  handleEditProductionDateChange = date => {
    const { editedProduction, updateEdited } = this.props;
    updateEdited({ ...editedProduction, productionDate: date });
  };
  ///

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
    updateProduction(editedProduction.id, editedProduction, loadProductions)
      .then(loadEdited(editedProduction.id))
      .then(loadProductions);
  };

  render() {
    const {
      handleEditChange,
      handleEditChangeInt,
      handleEditChangeFloat,
      handleEditDateSelect,
      handleEditProductionDateSelect,
      handleEditDateChange,
      handleEditCheckBoxChange,
      handleEditForm
    } = this;
    const { startDate, closeEdit, editedProduction } = this.props;
    return (
      <Modal handleModal={closeEdit}>
        <h3>Edycja pozycji</h3>
        <EditProductionForm
          handleChange={handleEditChange}
          handleChangeInt={handleEditChangeInt}
          handleChangeFloat={handleEditChangeFloat}
          editedProduction={editedProduction}
          handleDateChange={handleEditDateChange}
          handleCheckBoxChange={handleEditCheckBoxChange}
          handleDateSelect={handleEditDateSelect}
          handleProductionDateSelect={handleEditProductionDateSelect}
          startDate={startDate}
          handleForm={handleEditForm}
          closeEdit={closeEdit}
        />
      </Modal>
    );
  }
}
export default EditProduction;

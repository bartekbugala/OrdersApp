import React from 'react';
import { MdAttachMoney, MdMoneyOff } from 'react-icons/md';
import { PropTypes } from 'prop-types';
import { isEqual } from 'lodash';
// utils
import formatDate from '../../../utils/formatDate';
import countDaysLeft from '../../../utils/countDaysLeft';
import currentFromSquareMeters from '../../../utils/currentFromSquareMeters';
import cutText from '../../../utils/cutText';
// components
import OrderListTable from '../../common/OrderList/OrderListTable/OrderListTable';
import OrderlistTrAdd from '../../common/OrderList/OrderlistTrAdd/OrderlistTrAdd';
import OrderlistEditProduction from '../../common/OrderList/OrderlistEditProduction/OrderlistEditProduction';
import EditButton from '../../common/Buttons/EditButton/EditButton';
import Alert from '../../common/Alert/Alert';
import Spinner from '../../common/Spinner/Spinner';
import Modal from '../../common/Modal/Modal';
import './AllProductions.scss';

class AllProductions extends React.Component {
  constructor(props) {
    super(props);
    let initialNewProduction = {
      orderNumber: '',
      clientName: '',
      downpayment: '',
      productionTerm: '',
      finalPayment: false,
      type: '',
      colorOutside: '',
      colorInside: '',
      core: '',
      thickness: '',
      finished: false,
      canceled: false,
      transported: false,
      m2: '',
      csa: ''
    };
    this.state = {
      allProductions: this.props.allProductions,
      isEdited: false,
      request: this.props.request,
      newProduction: initialNewProduction,
      editedProduction: {},
      startDate: new Date()
    };
  }

  componentDidMount() {
    const { loadAllProductions, sortParams } = this.props;
    loadAllProductions(
      sortParams.key,
      sortParams.valueType,
      sortParams.direction
    ).then(this.setState({ allProductions: this.props.allProductions }));
  }

  componentDidUpdate(prevState) {
    const { loadAllProductions, sortParams } = this.props;
    if (
      isEqual(this.state.allProductions, prevState.allProductions) === false
    ) {
      loadAllProductions(
        sortParams.key,
        sortParams.valueType,
        sortParams.direction
      ).then(this.setState({ allProductions: this.props.allProductions }));
    }
  }
  handleChange = e => {
    const { newProduction } = this.state;
    this.setState({
      newProduction: { ...newProduction, [e.target.name]: e.target.value }
    });
  };

  handleDateSelect = date => {
    const { newProduction } = this.state;
    this.setState({
      newProduction: { ...newProduction, downpayment: date }
    });
  };

  handleCheckBoxChange = e => {
    const { newProduction } = this.state;
    const target = e.target;
    this.setState({
      newProduction: {
        ...newProduction,
        finalPayment: target.checked === true ? true : false
      }
    });
  };

  handleAddForm = e => {
    e.preventDefault();
    const { addProduction, loadAllProductions } = this.props;
    const { newProduction } = this.state;
    addProduction(newProduction, loadAllProductions).then(
      this.setState({ newProduction: {} })
    );
  };

  closeEdit = () => {
    this.setState({ isEdited: false });
  };

  editHandler = id => {
    const { loadEditedProduction, editedProduction } = this.props;
    const loadEdited = async () => {
      await loadEditedProduction(id);
      this.setState({ editedProduction: editedProduction, isEdited: true });
    };
    loadEdited();
  };

  handleEditDateSelect = date => {
    const { editedProduction } = this.state;
    this.setState({
      editedProduction: { ...editedProduction, downpayment: date }
    });
  };

  handleEditCheckBoxChange = e => {
    const { editedProduction } = this.state;
    const target = e.target;
    this.setState({
      editedProduction: {
        ...editedProduction,
        finalPayment: target.checked === true ? true : false
      }
    });
  };

  handleEditForm = e => {
    e.preventDefault();
    const {
      updateProduction,
      loadAllProductions,
      loadEditedProduction
    } = this.props;
    const { editedProduction } = this.state;
    const loadEdited = async id => {
      await loadEditedProduction(id);
      this.setState({ editedProduction: editedProduction, isEdited: false });
    };
    updateProduction(
      editedProduction.id,
      editedProduction,
      loadAllProductions
    ).then(loadEdited(editedProduction.id));
  };

  finishHandler = id => {
    const { finishProduction, loadAllProductions } = this.props;
    finishProduction(id, loadAllProductions);
  };

  cancelHandler = id => {
    const { cancelProduction, loadAllProductions } = this.props;
    cancelProduction(id, loadAllProductions);
  };

  transportHandler = id => {
    const { transportProduction, loadAllProductions } = this.props;
    transportProduction(id, loadAllProductions);
  };

  handleSort = (
    key = 'orderNumber',
    valueType = 'number',
    direction = 'asc'
  ) => {
    const { allProductions } = this.state;
    const { sortAllProductions } = this.props;
    sortAllProductions(allProductions, key, valueType, direction);
  };

  render() {
    const {
      handleChange,
      handleDateSelect,
      handleCheckBoxChange,
      handleSort
    } = this;
    const {
      handleEditChange,
      handleEditDateSelect,
      handleEditCheckBoxChange,
      handleEditForm,
      closeEdit
    } = this;

    const { allProductions, updateRequest, request } = this.props;
    const { newProduction, startDate } = this.state;
    const tdClass = 'production-list-td';

    if (updateRequest.error)
      return <Alert variant="error">{`${updateRequest.error}`}</Alert>;
    /*     if (updateRequest.success) return <Alert variant="success">Post has been updated!</Alert>; */ else if (
      updateRequest.pending &&
      request.pending
    )
      return <Spinner />;
    else
      return (
        <div>
          {this.state.isEdited && (
            <Modal handleModal={closeEdit}>
              <OrderlistEditProduction
                handleChange={handleEditChange}
                editedProduction={this.state.editedProduction}
                handleCheckBoxChange={handleEditCheckBoxChange}
                handleDateSelect={handleEditDateSelect}
                startDate={startDate}
                handleForm={handleEditForm}
              />
            </Modal>
          )}

          <form onSubmit={this.handleAddForm} autoComplete="off">
            <OrderListTable
              sortColumn={(key, valueType) => {
                handleSort(key, valueType);
              }}>
              {allProductions.map(production => {
                let rowBgclass;
                switch (true) {
                  case production.canceled === true:
                    rowBgclass = 'row-production-canceled';
                    break;
                  case production.transported === true:
                    rowBgclass = 'row-production-transported';
                    break;
                  case production.finished === true:
                    rowBgclass = 'row-production-finished';
                    break;
                  default:
                    break;
                }
                let daysLeft =
                  countDaysLeft(
                    production.downpayment,
                    production.productionTerm
                  ) || '';
                let daysLeftClass = 'text-default';
                switch (true) {
                  case daysLeft <= 7 && daysLeft > 2:
                    daysLeftClass = 'text-warning';
                    break;
                  case daysLeft < 3:
                    daysLeftClass = 'text-danger';
                    break;
                  default:
                    daysLeftClass = 'text-default';
                }
                return (
                  <tr
                    key={production.id}
                    className={`production-list ${rowBgclass}`}>
                    <td className={`${tdClass} short-column`}>
                      {production.orderNumber}
                    </td>
                    <td className={`${tdClass} name-column`}>
                      {cutText(production.clientName, 25)}
                    </td>
                    <td className={`${tdClass} date-column`}>
                      {formatDate(production.downpayment)}
                    </td>
                    <td className={`${tdClass} short-column ${daysLeftClass}`}>
                      {daysLeft}
                    </td>
                    <td className={`${tdClass} short-column`}>
                      {production.finalPayment === true ? (
                        <MdAttachMoney className="text-success" />
                      ) : (
                        <MdMoneyOff className="text-danger" />
                      )}
                    </td>
                    <td className={`${tdClass} short-column`}>
                      {production.type}
                    </td>
                    <td className={`${tdClass}`}>{production.colorOutside}</td>
                    <td className={`${tdClass}`}>{production.colorInside}</td>
                    <td className={`${tdClass} short-column`}>
                      {production.core}
                    </td>
                    <td className={`${tdClass} short-column`}>
                      {production.thickness}
                    </td>

                    <td className={`${tdClass}`}>{production.m2}</td>
                    <td className={`${tdClass}`}>
                      {currentFromSquareMeters(production.type, production.m2)}
                    </td>
                    <td className={`${tdClass} short-column`}>
                      {production.csa}
                    </td>
                    <td
                      className={`${tdClass} production-list-buttons noprint`}>
                      <span className="buttons-nowrap">
                        <EditButton
                          clickHandler={() => {
                            this.editHandler(production.id);
                          }}
                        />
                      </span>
                    </td>
                  </tr>
                );
              })}
              <OrderlistTrAdd
                handleChange={handleChange}
                newProduction={newProduction}
                handleCheckBoxChange={handleCheckBoxChange}
                handleDateSelect={handleDateSelect}
                startDate={startDate}
              />
            </OrderListTable>
          </form>
        </div>
      );
  }
}
export default AllProductions;

AllProductions.propTypes = {
  updateRequest: PropTypes.object.isRequired,
  allProductions: PropTypes.arrayOf(
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
  ),
  loadPostsByPage: PropTypes.func
};

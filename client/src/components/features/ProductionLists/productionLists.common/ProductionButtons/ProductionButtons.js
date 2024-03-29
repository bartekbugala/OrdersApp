import React from 'react';
import EditButton from '../../../../common/Buttons/EditButton/EditButton';
import ProduceButton from '../../../../common/Buttons/ProduceButton/ProduceButton';
import TransportButton from '../../../../common/Buttons/TransportButton/TransportButton';
import CancelButton from '../../../../common/Buttons/CancelButton/CancelButton';
import DeleteButton from '../../../../common/Buttons/DeleteButton/DeleteButton';
import RestoreButton from '../../../../common/Buttons/RestoreButton/RestoreButton';

const ProductionButtons = ({
  production,
  editHandler,
  loadProductions,
  cancelProduction,
  transportProduction,
  finishProduction,
  deleteProduction
}) => {
  const finishHandler = id => {
    finishProduction(id).then(loadProductions);
  };

  const cancelHandler = id => {
    cancelProduction(id).then(loadProductions);
  };

  const transportHandler = id => {
    transportProduction(id).then(loadProductions);
  };

  const deleteHandler = id => {
    deleteProduction(id).then(loadProductions);
  };

  return (
    <span className="buttons-nowrap">
      <EditButton
        clickHandler={() => {
          editHandler(production.id);
        }}
      />

      {!production.transported &&
      !production.finished &&
      !production.canceled ? (
        <ProduceButton
          clickHandler={() => {
            finishHandler(production.id);
          }}
        />
      ) : production.finished &&
        !production.transported &&
        !production.canceled ? (
        <RestoreButton
          clickHandler={() => {
            finishHandler(production.id);
          }}
        />
      ) : (
        ''
      )}
      {production.finished &&
      !production.transported &&
      !production.canceled ? (
        <TransportButton
          clickHandler={() => {
            transportHandler(production.id);
          }}
        />
      ) : production.transported && !production.canceled ? (
        <RestoreButton
          clickHandler={() => {
            transportHandler(production.id);
          }}
        />
      ) : (
        ''
      )}

      {!production.canceled &&
      !production.finished &&
      !production.transported ? (
        <CancelButton
          clickHandler={() => {
            cancelHandler(production.id);
          }}
        />
      ) : production.canceled ? (
        <RestoreButton
          clickHandler={() => {
            cancelHandler(production.id);
          }}
        />
      ) : (
        ''
      )}

      {production.canceled ? (
        <DeleteButton
          clickHandler={() => {
            deleteHandler(production.id);
          }}
        />
      ) : (
        ''
      )}
    </span>
  );
};

export default ProductionButtons;

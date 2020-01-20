import React from 'react';
import EditButton from '../../common/Buttons/EditButton/EditButton';
import ProduceButton from '../../common/Buttons/ProduceButton/ProduceButton';
import TransportButton from '../../common/Buttons/TransportButton/TransportButton';
import CancelButton from '../../common/Buttons/CancelButton/CancelButton';
import RestoreButton from '../../common/Buttons/RestoreButton/RestoreButton';

const ProductionButtons = ({
  production,
  editHandler,
  loadProductions,
  cancelProduction,
  transportProduction,
  finishProduction
}) => {
  const finishHandler = id => {
    finishProduction(id, loadProductions);
  };

  const cancelHandler = id => {
    cancelProduction(id, loadProductions);
  };

  const transportHandler = id => {
    transportProduction(id, loadProductions);
  };
  return (
    <span className="buttons-nowrap">
      <EditButton
        clickHandler={() => {
          editHandler(production.id);
        }}
      />
      {!production.transported && !production.finished ? (
        <ProduceButton
          clickHandler={() => {
            finishHandler(production.id);
          }}
        />
      ) : (
        ''
      )}
      {production.finished && !production.transported ? (
        <TransportButton
          clickHandler={() => {
            transportHandler(production.id);
          }}
        />
      ) : (
        ''
      )}
      {production.finished || production.transported ? (
        <RestoreButton
          clickHandler={() => {
            production.transported
              ? transportHandler(production.id)
              : finishHandler(production.id);
          }}
        />
      ) : (
        <RestoreButton
          clickHandler={() => {
            production.finished
              ? finishHandler(production.id)
              : transportHandler(production.id);
          }}
        />
      )}

      <CancelButton
        clickHandler={() => {
          cancelHandler(production.id);
        }}
      />
    </span>
  );
};

export default ProductionButtons;

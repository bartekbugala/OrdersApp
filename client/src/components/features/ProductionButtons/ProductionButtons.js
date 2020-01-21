import React from 'react';
import EditButton from '../../common/Buttons/EditButton/EditButton';
import ProduceButton from '../../common/Buttons/ProduceButton/ProduceButton';
import TransportButton from '../../common/Buttons/TransportButton/TransportButton';
import CancelButton from '../../common/Buttons/CancelButton/CancelButton';
import DeleteButton from '../../common/Buttons/DeleteButton/DeleteButton'
import RestoreButton from '../../common/Buttons/RestoreButton/RestoreButton';

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
    finishProduction(id, loadProductions);
  };

  const cancelHandler = id => {
    cancelProduction(id, loadProductions);
  };

  const transportHandler = id => {
    transportProduction(id, loadProductions);
  };

  const deleteHandler = id => {
    deleteProduction(id, loadProductions);
  };


  return (
    <span className="buttons-nowrap">
      <EditButton
        clickHandler={() => {
          editHandler(production.id);
        }}
      />

      {!production.transported && !production.finished && !production.canceled ? (
        <ProduceButton
          clickHandler={() => {
            finishHandler(production.id);
          }}
        />
      ) : (
          (production.finished && !production.transported && !production.canceled) ?
            <RestoreButton
              clickHandler={() => {
                finishHandler(production.id)

              }}
            /> : ''
        )}
      {production.finished && !production.transported && !production.canceled ? (
        <TransportButton
          clickHandler={() => {
            transportHandler(production.id);
          }}
        />
      ) : (
          (production.transported && !production.canceled) ? <RestoreButton
            clickHandler={() => {
              transportHandler(production.id)

            }}
          /> : ''
        )}

      {(!production.canceled && !production.finished && !production.transported) ? <CancelButton
        clickHandler={() => {
          cancelHandler(production.id);
        }}
      /> :

        (production.canceled) ?
          <RestoreButton
            clickHandler={() => {
              cancelHandler(production.id)

            }}
          /> : ''


      }

      {/* DELETE BUTTON IF CANCELED  */}
      {production.canceled ? <DeleteButton
        clickHandler={() => {
          deleteHandler(production.id);
        }}
      /> : ''}

    </span>
  );
};

export default ProductionButtons;

/*

 <RestoreButton
          clickHandler={() => {
            transportHandler(production.id)

          }}
        />

      {production.finished || production.transported ? (

      ) : (
          <RestoreButton
            clickHandler={() => {
              production.finished
                ? finishHandler(production.id)
                : transportHandler(production.id);
            }}
          />
        )}

*/

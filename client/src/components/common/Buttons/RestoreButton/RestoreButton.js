import React from 'react';
import { MdSettingsBackupRestore } from 'react-icons/md';

const RestoreButton = ({ clickHandler }) => (
  <button type="button" className="btn btn-primary btn-rounded btn-sm ml-1">
    <MdSettingsBackupRestore
      onClick={e => {
        e.preventDefault();
        clickHandler();
      }}
    />
  </button>
);

export default RestoreButton;

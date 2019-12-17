import React from 'react';
import { MdSettingsBackupRestore } from 'react-icons/md';

const RestoreButton = ({ clickHandler }) => (
  <button
    className="btn btn-secondary btn-rounded btn-sm ml-1"
    onClick={e => {
      e.preventDefault();
      clickHandler();
    }}>
    <MdSettingsBackupRestore />
  </button>
);

export default RestoreButton;

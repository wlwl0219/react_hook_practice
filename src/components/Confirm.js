import React from 'react';

const useConfirm = (message, onConfirm, onCancel) => {
  if (!onConfirm && typeof onConfirm !== 'function') {
    return;
  }

  if (!onCancel && typeof onCancel !== 'function') {
    return;
  }
  const confirmAction = () => {
    if (window.confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }
  };
  return confirmAction;
};

function Confirm() {
  const deleteWorld = () => console.log('Deleting the world...');
  const abort = () => console.log('Aborting...');
  const confirmDelete = useConfirm('Are you sure', deleteWorld, abort);
  return (
    <div>
      <h2>UseConfirm</h2>
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  );
}

export default Confirm;

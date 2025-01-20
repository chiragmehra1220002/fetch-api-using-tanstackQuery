
import React from 'react';

interface ModalProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  newTitle: string;
  setNewTitle: React.Dispatch<React.SetStateAction<string>>;
  updateMutation: any;
  postIdBeingEdited: string | null;
}

const Modal: React.FC<ModalProps> = ({
  showModal,
  setShowModal,
  newTitle,
  setNewTitle,
  updateMutation,
  postIdBeingEdited
}) => {
  if (!showModal) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <button
          onClick={() => {
            if (postIdBeingEdited) {
              updateMutation.mutate(postIdBeingEdited);
              setShowModal(false);
            }
          }}
        >
          Save
        </button>
        <button onClick={() => setShowModal(false)}>Cancel</button>
      </div>
    </div>
  );
};

export default Modal;

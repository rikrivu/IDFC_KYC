import './Modal.scss';
import { ReactPortal, useContext } from 'react';
import ReactDOM from 'react-dom';

// Local Imports
import { ModalContext } from './ModalContext';

// Import Models
import { UseModal } from './UseModalHook-models';

// 3rd Party Libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Modal = (props: {showClearModal: boolean}): (ReactPortal | null) => {

  const { modalContent, toggleModal, isModalActive }: UseModal = useContext<UseModal>(ModalContext) as UseModal;

  // console.log('Modal', modalContent);

  const modalElement: JSX.Element = (
    <div className="modal-container">
      <div>

        {
          props.showClearModal ?
          <div className="modal-clear-container">
            <button type="button" className="modal-clear-button" onClick={() => toggleModal()}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
          : null
        }

        {modalContent}
      
      </div>
    </div>
  );

  return isModalActive ? ReactDOM.createPortal(modalElement, document.querySelector('#modal-root')!) : null;
};

export default Modal;

import './VerificationConfirmationModal.scss';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';

// Import 3rd Party Libraries
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

// Local Imports
import { ModalContext } from '../Modal/ModalContext';

// Import Models
import { UseModal } from '../Modal/UseModalHook-models';
import { VerificationModalProps } from '../../shared/models/verification-models';

function VerificationConfirmationModal (props: {options: VerificationModalProps}) {

    const { toggleModal }: UseModal = useContext<UseModal>(ModalContext) as UseModal;
    const nextNavigation = useHistory();

    // On click of Done or Reject Button
    const confirmAction = (): void => {
        if (props.options.navigationUrl?.length) {
            // Do navaigation here
            nextNavigation.push(props.options.navigationUrl);
        }
        toggleModal();
    }

    return (
        <div className="modal-content-container">
            <div className="modal-wrapper">
                <div className="modal-title">
                    <div>{props.options.title}</div>
                    <button type="button" className="modal-clear-button" onClick={toggleModal}>
                        <FontAwesomeIcon icon={faTimes}/>
                    </button>
                </div>
                <div className="modal-header">
                    <div>{props.options.header}</div>
                    <div>{props.options.subText}</div>
                </div>
                <div className="modal-body">
                    <div className="veri-conf-description">
                            <textarea placeholder="Description" cols={45} rows={5}></textarea>
                        </div>
                    </div>
                <div className="modal-footer">
                    <button type="button" onClick={toggleModal}>Cancel</button>
                    <button type="button" onClick={confirmAction}>{props.options.confirmationButton}</button>
                </div>
            </div>
        </div>
    );
}

export default VerificationConfirmationModal;
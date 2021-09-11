import './VerificationTopPanel.scss';

// 3rd Party Libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';
import { useContext } from 'react';

// Local Imports
import { ModalContext } from '../Modal/ModalContext';

// Import models
import { UseModal } from '../Modal/UseModalHook-models';
import { VerificationModalProps } from '../../shared/models/verification-models';

// Import Components
import VerificationConfirmationModal from '../VerificationConfirmationModal/VerificationConfirmationModal';

function VerificationTopPanel (props: {id: string, name: string}) {

    const { toggleModal }: UseModal = useContext<UseModal>(ModalContext) as UseModal;

    // On Click of Reject or Confirmation open Modal and pass necessary modal options
    const openModal = (type: ('reject' | 'complete')): void => {
        switch (type) {
            case 'reject': {
                const modalOptions: VerificationModalProps = {
                    type: 'basic',
                    title: 'Reason for Rejection',
                    header: 'Do you really want to Reject this KYC?',
                    subText: 'Please specify the reason for that.',
                    confirmationButton: 'Reject',
                    navigationUrl: '/'
                };
                toggleModal(<VerificationConfirmationModal options={modalOptions}/>)
                break;
            }
            case 'complete': {
                const modalOptions: VerificationModalProps = {
                    type: 'basic',
                    title: 'Complete Verification',
                    header: 'Do you want to Complete Verification?',
                    subText: 'Complete your process with a description.',
                    confirmationButton: 'Done',
                    navigationUrl: '/'
                };
                toggleModal(<VerificationConfirmationModal options={modalOptions}/>)
                break;
            }
        }
    }

    return (
        <div className="panel-container">
            
            <div className="left-panel">
                <Link to='/' className="back-btn">
                    <FontAwesomeIcon icon={faChevronLeft} />
                </Link>

                <div className="kyc-details">
                    <div>{props.id.toUpperCase()}</div>
                    <div>{props.name}</div>
                </div>
            </div>

            <div className="fraud-check">
                Fraud Check:
                <span>Done</span>
            </div>

            <div className="right-panel">
                <button type="button" className="btn-transparent" onClick={() => openModal('reject')}>Reject</button>
                <button type="button" className="btn-solid" onClick={() => openModal('complete')}>Complete Verification</button>
            </div>

        </div>
    );
}

export default VerificationTopPanel;
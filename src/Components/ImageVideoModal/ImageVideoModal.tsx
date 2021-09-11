import './ImageVideoModal.scss';
import React, { useContext } from 'react';

// Local Imports
import { ModalContext } from '../Modal/ModalContext';

// Import models
import { UseModal } from '../Modal/UseModalHook-models';

// Component to trigger Modal opening
function ImageVideoModal (props: {type: string, source: string}) {

    const { toggleModal }: UseModal = useContext<UseModal>(ModalContext) as UseModal;

    return (
        <button type="button" className="open-modal-btn"
            onClick={() => toggleModal(
                <ImageVideoModalContent type={props.type} source={props.source}/>
            )}
        >
            <img src={props.source} alt={props.source}/>
        </button>
    );
}

export default ImageVideoModal;

// Component for Modal Component
function ImageVideoModalContent(props: {type: string, source: string}) {

    return (
        <React.Fragment>
            {
                props.type === 'image' ?
                <div className="full-image">
                    <img src={props.source} alt={props.source}/>
                </div>
                : null
            }
        </React.Fragment>
    );
}
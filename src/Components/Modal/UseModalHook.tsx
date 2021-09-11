import { useState } from 'react';
import { UseModal } from './UseModalHook-models';

export const useModal = (): UseModal => {
  
  const [isModalActive, setIsModalActive] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<string | boolean>('I\'m the Modal Content');

  const toggleModal = (content = false): void => {

    // console.log('toggleModal', content);

    setIsModalActive(!isModalActive);
    if (content) {
      setModalContent(content);
    }
  };

  return { isModalActive, toggleModal, modalContent };
};

export default useModal;

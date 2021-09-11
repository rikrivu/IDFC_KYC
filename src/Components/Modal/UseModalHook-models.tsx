import { ReactNode } from "react";

export interface UseModal {
    isModalActive: boolean;
    toggleModal: any;
    modalContent: (string | boolean);
}

export interface ModalProviderProp {
    children: ReactNode;
    showClearModal: boolean;
}
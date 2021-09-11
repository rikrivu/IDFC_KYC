export interface VerificationOption {
    value: string;
    label: string
}

export interface VerificationModalProps {
    type: 'basic' | 'advanced';
    title: string;
    header: string;
    subText: string;
    confirmationButton: string;
    navigationUrl?: string;
}
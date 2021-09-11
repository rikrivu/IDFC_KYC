import './Dropdown.scss';

import Select, { components, Styles, Theme } from 'react-select';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";

// Import Models
import { VerificationModalProps, VerificationOption } from '../../shared/models/verification-models';
import { useContext } from 'react';
import { ModalContext } from '../Modal/ModalContext';
import { UseModal } from '../Modal/UseModalHook-models';

// Import Components
import VerificationConfirmationModal from '../VerificationConfirmationModal/VerificationConfirmationModal';

// React Select Customizations Starts
const customStyles: Partial<Styles> = {
    option: (provided: any, state: any) => ({
        ...provided,
        borderBottom: '1px solid #A9A9A9',
      }),
};

const customTheme = (theme: Theme): Theme => ({
    ...theme,
    colors: {
        ...theme.colors,
        primary: 'var(--color-maroon)',
        primary25: 'var(--color-very-light-maroon)',
    }
})

const DropdownIndicator = (props: any) => {
    return (
      <components.DropdownIndicator {...props}>
        <FontAwesomeIcon className="select-icon" icon={faSort} />
      </components.DropdownIndicator>
    );
};
// React Select Customizations Ends

function Dropdown (props: {id: number, options: VerificationOption[], handleSelectionChange: Function}) {

    const { toggleModal }: UseModal = useContext<UseModal>(ModalContext) as UseModal;

    // Update Dropdown selection and if Disagree was selected then open Modal with necessary modal options
    const selectionChange = (change: any): void => {
        if (change.value === 'DISAGREE') {
            const options: VerificationModalProps = {
                type: 'basic',
                title: 'Disagree',
                header: 'Do you want to Disagree?',
                subText: 'Justify selection with a description.',
                confirmationButton: 'Done'
            };
            toggleModal(<VerificationConfirmationModal options={options} />)
        }
        props.handleSelectionChange(change, props.id);
    }

    return (
        <Select
            id={props.id.toString()}
            options={props.options}
            components={{ DropdownIndicator, IndicatorSeparator: () => null }}
            placeholder="Select"
            styles={customStyles}
            theme={customTheme}
            onChange={selectionChange}
        />
    );
}

export default Dropdown;
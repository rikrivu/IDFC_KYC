import './VerificationTable.scss';
import { useCallback, useEffect, useState } from 'react';

// Import Models
import { ClassValue } from 'classnames/types';
import { VerificationOption } from '../../shared/models/verification-models';
import { KYCVerificationApi, SecurityQuestionApi, VerificationOptionsApi } from '../../shared/models/api-models';

import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { ModalProvider } from '../Modal/ModalContext';

// Import Components
import Dropdown from '../Dropdown/Dropdown';
import ImageVideoModal from '../ImageVideoModal/ImageVideoModal';

const dummyImageUrl = 'https://image.shutterstock.com/image-vector/anonymous-generic-user-icons-vector-260nw-1735706642.jpg';

function VerificationTable (props: {data: KYCVerificationApi, options: VerificationOptionsApi}) {

    // Create structure for Verification table from API response data
    const mapOptions = useCallback((options: VerificationOptionsApi): VerificationOption[] => {
        return Object.keys(options).map((key: string) => {
            return {
                value: key,
                label: props.options[key as keyof VerificationOptionsApi]
            };
        })
    }, [props.options]);

    const [options, setOptions] = useState<VerificationOption[]>(mapOptions(props.options));
    const tableHeaderClass: ClassValue = classNames({
        'table-row': true,
        'header-row': true
    });

    // console.log('Modal Details', useContext<UseModal | null>(ModalContext));
    // const { handleModal }: UseModal = useContext<UseModal>(ModalContext) as UseModal;

    const handleSelectionChange = (change: any, id: number) => {
        console.log('Change from Parent', change, id);
    }

    useEffect(() => {
        setOptions(mapOptions(props.options));
    }, [mapOptions, props.options]);

    return (
        <div>
            <div className={tableHeaderClass}>
                <div className="sec-ques-col">Security Questions</div>
                <div className="results-col">Results</div>
                <div className="yes-no-col">Agent</div>
                <div className="yes-no-col">AI Engine</div>
                <div className="auditor-col">Auditor</div>
            </div>
            {
                props?.data?.security_question?.length ?
                props.data.security_question.map((ques: SecurityQuestionApi, index: number) => {

                    const tableRowClass: ClassValue = classNames({
                        'table-row': true,
                        'odd-row': !(index % 2),
                        'even-row': (index % 2)
                    });

                    return (
                        <div key={index} className={tableRowClass}>

                            <div className="sec-ques-col">{ques.question}</div>

                            <div className="results-col">
                                <ModalProvider showClearModal={true}>
                                    <ImageVideoModal type={ques.type} source={dummyImageUrl} />
                                </ModalProvider>
                            </div>

                            <div className="yes-no-col">
                                {
                                    ques.agent_input ?
                                    <FontAwesomeIcon className="green-icon" icon={faCheck} />
                                    : <FontAwesomeIcon className="red-icon" icon={faTimes} />
                                }
                            </div>

                            <div className="yes-no-col">
                                {
                                    ques.ai_engine_input ?
                                    <FontAwesomeIcon className="green-icon" icon={faCheck} />
                                    : <FontAwesomeIcon className="red-icon" icon={faTimes} />
                                }
                            </div>

                            <div className="auditor-col">
                                <ModalProvider showClearModal={false}>
                                    <Dropdown
                                        id={ques.question_id}
                                        options={options}
                                        handleSelectionChange={handleSelectionChange}
                                    />
                                </ModalProvider>
                            </div>

                        </div>
                    );
                })
                : null
            }
        </div>
    );
}

export default VerificationTable;
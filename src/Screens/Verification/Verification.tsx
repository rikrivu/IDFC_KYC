import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Verification.scss';

// Import Services
import * as dataService from '../../shared/services/data-service';

// Import Components
import VerificationTopPanel from '../../Components/VerificationTopPanel/VerificationTopPanel';
import VerificationTable from '../../Components/VerificationTable/VerificationTable';

// Import Models
import { KYCVerificationApi, VerificationOptionsApi } from '../../shared/models/api-models';
import { ModalProvider } from '../../Components/Modal/ModalContext';

function Verification () {

    const [verificationData, setVerificationData] = useState<KYCVerificationApi | null>(null);  // Complete Data for a KYC
    const [optionsData, setOptionsData] = useState<VerificationOptionsApi | null>(null);        // Auditor Column Dropdown Options

    const { id } = useParams<{id: string}>();
    // console.log('Id', id);

    // Trigger API calls everytime the ID changes ie. everytime navigation to verification occurs
    useEffect(() => {
        Promise.all([
            dataService.getVerificationData(id),
            dataService.getVerificationOptionsData()
        ]).then(([data, options]: [KYCVerificationApi, VerificationOptionsApi]) => {
            // console.log('VerificationData', data);
            // console.log('Options', options);
            setVerificationData(data);
            setOptionsData(options);
        });
    }, [id]);

    return (
        verificationData && optionsData ?
        <React.Fragment>
            <ModalProvider showClearModal={false}>
                <VerificationTopPanel id={id} name={verificationData.kyc_name} />
            </ModalProvider>
            <VerificationTable data={verificationData} options={optionsData} />
        </React.Fragment>
        : null
    );
}

export default Verification;
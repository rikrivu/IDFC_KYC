import './KYCStatusCell.scss';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Local Imports
import { toTitleCase } from '../../shared/utils/formatters';

function KYCStatusCell (props: any) {

    const [displayName, setDisplayName] = useState<string>(props.value);

    const hoverOn = (event: React.MouseEvent) => {
        setDisplayName('View');
    }

    const hoverOff = (event: React.MouseEvent) => {
        setDisplayName(props.value);
    }

    // console.log('Status Cell', props);

    return (
        <React.Fragment>
            {
                props.value === 'OPEN' &&
                <button type="button" className="open-btn">
                    <Link to={`/verification/${props.data.kyc_id}`}>{toTitleCase(props.value)}</Link>
                </button>
            }
            {
                props.value === 'CLOSE' &&
                <button type="button" className="view-btn"
                    onMouseEnter={hoverOn}
                    onMouseLeave={hoverOff}>
                    <Link to={`/verification/${props.data.kyc_id}`}>{toTitleCase(displayName)}</Link>
                </button>
            }
        </React.Fragment>
    );
}

export default KYCStatusCell;
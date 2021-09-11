import  './SortableHeaders.scss';
import React from 'react';

// 3rd Party Libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import { ClassValue } from 'classnames/types';

function SortableHeaders (props: any) {

    // console.log('HeaderPrps', props, props.sortable);
    const btnClass: ClassValue = classNames({
        'header-btn': true,
        'sort-btn': props.sortable
    });

    return (
        <button type="button" className={btnClass} onClick={() => {props.sort(props.displayName)}}>
            <div className="col-title">{props.displayName}</div>
            {
                props.sortable ? 
                <div className="sort-icons">
                    {
                        props.sortState.criteria !== props.displayName ?
                        <React.Fragment>
                            <FontAwesomeIcon className="sortIcon" icon={faCaretDown} />
                        </React.Fragment>
                        : null
                    }
                    {
                        props.sortState.criteria === props.displayName && (['asc', 'desc'].includes(props.sortState.state)) ?
                        <FontAwesomeIcon className="sortIcon" icon={faCaretUp} />
                        : null
                    }
                    {
                        props.sortState.criteria === props.displayName && (['desc', 'unsort'].includes(props.sortState.state)) ?
                        <FontAwesomeIcon className="sortIcon" icon={faCaretDown} />
                        : null
                    }
                </div>
                : null
            }
        </button>
    );
}

export default SortableHeaders;
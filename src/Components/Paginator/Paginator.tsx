import './Paginator.scss';

// 3rd Party Libraries
import ReactPaginate from 'react-paginate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

// Import Models
import { SelectedPage } from '../../shared/models/paginator-models';

function Paginator (props: {pageSize: number, changePage: Function}) {

    const previousButton: JSX.Element = (
        <button type="button" className="paginator-nav-btn">
            <FontAwesomeIcon className="paginator-icon" icon={faAngleLeft} />
        </button>
    );

    const nextButton: JSX.Element = (
        <button type="button" className="paginator-nav-btn">
            <FontAwesomeIcon className="paginator-icon" icon={faAngleRight} />
        </button>
    );

    return (        
        <ReactPaginate
            pageCount={props.pageSize}
            pageRangeDisplayed={4}
            marginPagesDisplayed={0}
            initialPage={0}
            previousLabel={previousButton}
            nextLabel={nextButton}
            containerClassName="paginator-container"
            breakClassName="page-link"
            pageLinkClassName="page-link"
            activeClassName="page-link-selected"
            onPageChange={(selectedPage: SelectedPage) => {props.changePage(selectedPage)}}
        ></ReactPaginate>
    );
}

export default Paginator;
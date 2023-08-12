import ReactPaginate from 'react-paginate';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentPage } from '../../redux/features/filter/filterSlice';
import { selectFilter } from '../../redux/features/filter/filterSelectors';
import styles from './Pagination.module.scss';

type PaginationProps = {
    items: number;
    itemsPerPage: number;
};

const Pagination: React.FC<PaginationProps> = ({ items, itemsPerPage }) => {
    const { currentPage } = useSelector(selectFilter);
    const dispatch = useDispatch();
    const pageCount = Math.ceil(items / itemsPerPage);

    const handlePageChange = (e: { selected: number }) => {
        dispatch(setCurrentPage(e.selected + 1));
    };

    return (
        <div className={styles.pagination}>
            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                forcePage={currentPage - 1}
                onPageChange={handlePageChange}
                pageRangeDisplayed={itemsPerPage}
                pageCount={pageCount}
                previousLabel="<"
                renderOnZeroPageCount={null}
                containerClassName="pagination"
                pageClassName="pagination__item"
                pageLinkClassName="pagination__link"
                previousClassName="pagination__item pagination__item--previous"
                previousLinkClassName="pagination__link pagination__link--previous"
                nextClassName="pagination__item pagination__item--next"
                nextLinkClassName="pagination__link pagination__link--next"
                activeClassName="pagination__item pagination__item--active"
                activeLinkClassName="pagination__link pagination__link--active"
                disabledClassName="pagination__item pagination__item--disabled"
                disabledLinkClassName="pagination__link pagination__link--disabled"
            />
        </div>
    );
};

export default Pagination;

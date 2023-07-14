import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';

const Pagination = ({ items, itemsPerPage, onChangePage }) => {
    const pageCount = Math.ceil(items / itemsPerPage);

    return (
        <div className={styles.pagination}>
            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={(event) => onChangePage(event.selected + 1)}
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

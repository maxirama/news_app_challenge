import { useSelector, useDispatch } from "react-redux";
import {
  setCurrentPage,
  setCurrentPageRange,
} from "../../features/pagination/paginationSlice";
import PageButton from "../PageButton";
import "./styles/index.css";

// TO DO: En la paginación, la página actual debería estar highlighteada.

const Pagination = () => {
  const dispatch = useDispatch();
  const totalResults = useSelector(
    (state: any) => state.news.newsData.totalResults
  );

  const currentPage = useSelector((state: any) => state.pagination.currentPage);

  const totalPages = Math.ceil(totalResults / 100);

  const handlePageClick = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  const renderPages = () => {
    let pages = [];
    const maxPages = 5;
    const startPage = parseInt(currentPage);
    const endPage = Math.min(startPage + maxPages - 1, totalPages);

    for (let i = startPage; i <= startPage + 4; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className="pagination-container">
      {renderPages().map((page) => {
        return <PageButton handleClick={handlePageClick} pageNumber={page} />;
      })}
    </div>
  );
};

export default Pagination;

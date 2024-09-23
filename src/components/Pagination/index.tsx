import { useSelector, useDispatch } from "react-redux";
import {
  setCurrentPage,
  setCurrentStartPage,
  setCurrentEndPage,
  setCurrentPageRange,
} from "../../features/pagination/paginationSlice";
import PageButton from "../PageButton";
import "./styles/index.css";
import { useEffect } from "react";
// TO DO: En la paginación, la página actual debería estar highlighteada.

const Pagination = () => {
  const dispatch = useDispatch();
  const totalResults = useSelector(
    (state: any) => state.news.newsData.totalResults
  );

  const { currentPage, currentStartPage, currentEndPage, currentPageRange } =
    useSelector((state: any) => state.pagination);

  useEffect(() => {
    setPageLimits(currentPage);
    _setCurrentPageRange();
  }, [currentPage]);

  const totalPages = Math.ceil(totalResults / 100);

  const setStartPage = (page: number) => {
    if (page - 2 >= 1) {
      dispatch(setCurrentStartPage(page));
    } else {
      dispatch(setCurrentStartPage(1));
    }
  };

  const setEndPage = (page: number) => {
    if (page + 2 > totalPages) {
      dispatch(setCurrentEndPage(totalPages));
    } else {
      dispatch(setCurrentEndPage(page));
    }
  };

  const setPageLimits = (page: number) => {
    setStartPage(page);
    setEndPage(page);
  };

  const _setCurrentPageRange = () => {
    let pages = [];
    for (let i = currentStartPage; i <= currentEndPage; i += 1) {
      pages.push(i);
    }
    dispatch(setCurrentPageRange(pages));
  };

  const handlePageClick = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  return (
    <div className="pagination-container">
      {currentPageRange.map((page: any) => {
        return <PageButton handleClick={handlePageClick} pageNumber={page} />;
      })}
    </div>
  );
};

export default Pagination;

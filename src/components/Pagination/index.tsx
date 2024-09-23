import { useSelector, useDispatch } from "react-redux";
import {
  setStartPage,
  setEndPage,
  getTotalPages,
  setPageLimits,
  _setCurrentPageRange,
  handlePageClick,
} from "./utils";
import PageButton from "../PageButton";
import "./styles/index.css";
import { useEffect } from "react";

const Pagination = () => {
  const dispatch = useDispatch();
  const { newsData } = useSelector((state: any) => state.news);
  const totalPages = getTotalPages(newsData.totalResults);

  const { currentPage, currentPageRange, currentStartPage, currentEndPage } =
    useSelector((state: any) => state.pagination);

  useEffect(() => {
    setStartPage(1, dispatch);
    setEndPage(currentPage, totalPages, dispatch);
  }, [newsData.totalResults]);

  useEffect(() => {
    setPageLimits(currentPage, totalPages, dispatch);
    _setCurrentPageRange(currentStartPage, currentEndPage, dispatch);
  }, [currentPage]);

  return (
    <div className="pagination-container">
      {currentPageRange.map((page: any) => {
        return <PageButton handleClick={handlePageClick} pageNumber={page} />;
      })}
    </div>
  );
};

export default Pagination;

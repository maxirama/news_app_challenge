import { useSelector, useDispatch } from "react-redux";
import { getTotalPages, _setCurrentPageRange, handlePageClick } from "./utils";
import PageButton from "../PageButton";
import "./styles/index.css";
import { useEffect } from "react";

const Pagination = () => {
  const dispatch = useDispatch();
  const { newsData } = useSelector((state: any) => state.news);
  const totalPages = getTotalPages(newsData.totalResults);

  const { currentPage, currentPageRange, currentStartPage, currentEndPage } =
    useSelector((state: any) => state.pagination);

  return (
    <div className="pagination-container">
      {currentPageRange.map((page: any) => {
        return <PageButton handleClick={handlePageClick} pageNumber={page} />;
      })}
    </div>
  );
};

export default Pagination;

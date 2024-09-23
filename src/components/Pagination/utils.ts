import {
  setCurrentPage,
  setCurrentPageRange,
} from "../../features/pagination/paginationSlice";

const getTotalPages = (page: number) => {
  return Math.ceil(page / 100);
};

const setStartPage = (page: number) => {
  if (page - 2 >= 1) {
    return page;
  } else {
    return 1;
  }
};

const setEndPage = (page: number, totalPages: number) => {
  if (page + 2 > totalPages) {
    return totalPages;
  } else {
    return page;
  }
};

// const setPageLimits = (page: number, totalPages: number, dispatch: any) => {
//   setStartPage(page, dispatch);
//   setEndPage(page, totalPages, dispatch);
// };

const _setCurrentPageRange = (
  startPage: number,
  endPage: number,
  dispatch: any
) => {
  let pages = [];
  for (let i = startPage; i <= endPage; i += 1) {
    pages.push(i);
  }
  dispatch(setCurrentPageRange(pages));
};

const handlePageClick = (page: number, dispatch: any) => {
  dispatch(setCurrentPage(page));
};

export {
  setStartPage,
  setEndPage,
//   setPageLimits,
  _setCurrentPageRange,
  getTotalPages,
  handlePageClick,
};

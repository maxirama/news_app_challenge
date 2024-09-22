import { useSelector } from "react-redux";
import PageButton from "../PageButton";
import "./styles/index.css";

const Pagination = () => {
  const totalResults = useSelector(
    (state: any) => state.news.newsData.totalResults
  );

  const totalPages = Math.ceil(totalResults / 100);

  const renderPages = () => {
    let p = 1;
    let pages = [];
    while (p <= 4) {
      pages.push(p);
      p += 1;
      if (p === 5 && totalResults > p) {
        pages.push(totalResults);
      }
    }

    return pages;
  };

  console.log(totalPages);
  console.log(renderPages());

  return (
    <div className="pagination-container">
      {renderPages().map((page) => {
        return <PageButton pageNumber={page} />;
      })}
    </div>
  );
};

export default Pagination;

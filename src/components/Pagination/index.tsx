import { useSelector } from "react-redux";
import PageButton from "../PageButton";

const Pagination = () => {
  const totalResults = useSelector(
    (state: any) => state.news.newsData.totalResults
  );

  const totalPages = Math.ceil(totalResults / 100);

  const renderPages = () => {
    let p = 1;
    let pages = [];
    while (p <= totalPages) {
      pages.push(p);
      p += 1;
    }

    return pages;
  };

  console.log(totalPages);
  console.log(renderPages());

  return (
    <div>
      {renderPages().map((page) => {
        return <PageButton pageNumber={page} />;
      })}
    </div>
  );
};

export default Pagination;

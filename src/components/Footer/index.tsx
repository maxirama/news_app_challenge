import React from "react";
import Pagination from "../Pagination";
import "./styles/index.css";
import { useSelector } from "react-redux";

const Footer = () => {
  const totalResults = useSelector(
    (state: any) => state.news.newsData.totalResults
  );
  return (
    <footer>
      {totalResults !== 0 && (
        <div className="pagination-wrapper">
          <Pagination />
        </div>
      )}
    </footer>
  );
};

export default Footer;

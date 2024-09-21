import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useSelector } from "react-redux";
import Loader from "../../components/Loader";
import NewsCard from "../../components/NewsCard";
import { IArticle } from "../../types";
import ErrorCard from "../../components/ErrorCard";
import NoResultsCard from "../../components/NoResultsCard";
import DateInput from "../../components/DateInput";

const Home = () => {
  const newsData = useSelector((state: any) => state.news.newsData);
  const noResultsObtained = useSelector(
    (state: any) => state.news.noResultsObtained
  );
  return (
    <div>
      <Header />
      <div className="home-container">
        <DateInput />
        {noResultsObtained === true && <NoResultsCard />}
        {newsData.status === "error" && <ErrorCard />}
        {newsData.status === "loading" && (
          <div className="loader-container">
            <Loader />
          </div>
        )}
        <div className="grid-container">
          {newsData.articles.map((article: IArticle) => {
            return <NewsCard article={article} />;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;

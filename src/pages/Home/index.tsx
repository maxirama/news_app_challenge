import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useSelector } from "react-redux";
import NewsCard from "../../components/NewsCard";
import { IArticle } from "../../types";

const Home = () => {
  const newsData = useSelector((state: any) => state.news.newsData);
  console.log("Home new data.");
  console.log(newsData);
  return (
    <div>
      <Header />
      {newsData.articles.map((article: IArticle) => {
        return <NewsCard article={article} />;
      })}
      <Footer />
    </div>
  );
};

export default Home;

import "./styles/index.css";
interface IPageButton {
  pageNumber: number;
}

const PageButton: React.FC<IPageButton> = ({ pageNumber }) => {
  return <button className="page-button">{pageNumber}</button>;
};

export default PageButton;

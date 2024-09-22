import "./styles/index.css";
interface IPageButton {
  pageNumber: number;
  handleClick: any;
}

const PageButton: React.FC<IPageButton> = ({ pageNumber, handleClick }) => {
  const _handleClick = (e: any) => {
    console.log(e.target.value);
    handleClick(e.target.value);
  };
  return (
    <button className="page-button" onClick={_handleClick} value={pageNumber}>
      {pageNumber}
    </button>
  );
};

export default PageButton;

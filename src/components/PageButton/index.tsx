import "./styles/index.css";
import { useDispatch } from "react-redux";
interface IPageButton {
  pageNumber: number;
  handleClick: any;
}

const PageButton: React.FC<IPageButton> = ({ pageNumber, handleClick }) => {
  const dispatch = useDispatch();
  const _handleClick = (e: any) => {
    console.log(e.target.value);
    handleClick(e.target.value, dispatch);
  };
  return (
    <button className="page-button" onClick={_handleClick} value={pageNumber}>
      {pageNumber}
    </button>
  );
};

export default PageButton;

interface IPageButton {
  pageNumber: number;
}

const PageButton: React.FC<IPageButton> = ({ pageNumber }) => {
  return <button>{pageNumber}</button>;
};

export default PageButton;

import "./styles/index.css";

interface IconButtonProps {
  icon: any;
  handleClick: any;
}

const IconButton: React.FC<IconButtonProps> = ({ icon, handleClick }) => {
  return (
    <button className="icon-button" onClick={handleClick}>
      {icon}
    </button>
  );
};

export default IconButton;

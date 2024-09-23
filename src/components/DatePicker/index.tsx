import "./styles/index.css";

interface IDaterPickerProps {
  label: string;
}

const DatePicker: React.FC<IDaterPickerProps> = ({ label }) => {
  return (
    <div>
      <label>{label}</label>
      <input type="date" />
    </div>
  );
};

export default DatePicker;

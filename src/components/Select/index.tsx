const languages = [
  { code: "en", name: "English" },
  { code: "es", name: "Spanish" },
];

const SelectLanguage: React.FC = () => {
  return (
    <select>
      {languages.map((language) => (
        <option value={language.code}>{language.name}</option>
      ))}
    </select>
  );
};

export default SelectLanguage;

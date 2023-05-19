import { Box, Button, TextField } from "@material-ui/core";
import "./style.css";
import { SearchBarProps } from "../../types";

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const countryCode = (event.target as HTMLFormElement).countryCode.value;
    onSearch(countryCode);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box className="search-container">
        <TextField
          name="countryCode"
          label="Search by Country code"
          className="search-field"
        />
        <Button variant="contained" color="primary" type="submit">
          Search
        </Button>
      </Box>
    </form>
  );
};

export default SearchBar;

import SearchIcon from "@mui/icons-material/Search";
import { IconButton, InputBase, Paper } from "@mui/material";

const SearchBar = ({ search, submit, setSearch }) => (
  <Paper component="form" sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}>
    <InputBase
      sx={{ ml: 1, flex: 1 }}
      placeholder="Search Google Maps"
      inputProps={{ "aria-label": "search google maps" }}
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
    <IconButton
      type="button"
      sx={{ p: "10px" }}
      aria-label="search"
      onClick={(e) => submit(e.target.value)}
    >
      <SearchIcon />
    </IconButton>
  </Paper>
);

export default SearchBar;

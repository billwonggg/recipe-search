import SearchIcon from "@mui/icons-material/Search";
import { IconButton, InputBase, Paper } from "@mui/material";

const SearchBar = ({ search, submit, setSearch }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      submit(e);
    }
  };

  return (
    <Paper
      component="form"
      sx={{
        m: "10px",
        p: "3px 7px",
        display: "flex",
        alignItems: "center",
        width: "90%",
        maxWidth: "600px",
        borderRadius: "15px",
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search your favourite recipe"
        inputProps={{ "aria-label": "Search your favourite recipe" }}
        value={search}
        onKeyDown={handleKeyDown}
        onChange={(e) => setSearch(e.target.value)}
      />
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search" onClick={submit}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;

import './search-box.styles.css';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const SearchBox = ({ onChangeHandler, onClickHandler }) => (
  <div className="search-box">
    <TextField label="Write a film" variant="outlined" onChange={onChangeHandler}/>
    <Button variant="contained" onClick={onClickHandler}>Search</Button>
  </div>
);

export default SearchBox;

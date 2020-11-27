import { Button, FormControl, InputAdornment, OutlinedInput } from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';

const SearchTab =  ({searchTerm, onChange, onClick}) => {
  const handleKeypress = e => {
    if (e.nativeEvent.keyCode === 13) {
      onClick(e);
    }
  };

  return(
    <FormControl fullWidth variant='outlined' className='search'>
      <OutlinedInput onKeyPress={handleKeypress} startAdornment={<InputAdornment position='start'><SearchOutlined /></InputAdornment>} placeholder='Search for your next country of travel...' value={searchTerm} onChange={onChange} />
      <Button size='large' className='btn' variant="contained" color="primary" onClick={onClick}>Search</Button>
    </FormControl>
  )
};

export default SearchTab;
import { Button, FormControl, Input, InputAdornment } from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';

const SearchTab =  ({searchTerm, onChange}) => {
  return(
    <FormControl variant='outlined' className='search'>
      <Input startAdornment={<InputAdornment position='start'><SearchOutlined /></InputAdornment>} placeholder='Search for your next country of travel...' value={searchTerm} onChange={onChange} />
      <Button size='small' variant="contained" color="primary">Search</Button>
    </FormControl>
  )
};

export default SearchTab;
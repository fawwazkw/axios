import React from 'react';
import { TextField } from '@material-ui/core';

const Search = ({ searchQuery, setSearchQuery }) => {
  return (
    <TextField
    autoFocus
    margin="dense"
    fullWidth
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
    style={{ marginTop: '20px', borderRadius: '20px', display: 'flex', alignItems: 'left', justifyContent: 'center' , width: '300px', height: '150px', margin:'auto'}}
    variant="outlined"
    outlined={true}
    placeholder="Search"
    />

  );
};

export default Search;

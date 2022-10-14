import React from 'react'
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from '@mui/material';

function Search() {
  return (
    <Box style={{ margin: "5%" }}>
      <TextField id="outlined-basic" label="Movie Title" variant="outlined" />;
      <Button style={{height:"50px"}} variant="contained">
        Search
      </Button>
    </Box>
  );
 }

export default Search
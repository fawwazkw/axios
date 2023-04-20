import React, { useState } from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddUserDialog from './AddUserDialog';
import About from '../../page/About';
import Hobby from '../../page/Hobby';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export const Header = ({ users, onAddUser }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleSaveUser = (user) => {
    onAddUser(user);
    setIsDialogOpen(false);
  };
let history = useHistory("");
  return (
    
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Button  color="inherit">My App</Button>
              <Button  color="inherit">About</Button>
              <Button  color="inherit">Hobby</Button>
            </Typography>
            <Button color="inherit" onClick={() => setIsDialogOpen(true)}>Add User</Button>
          </Toolbar>
        </AppBar>
        
        <AddUserDialog
          open={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          onSave={handleSaveUser}
        />
      </Box>
    
  );
};

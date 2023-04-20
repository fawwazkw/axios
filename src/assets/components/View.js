import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@material-ui/core';

const View = ({ open, user, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{user.name}</DialogTitle>
      <DialogContent>
        <div>
          <div>
            <strong>Address:</strong> {user.address}
          </div>
          <div>
            <strong>Hobby:</strong> {user.hobby}
          </div>
        </div>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={onClose}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default View;

import React, { useState } from 'react';
import { Header } from '../assets/components/Header';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@material-ui/core';
import Search from '../assets/components/Search';
import View from '../assets/components/View';

const Landingpage = () => {
  const [data, setData] = useState([]);
  const [editOpen, setEditOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [hobby, setHobby] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewOpen, setViewOpen] = useState(false);
  const [selectedViewUser, setSelectedViewUser] = useState({});

  const handleSaveUser = (user) => {
    setData([...data, user]);
  };

  const handleEditUser = (user) => {
    setSelectedUser(user);
    setName(user.name);
    setAddress(user.address);
    setHobby(user.hobby);
    setEditOpen(true);
  };

  const handleEditSave = () => {
    if (!name || !address || !hobby) {
      alert('Please fill in all fields');
      return;
    }

    const updatedUser = { ...selectedUser, name, address, hobby };
    const updatedData = data.map((item) => (item.name === selectedUser.name ? updatedUser : item));
    setData(updatedData);
    setEditOpen(false);
  };


  const handleEditCancel = () => {
    setEditOpen(false);
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleViewUser = (user) => {
    setSelectedViewUser(user);
    setViewOpen(true);
  };

  const handleViewClose = () => {
    setViewOpen(false);
  };

  return (
    <div>
      <Header onAddUser={handleSaveUser} />
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <table style={{ border: '1px solid black', margin: 'auto', width: '300px', height: '150px' }}>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.name}>
              <td colSpan="2" >
                <span style={{ fontSize: '2rem' }}>{item.name}</span><br />
                {item.address}
              </td>
              <td style={{ fontSize: '1.5rem' }}>
                {item.hobby}
                <br />
                <Button variant="contained" color="secondary" onClick={() => handleViewUser(item)}>
                  View
                </Button>
                <Button variant="contained" color="primary" onClick={() => handleEditUser(item)}>
                  Edit
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>  
      <Dialog open={editOpen} onClose={handleEditCancel}>
        <DialogTitle>Edit User</DialogTitle>
        <DialogContent>
          <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth />
          <TextField label="Address" value={address} onChange={(e) => setAddress(e.target.value)} fullWidth />
          <TextField label="Hobby" value={hobby} onChange={(e) => setHobby(e.target.value)} fullWidth />
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleEditCancel}>
            Cancel
          </Button>
          <Button variant="contained" color="primary" onClick={handleEditSave}>
            Save
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={viewOpen} onClose={handleViewClose}>
        <DialogTitle>User View</DialogTitle>
        <DialogContent>
          <div>
            <p><strong>Name: </strong>{selectedViewUser.name}</p>
            <p><strong>Address: </strong>{selectedViewUser.address}</p>
            <p><strong>Hobby: </strong>{selectedViewUser.hobby}</p>
          </div>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleViewClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Landingpage;

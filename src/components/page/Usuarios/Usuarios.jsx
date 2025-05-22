import { useEffect, useState } from "react";
import TableUser from '../../TableUser/TableUser';
import ModalUser from '../../ModalUser/ModalUser';
import { Typography, Button } from '@mui/material';
import { useUsuarios } from "../../../hooks/useUsuarios";

function Usuarios() {
  const {
    usersList,
    loading,
    error,
    fetchUsuarios,
    removeUsuario,
    addUsuario, 
    editUsuario
  } = useUsuarios();
  const [open, setOpen] = useState(false);
  const [action, setAction] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  
  const handleOnClickAdd = () => {
    setSelectedUser(null);
    setAction('Agregar');
    setOpen(true);
  };

  const handleDelete = async (id) => {
   await removeUsuario(id);
  //  fetchUsuarios(); 
  };

  const handleEdit = async (user) => {
     setSelectedUser(user);
     setOpen(true);
     setAction('Modificar');
  };

  const handleCloseModal = () => {
    setOpen(false);
    setSelectedUser(null);
 };

  useEffect(() => {
    fetchUsuarios();
  }, [fetchUsuarios]);

  return (
    <>
      <div style={{ display: 'flex', width: '850px', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <Typography variant="h4" gutterBottom>
          Listado de usuarios
        </Typography>
        <Button variant="contained" color="primary" onClick={handleOnClickAdd}>
          Agregar Nuevo Usuario
        </Button>
      </div>
      {loading && <div style={{ marginTop: '120px' }}>Cargando...</div>}
      {error && <div style={{ color: 'red' }}>Error: {error}</div>}
      {!loading && !error && <TableUser usersList={usersList} onDelete={handleDelete} onEdit={handleEdit} />}
      <ModalUser open={open} onClose={handleCloseModal} action={action} user={selectedUser} addUsuario={addUsuario} editUsuario={editUsuario}/>
    </>
  );
}

export default Usuarios;
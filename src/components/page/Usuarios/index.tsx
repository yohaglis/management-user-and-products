/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from "react";
import TableUser from '../Usuarios/Components/TableUser';
import ModalUser from '../Usuarios/Components/ModalUser';
import ModalError from '../../ModalError';
import { Typography, Button } from '@mui/material';
import { useUsuarios } from "../../../hooks/useUsuarios";
import ReportProblemIcon from '@mui/icons-material/ReportProblem';

function Usuarios() {
  const {
    usuarios,
    usuariosLoading,
    usuariosError,
    usuarioAddError,
    usuarioUpdateError,
    usuarioRemoveError,
    getUsuarios,
    removeUsuario,
    addUsuario,
    updateUsuario
  } = useUsuarios();
  const [open, setOpen] = useState(false);
  const [action, setAction] = useState('');
  const [errorOpen, setErrorOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  
  const handleOnClickAdd = () => {
    setSelectedUser(null);
    setAction('Agregar');
    setOpen(true);
  };

  const handleDelete = async (id) => {
   await removeUsuario(id); 
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

  const handleCloseErrorModal = () => {
    setErrorOpen(false);
     getUsuarios();
    setSelectedUser(null);
  };

  useEffect(() => {
   getUsuarios();
  }, [getUsuarios]);

  useEffect(() => {
  setErrorOpen(!!usuarioAddError || !!usuarioUpdateError || !!usuarioRemoveError);
  }, [usuarioAddError, usuarioUpdateError, usuarioRemoveError]);

  return (
    <>      
      {usuariosLoading && <div style={{ marginTop: '120px' }}>Cargando usuarios...</div>}
      {usuariosError && <div style={{ color: 'red' }}> <ReportProblemIcon color='error' sx={{ marginRight: 1 }}/>{usuariosError}</div>}
      {!usuariosLoading && !usuariosError && 
      <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <Typography variant="h4" gutterBottom>
            Listado de usuarios
          </Typography>
          <Button variant="contained" color="primary" onClick={handleOnClickAdd}>
            Agregar Nuevo Usuario
          </Button>
        </div>
        <TableUser usuarios={usuarios} onDelete={handleDelete} onEdit={handleEdit} />
      </>}
      <ModalUser open={open} onClose={handleCloseModal} action={action} user={selectedUser} addUsuario={addUsuario} updateUsuario={updateUsuario}/>
      <ModalError  open={errorOpen}  onClose={handleCloseErrorModal}  message={usuarioAddError || usuarioUpdateError || usuarioRemoveError} />
    </>
  );
}

export default Usuarios;
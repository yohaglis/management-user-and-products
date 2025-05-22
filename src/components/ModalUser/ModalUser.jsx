import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function ModalUser({ open, onClose, action, user, addUsuario, editUsuario }) {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());

    if (action === "Agregar") {
      await addUsuario(formJson);
    } else if (action === "Modificar") {
      await editUsuario(user.id, formJson);
    }
    onClose();
  };
  
  return (
    <>
     <Dialog
        open={open}
        onClose={onClose}
        slotProps={{
           paper: {
          component: 'form',
          onSubmit: handleSubmit,
        },
        }}
      >
        <DialogTitle>{action} Usuario</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Para agregar o modificar un usuario, por favor ingrese la información requerida.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="name"
            label="Nombre"
            type="text"           
            fullWidth
            variant="standard"
            defaultValue={user ? user.name : ""}
          />
          <TextField           
            required
            margin="dense"
            id="username"
            name="username"
            label="Apellido"
            type="text"
            fullWidth
            variant="standard"
            defaultValue={user ? user.username : ""}
          />
          <TextField           
            required
            margin="dense"
            id="name"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            defaultValue={user ? user.email : ""}
          />
          <TextField         
            required
            margin="dense"
            id="name"
            name="phone"
            label="Teléfono"
            type="text"
            fullWidth
            variant="standard"
            defaultValue={user ? user.phone : ""}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancelar</Button>
          <Button type="submit">Guardar</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

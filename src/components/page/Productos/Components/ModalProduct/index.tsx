/* eslint-disable react/react-in-jsx-scope */
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

interface Producto {
  id?: string | number;
  image?: string;
  title?: string;
  price?: string | number;
  category?: string;
}

interface ModalProductProps {
  open: boolean;
  onClose: () => void;
  action: string;
  producto?: Producto | null;
  addProducto: (data: Producto) => Promise<void>;
  updateProducto: (id: string | number, data: Producto) => Promise<void>;
}

export default function ModalProduct({ open, onClose, action, producto, addProducto, updateProducto }: ModalProductProps) {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());

    if (action === "Agregar") {
      await addProducto(formJson);
      onClose();
    } else if (action === "Modificar") {
      if (producto && producto.id !== undefined) {
        await updateProducto(producto.id, formJson);
        onClose();
      }
    }
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
        <DialogTitle>{action} Producto</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Para agregar o modificar un producto, por favor ingrese la información requerida.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="image"
            name="image"
            label="URL de la Imagen"
            type="text"
            fullWidth
            variant="standard"
            defaultValue={producto ? producto.image : ""}
          />
          <TextField           
            required
            margin="dense"
            id="title"
            name="title"
            label="Nombre del Producto"
            type="text"
            fullWidth
            variant="standard"
            defaultValue={producto ? producto.title : ""}
          />
          <TextField           
            required
            margin="dense"
            id="price"
            name="price"
            label="Precio"
            type="text"
            fullWidth
            variant="standard"
            defaultValue={producto ? producto.price : ""}
          />
          <TextField         
            required
            margin="dense"
            id="category"
            name="category"
            label="Categoría"
            type="text"
            fullWidth
            variant="standard"
            defaultValue={producto ? producto.category : ""}
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

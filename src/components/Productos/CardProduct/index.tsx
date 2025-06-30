/* eslint-disable react/react-in-jsx-scope */
import styles from './styles.module.scss';
import {Card, CardContent, Typography} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit'; 

interface Producto {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  // description?: string; 
}

interface CardProductProps {
  producto: Producto;
  onDelete: (id: number) => void;
  onEdit: (producto: Producto) => void;
}

function CardProduct({ producto, onDelete, onEdit }: CardProductProps) {
  const handleOnClickDelete = (id: number) => {
    onDelete(id);
  }
  const handleOnClickEdit = (producto: Producto) => {
    onEdit(producto);
  }
  return (
    <div className={styles.card}>
      <Card variant="outlined" sx={{ maxWidth: 346 }}>
        <CardContent>
          <div className={styles.actions}>
            <EditIcon onClick={() => handleOnClickEdit(producto)}  sx={{ marginLeft: 1, marginTop: 2, cursor: 'pointer' }}/>
            <DeleteIcon onClick={() => handleOnClickDelete(producto.id)}  sx={{ marginLeft: 1, marginTop: 2, cursor: 'pointer' }}/>   
          </div>
          <img src={producto.image} alt={producto.title} className={styles.image} />
          <Typography variant="h5" component="div" className={styles.title}>
            {producto.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ${producto.price}
          </Typography>
          {/* <Typography variant="textarea" color="text.secondary">
            {producto.description}
          </Typography> */}
          <Typography variant="body2" color="text.secondary">
            {producto.category}
          </Typography>          
        </CardContent>
      </Card>
    </div>
  )
}

export default CardProduct;

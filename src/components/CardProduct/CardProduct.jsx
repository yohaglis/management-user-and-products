import styles from './styles.module.scss'
import {Card, CardContent, Typography} from '@mui/material';

function CardProduct({ nombre, precio, descripcion }) {
  return (
    <div className={styles.card}>
      <Card variant="outlined" sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            {nombre}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {descripcion}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {precio}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default CardProduct;

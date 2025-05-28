import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function inicio() {
  const navigate = useNavigate();

  const handleClick = (action: string) => {
    navigate(`/${action}`);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h4" gutterBottom>
          ¡Bienvenido a nuestro sistema de gestión!
        </Typography>
        <Typography variant="body1" gutterBottom>
          Aquí podrás gestionar tus datos de manera eficiente y sencilla.
        </Typography>
        <div style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '20px' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src="src/assets/user.png" alt="" />
            <Button onClick={() => handleClick('usuarios')}>Usuarios</Button>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src="src/assets/descarga.png" alt="" />
            <Button onClick={() => handleClick('productos')}>Productos</Button>
          </Box>
        </div>
      </CardContent>
    </Card>
  )
}
export default inicio;

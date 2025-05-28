/* eslint-disable react/react-in-jsx-scope */
import Layout from '../Inicio/Components/Layout';
import { Card, CardContent, Typography } from '@mui/material';

function Inicio() {
  return (
    <Layout>    
       <Card>
          <CardContent>
            <Typography variant="h4" gutterBottom>
              ¡Bienvenido a nuestro sistema de gestión!
            </Typography>
            <Typography variant="body1" align='left'>
              Desde este aplicativo se pueden realizar las siguientes operaciones:
                <br /><br />
                <strong>Para usuarios:</strong>
                <br />
                <strong>Crear:</strong> Registrar nuevos usuarios en el sistema, incluyendo nombre, apellido, dirección de correo electrónico, etc.
                <br />
                <strong>Leer:</strong> Visualizar la lista de usuarios existentes, así como los detalles de cada usuario individual (nombre, correo, apellido, etc.).
                <br />
                <strong>Actualizar:</strong> Modificar la información de los usuarios, como el nombre, correo electrónico o contraseña, o cambiar su rol dentro del sistema.
                <br />
                <strong>Eliminar:</strong> Dar de baja usuarios del sistema, eliminando su información de la base de datos.
                <br /><br />
                <strong>Para productos:</strong>
                <br />
                <strong>Crear:</strong> Añadir nuevos productos al catálogo, incluyendo nombre, descripción, precio, etc.
                <br />
                <strong>Leer:</strong> Visualizar la lista de productos existentes y los detalles de cada producto individual.
                <br />
                <strong>Actualizar:</strong> Modificar la información de los productos, como el precio, descripción.
                <br />
                <strong>Eliminar:</strong> Dar de baja productos del catálogo, eliminando su información de la base de datos.
            </Typography>
          </CardContent>
        </Card> 
    </Layout>
  )
}
export default Inicio;

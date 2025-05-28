/* eslint-disable react/react-in-jsx-scope */
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit'; 

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}
interface TableUserProps {
  usuarios: User[];
  onDelete: (id: number) => void;
  onEdit: (user: User) => void;
}

function TableUser({ usuarios, onDelete, onEdit }: TableUserProps) {

  const handleOnClickDelete = (id: number) => {
    onDelete(id);
  }

  const handleOnClickEdit = (user) => {
    onEdit(user);
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 850 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Nombre</TableCell>
            <TableCell align="left">Apellido</TableCell>
            <TableCell align="left">Correo electrónico</TableCell>
            <TableCell align="left">Teléfono</TableCell>
            <TableCell align="center">Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {usuarios.map((user) => (
            <TableRow
              key={user.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">{user.name}</TableCell>
              <TableCell align="left">{user.username}</TableCell>
              <TableCell align="left">{user.email}</TableCell>
              <TableCell align="left">{user.phone}</TableCell>
              <TableCell align="center">
                <EditIcon color='primary' onClick={() => handleOnClickEdit(user)}  sx={{ marginLeft: 1, cursor: 'pointer' }}/>
                <DeleteIcon color='primary' onClick={() => handleOnClickDelete(user.id)}  sx={{ marginLeft: 1, cursor: 'pointer' }}/>               
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default TableUser;

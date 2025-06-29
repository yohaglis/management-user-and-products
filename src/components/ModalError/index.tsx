/* eslint-disable react/react-in-jsx-scope */
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';

interface ModalErrorProps {
  open: boolean;
  onClose: () => void;
  message: string;
}

export default function ModalError({ open, onClose, message }: ModalErrorProps) {
  const handleClose = () => {
    onClose();
  }  
  return (
    <>
     <Dialog
        open={open}
        onClose={onClose}
      >
        <DialogTitle><ReportProblemIcon color='error' sx={{ marginRight: 1 }}/>Error</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cerrar</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

        
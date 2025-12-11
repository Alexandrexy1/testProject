import {
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  Stack,
} from "@mui/material";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

interface Props {
  open: boolean;
  onClose: () => void;
  onCreate: (title: string) => void;
}

export function ModalTask({ open, onClose, onCreate }: Props) {
  const [title, setTitle] = useState("");
  const notify = () => toast("Wow so easy!");

  const handleSubmit = () => {
    onCreate(title);
    setTitle("");
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>

        <DialogTitle>Nova tarefa</DialogTitle>
      <DialogContent>
        <Stack spacing={2} mt={1}>
          <TextField
            label="Título"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
            />
          <Button variant="contained" onClick={handleSubmit}>
            Criar
          </Button>
        </Stack>
      </DialogContent>
    </Dialog>
  );
}

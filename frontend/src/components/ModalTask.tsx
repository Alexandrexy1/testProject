import {
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  Stack,
  Alert
} from "@mui/material";
import { useState, type FormEvent } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
  onCreate: (title: string) => void;
}

export function ModalTask({ open, onClose, onCreate }: Props) {
  const [title, setTitle] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    
    if (!title) {
      setShowAlert(true);
      return;
    }
    onCreate(title);
    setTitle("");
    setShowAlert(false);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <form action="POST" onSubmit={handleSubmit}>
        <DialogTitle>Nova tarefa</DialogTitle>
        <DialogContent>
          <Stack spacing={2} mt={1}>
            <TextField
              label="Título"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              fullWidth
              />
            <Button variant="contained" type="submit">
              Criar
            </Button>
          </Stack>
          {
            showAlert && (
                <Alert variant="outlined" severity="warning"
                  sx={{ marginTop: "16px", height: "44px", display: "flex", justifyContent: "center", alignItems: "center", '& .MuiAlert-message': {
                    margin: 0,
                    width: "100%",
                    marginRight: "24px",
                    textAlign: "center"
                  }, "& .MuiAlert-icon": {
                    width: "24px"
                  }}}>
                  Título não pode estar vazio
                </Alert>
            )
          }
        </DialogContent>
      </form>
    </Dialog>
  );
}

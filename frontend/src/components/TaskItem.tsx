import { Card, Checkbox, IconButton, Stack, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import { Edit } from "@mui/icons-material";

interface Props {
  id: number;
  title: string;
  completed: boolean;
  onToggle: () => void;
  onDelete: () => void;
}

export function TaskItem({ title, completed, onToggle, onDelete }: Props) {
  const [toggle, setToggle] = useState(false)
  return (
    <Card
      sx={{
        p: 2,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Stack direction="row" spacing={2}>
        <Checkbox
          checked={completed}
          sx={{ width: "50px", height: "50px" }}
          onChange={onToggle}
        />
        <Typography
          sx={{ textDecoration: completed ?? "none" }}
        >
          {title}
        </Typography>
      </Stack>
      <IconButton
        color="info"
        sx={{ width: "50px", height: "50px"}}
      >
        <Edit />
      </IconButton>
      <IconButton
        color="default"
        sx={{ width: "50px", height: "50px", color: "rgba(232, 73, 73, 1)" }}
        onClick={onDelete}
      >
        <DeleteIcon />
      </IconButton>
    </Card>
  );
}

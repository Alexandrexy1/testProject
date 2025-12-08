import { useEffect, useState } from "react";
import { Container, Fab, Grid, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { TaskItem } from "../components/TaskItem";
import { getTasks, createTask, toggleTask, deleteTask } from "../services/requests";
import { ModalTask } from "../components/ModalTask";
import { theme } from "../styles/theme";

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export function TodoPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [open, setOpen] = useState(false);

  const loadTasks = async () => {
    const res = await getTasks();
    setTasks((prev) => {
    const initial = prev.filter((t) => t.id === 1);
    return [...initial, ...res.data];
  });
  };

  useEffect(() => {
    loadTasks();
  }, []);




  return (
    <>
      <Container
        sx={{
          margin: 0,
          minWidth: "100%",
          height: "100vh",
          py: 4,
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Typography
          variant="h4"
          sx={{ color: "#fff" }}
          textAlign={"center"}
          fontWeight={700}
          mb={3}
        >
          Minhas Tarefas
        </Typography>

        <Grid container spacing={2}>
          {tasks.map((item) => (
            <Grid item xs={12} md={6} lg={4} key={item.id}>
              <TaskItem
                {...item}
                onToggle={() =>
                  setTasks(
                    (prev) =>
                      prev.map((t) => ({ ...t, completed: !item.completed })),
                  )
                }
                onDelete={() => deleteTask(item.id).then(loadTasks)}
              />
            </Grid>
          ))}
        </Grid>

        <Fab
          color="primary"
          sx={{ position: "fixed", bottom: 32, right: 32 }}
          onClick={() => setOpen(true)}
        >
          <AddIcon />
        </Fab>

        <ModalTask
          open={open}
          onClose={() => setOpen(false)}
          onCreate={(title) => {
            createTask(title);
            createTask(title).then(loadTasks);
          }}
        />
      </Container>
    </>
  );
}

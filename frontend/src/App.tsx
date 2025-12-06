import { ThemeProvider } from "@mui/material/styles";
import { TodoPage } from "./pages/TodoPage";
import { theme } from "./styles/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <TodoPage />
    </ThemeProvider>
  );
}

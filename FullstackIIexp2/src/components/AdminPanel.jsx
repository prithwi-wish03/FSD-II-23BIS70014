import { useState } from "react";
import {
  ThemeProvider,
  createTheme,
  AppBar,
  Toolbar,
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material";

function AdminPanel() {
  const [mode, setMode] = useState("light");

  const theme = createTheme({
    palette: { mode },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: "10px",
            padding: "10px 20px",
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar>
          <Button
            color="inherit"
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
          >
            Toggle {mode === "light" ? "Dark" : "Light"} Mode
          </Button>
        </Toolbar>
      </AppBar>

      <div style={{ padding: 20 }}>
        <Card>
          <CardContent>
            <Typography variant="h5">
              Admin Panel - {mode.toUpperCase()} Theme
            </Typography>
            <Typography>
              This panel uses ThemeProvider + custom styled component overrides.
            </Typography>
          </CardContent>
        </Card>
      </div>
    </ThemeProvider>
  );
}

export default AdminPanel;
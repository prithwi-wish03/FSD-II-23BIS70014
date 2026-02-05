import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  Grid,
  Card,
  CardContent,
} from "@mui/material";

function Dashboard() {
  const drawerWidth = 200;

  return (
    <div style={{ display: "flex" }}>
      <AppBar position="fixed" sx={{ zIndex: 2000 }}>
        <Toolbar>
          <Typography variant="h6">Dashboard</Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          "& .MuiDrawer-paper": { width: drawerWidth, boxSizing: "border-box" },
        }}
      >
        <Toolbar />
        <Typography sx={{ p: 2 }}>Menu</Typography>
      </Drawer>

      <main style={{ flexGrow: 1, padding: 20, marginTop: 80 }}>
        <Grid container spacing={2}>
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={item}>
              <Card>
                <CardContent>
                  <Typography variant="h6">Card {item}</Typography>
                  <Typography>This card adjusts based on screen width.</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </main>
    </div>
  );
}

export default Dashboard;
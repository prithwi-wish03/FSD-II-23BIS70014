import { Container, Grid, Typography, Button } from "@mui/material";

function LandingPage() {
  return (
    <Container sx={{ mt: 5 }}>
      <Grid container spacing={4} alignItems="center">

        <Grid item xs={12} md={6}>
          <Typography variant="h3" gutterBottom>
            Welcome to Our Responsive Landing Page
          </Typography>
          <Typography variant="body1" gutterBottom>
            This page is built using Material UI Grid, Container, and Typography.
          </Typography>

          <Button variant="contained">Get Started</Button>
        </Grid>

        <Grid item xs={12} md={6}>
          <img
            src="https://via.placeholder.com/500"
            alt="Landing"
            width="100%"
            style={{ borderRadius: "10px" }}
          />
        </Grid>

      </Grid>
    </Container>
  );
}

export default LandingPage;
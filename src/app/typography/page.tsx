import {
  Container,
  Paper,
  Typography,
  Button,
  Link,
  Grid,
} from "@mui/material";

export default function typographyPage() {
  return (
    <>
      <Container fixed sx={{ borderRadius: "1rem" }}>
        <Paper sx={{ padding: "1em" }}>
          <Grid container spacing={1}>
            <Grid size={12}>
              <Typography variant="h1">Typography</Typography>
            </Grid>
            <Grid size={12}>
              <Link href="../">
                <Button variant="contained">
                  <Typography variant="button">Click to return!</Typography>
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  );
}

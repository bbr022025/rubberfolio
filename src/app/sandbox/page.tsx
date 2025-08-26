import { Container, Typography, Box, Button, Grid } from "@mui/material";
import Image from "next/image";
export default function Sandbox() {
  return (
    <>
      <Container>
        <Grid container>
          <Grid size={12}>
            <Box
              sx={{
                maxHeight: "80vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <Box
                sx={{
                  width: 391,
                  height: 460,
                  position: "relative",
                }}
              >
                <Image
                  src="/hero.png"
                  alt="Hero of the day"
                  layout="fill"
                  objectFit="cover"
                />
              </Box>
              <Typography variant="h2">Brian Blomlie</Typography>
              <Typography variant="h6">
                Webdesigner basert i Oslo-området
              </Typography>
              <Button variant="contained">Explore Stack</Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

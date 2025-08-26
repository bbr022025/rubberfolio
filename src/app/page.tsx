import * as React from "react";
import { Box, Button, Container } from "@mui/material";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Container>
        <Grid container>
          <Grid size={{ xs: 12, sm: 6 }}>
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
            </Box>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Typography variant="h2">Brian Blomlie</Typography>
            <Typography variant="h6">
              Webdesigner basert i Oslo-området
            </Typography>
            <Button variant="contained">Explore Stack</Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

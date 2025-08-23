import * as React from "react";
import { Box, Button, Container } from "@mui/material";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { Paper } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <Container
      sx={{
        bgcolor: "background.default",
        margin: "1rem",
        borderRadius: "1rem",
      }}
    >
      <Grid container sx={{ padding: "1rem" }} spacing={2}>
        <Grid size={12}>
          <Paper elevation={8} sx={{ bgcolor: "primary.main" }}>
            <Typography variant="h1" sx={{ textAlign: "center" }}>
              Typography
            </Typography>
          </Paper>
        </Grid>
        <Grid size={6}>
          <Paper sx={{ padding: "0.5rem" }} elevation={5}>
            <Typography variant="h1">Heading 1</Typography>
            <Typography variant="h2">Heading 2</Typography>
            <Typography variant="h3">Heading 3</Typography>
            <Typography variant="h4">Heading 4</Typography>
            <Typography variant="h5">Heading 5</Typography>
            <Typography variant="h6">Heading 6</Typography>
          </Paper>
        </Grid>
        <Grid size={6}>
          <Paper sx={{ padding: "0.5rem" }} elevation={3}>
            <Typography variant="subtitle1">Subtitle 1</Typography>
            <Typography variant="subtitle2">Subtitle 2</Typography>
            <Typography variant="body1">Body1</Typography>
            <Typography variant="body2">Body2</Typography>
            <Typography variant="button">Button</Typography>
            <Typography variant="caption">Caption</Typography>
            <Typography variant="overline">Overline</Typography>
          </Paper>
        </Grid>
        <Grid size={12}>
          <Typography variant="body1">Primary</Typography>
          <Paper
            sx={{
              display: "flex",
              gap: "0.5em",
              padding: "0.2em",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: 50,
                height: 50,
                borderRadius: 2,
                bgcolor: "primary.main",
              }}
            />
            <Typography variant="body2">palette.primary.main</Typography>
          </Paper>
          <Typography variant="body1">Secondary</Typography>
          <Paper
            sx={{
              display: "flex",
              gap: "0.5em",
              padding: "0.2em",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: 50,
                height: 50,
                borderRadius: 2,
                bgcolor: "secondary.main",
              }}
            />
            <Typography variant="body2">palette.secondary.main</Typography>
          </Paper>
          <Typography variant="body1">Background</Typography>
          <Paper
            sx={{
              display: "flex",
              gap: "0.5em",
              padding: "0.2em",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: 50,
                height: 50,
                borderRadius: 2,
                bgcolor: "background.default",
              }}
            />
            <Typography variant="body2">background.default</Typography>
          </Paper>
        </Grid>
        <Grid size={8}>
          <Button variant="outlined" color="error">
            <Link href="/typography">
              <Typography variant="button">View Typography</Typography>
            </Link>
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

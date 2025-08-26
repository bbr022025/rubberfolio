"use client";
import { Box, Drawer, Typography, IconButton, Link } from "@mui/material";
import { useState } from "react";

export default function DrawerComponent() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <>
      <IconButton onClick={() => setIsDrawerOpen(true)}>
        <Typography variant="h5">B·B</Typography>
      </IconButton>
      <Drawer
        anchor="top"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box p={2} role="presentation" sx={{ textAlign: "center" }}>
          <Link href="/">
            <Typography variant="h5">Home</Typography>
          </Link>
          <Link href="/typography">
            <Typography variant="h5">Typography</Typography>
          </Link>
          <Link href="/drawer">
            <Typography variant="h5">Drawer</Typography>
          </Link>
          <Link href="/sandbox">
            <Typography variant="h5">Sandbox</Typography>
          </Link>
        </Box>
      </Drawer>
    </>
  );
}

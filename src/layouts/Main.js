import { Box, AppBar, Toolbar, Typography, Container } from "@mui/material";

function MainLayout({ pageTitle, footerLabel, children }) {
  return (
    <Container
      maxWidth="md"
      sx={{
        backgroundColor: "background.default",
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
      }}
      disableGutters
    >
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div">
            {pageTitle}
          </Typography>
        </Toolbar>
      </AppBar>

      {children}

      <Box
        component="footer"
        display="flex"
        alignItems="center"
        justifyContent="center"
        backgroundColor="primary.main"
        color="primary.contrastText"
        height="56px"
        boxShadow="1"
      >
        <Typography variant="body1" component="div" fontWeight="500">
          {footerLabel}
        </Typography>
      </Box>
    </Container>
  );
}

export default MainLayout;

import { Box, AppBar, Toolbar, Typography, Container } from "@mui/material";

function MainLayout({ pageTitle, footerLabel, children }) {
  return (
    <Container
      sx={{
        backgroundColor: "background.default",
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        height: '100vh',
        width: '960px',
      }}
      disableGutters
    >
      <AppBar position="static" sx={{p: '0 2.5rem', boxShadow: 'none'}}>
        <Toolbar disableGutters>
          <Typography variant="h6" component="div" fontSize="1.25rem" lineHeight="1.3">
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
        <Typography 
          variant="body1" 
          component="div" 
          fontWeight="500" 
          data-testid="catalogFooter"
        >
          {footerLabel}
        </Typography>
      </Box>
    </Container>
  );
}

export default MainLayout;

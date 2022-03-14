import { Box, AppBar, Toolbar, Typography, Container } from "@mui/material";

function MainLayout({ pageTitle, footerLabel, children }) {
  return (
    <Container
      maxWidth="md"
      sx={{
        py: 4,
        backgroundColor: "background.default",
        flexGrow: 1,
        display: "flex",
        flexDirection: "column"
      }}
      disableGutters
    >
      <AppBar 
        sx={{
          left: "50%",
          transform: "translate(-50%)",
          maxWidth: "inherit",
          width: "inherit"  
        }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{p: 2}}>
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
        position="fixed" 
        maxWidth="inherit"
        width="inherit"
        bottom="0" 
      >
        <Typography data-testid="footer" variant="body1" component="div" fontWeight="500">
          {footerLabel}
        </Typography>
      </Box>
    </Container>
  );
}

export default MainLayout;

import { AppBar, Toolbar, Typography, Avatar, Box } from '@mui/material';

function Header() {
  return (
    <AppBar
      position='fixed'
      sx={{
        width: 'calc(100% - 260px)',
        ml: '260px',
        background: 'white',
        color: 'black',
        boxShadow: 1
      }}
    >
      <Toolbar>
        <Typography variant='h6' sx={{ flexGrow: 1 }}>
          User Management Dashboard
        </Typography>

        <Box display='flex' alignItems='center' gap={2}>
          <Typography>Admin</Typography>
          <Avatar>A</Avatar>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
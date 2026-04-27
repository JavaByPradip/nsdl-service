import { Box, Typography } from '@mui/material';

export default function Dashboard() {
  return (
    <Box textAlign="center" mt={20}>
      <Typography variant="h4" gutterBottom>
        Welcome to NSDL
      </Typography>
      <Typography color="text.secondary">
        Banking made easy - JUST IN A JIFFY
      </Typography>
    </Box>
  );
}
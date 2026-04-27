import {
  Card,
  CardContent,
  Typography,
  Grid,
  Avatar,
  Button,
  Box,
} from '@mui/material';

export default function ProfileDetails() {
  return (
    <Box>
      <Typography variant="h4" mb={3}>
        Profile Details
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent sx={{ textAlign: 'center' }}>
              <Avatar
                sx={{ width: 100, height: 100, mx: 'auto', mb: 2 }}
              >
                A
              </Avatar>
              <Typography variant="h6">Adeline Ballard</Typography>
              <Typography color="text.secondary">
                adeline@gmail.com
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Personal Details
              </Typography>
              <Typography>PAN: XXXXXXX67F</Typography>
              <Typography>Aadhaar: XXXX XXXX XXXX 7463</Typography>
              <Typography>City: Bhubaneswar</Typography>
              <Typography>State: Odisha</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box mt={4} display="flex" justifyContent="flex-end" gap={2}>
        <Button variant="outlined" color="error">
          Reject
        </Button>
        <Button variant="contained" color="success">
          Approve
        </Button>
      </Box>
    </Box>
  );
}
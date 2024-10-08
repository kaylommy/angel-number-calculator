import { Container, Box, Typography, Button, Grid, Paper } from '@mui/material';
import heroImage from '../../assets/images/hero-img.avif';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Section */}
      <Paper
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '60vh',
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          textAlign: 'center',
          zIndex: -1,
          borderBottom: '5px solid rgba(0, 0, 139, 0.8)'
        }}
      >
        <Typography variant="h2" component="h1" sx={{ padding: '20px', borderRadius: '10px', fontFamily: 'Cinzel, serif', }}>
          Welcome to Celestial Insights
        </Typography>
      </Paper>

      {/* Content Sections */}
      <Container sx={{ marginTop: '55vh', backgroundColor: 'rgba(0, 0, 139, 0.4)', padding: '2rem', borderRadius: '10px', boxShadow: 3, display: 'flex', justifyContent: 'center' }}>
        <Grid container spacing={4}
        sx={{ justifyContent: 'center', alignItems: 'center' }}>
          {/* Get Started Section */}
          <Grid item xs={12} md={3}>
            <Box
              sx={{
                padding: '20px',
                backgroundColor: '#fbf5e8',
                borderRadius: '10px',
                textAlign: 'center',
                height: '12rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            >
              <Typography variant="h4" component="h2" gutterBottom >
                Get Started
              </Typography>
              <Typography variant="body1" gutterBottom>
                Create an account with us!
              </Typography>
              <Button variant="contained" color="primary" sx={{ backgroundColor: '#00008B',
                '&:hover': {
                  backgroundColor: '#00008B66',
                },
                 }} onClick={() => navigate('login')}>
                Get Started
              </Button>
            </Box>
          </Grid>

          {/* Calculator Section */}
          <Grid item xs={12} md={3}>
            <Box
              sx={{
                padding: '20px',
                backgroundColor: '#fbf5e8',
                borderRadius: '10px',
                textAlign: 'center',
                height: '12rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            >
              <Typography variant="h4" component="h2" gutterBottom>
                Angel Number
              </Typography>
              <Typography variant="body1" gutterBottom>
                Calculate your angel numbers.
              </Typography>
              <Button variant="contained" color="primary" sx={{ backgroundColor: '#00008B',
                '&:hover': {
                  backgroundColor: '#00008B66',
                }, }} onClick={() => navigate('calculator')}>
                Use Calculator
              </Button>
            </Box>
          </Grid>

          {/* Crystal Quiz Section */}
          <Grid item xs={12} md={3}>
            <Box
              sx={{
                padding: '20px',
                backgroundColor: '#fbf5e8',
                borderRadius: '10px',
                textAlign: 'center',
                height: '12rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            >
              <Typography variant="h4" component="h2" gutterBottom>
                Crystal Quiz
              </Typography>
              <Typography variant="body1" gutterBottom>
                Take our quiz to find out which crystal suits your needs
              </Typography>
              <Button variant="contained" color="primary" sx={{ backgroundColor: '#00008B',
                '&:hover': {
                  backgroundColor: '#00008B66',
                }, }} onClick={() => navigate('quiz')}>
                Take Quiz
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Homepage;
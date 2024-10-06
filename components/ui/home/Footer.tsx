import React from 'react';
import { Box, Container, Typography, IconButton } from '@mui/material';
import { Facebook, Instagram, Twitter, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: 'black', color: 'white', fontFamily:'Tw Cen MT', py: 8}}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(1, 1fr)', md: 'repeat(5, 1fr)' }, gap: 4 }}>
          {/* Logo and Tagline */}
          <Box sx={{ gridColumn: { xs: '1', md: 'span 2' } }}>
            <Typography variant="h6" gutterBottom>
              City<span style={{ color: '#4caf50' }}>Foods</span>
            </Typography>
            <Typography variant="body2">
              Ordering food made easier and enjoyable
            </Typography>
          </Box>

          {/* Features */}
          <Box>
            <Typography variant="subtitle1" gutterBottom>
              Features
            </Typography>
            <Typography variant="body2" component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
              {['Mobile', 'Integrations', 'Whitelisting', 'Screen sharing'].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </Typography>
          </Box>

          {/* Help */}
          <Box>
            <Typography variant="subtitle1" gutterBottom>
              Helpful Links
            </Typography>
            <Typography variant="body2" component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
              {["FAQ's", 'Contact Us', 'Blog', 'Privacy Policy'].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </Typography>
          </Box>

          {/* Company */}
          <Box>
            <Typography variant="subtitle1" gutterBottom>
              Company
            </Typography>
            <Typography variant="body2" component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
              {['About Us', 'Careers', 'Partnerships', 'Compliance'].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </Typography>
          </Box>

          {/* Contact Us */}
          <Box sx={{ gridColumn: { xs: '1', sm: 'span 2', md: '6' } }}>
            <Typography variant="subtitle1" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
              {[
                'service@cityfoods',
                '(254)-7560-000',
                'Konza Technopolis',
                'Makueni, Kenya'
              ].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </Typography>
          </Box>
        </Box>

        {/* Copyright and Social Icons */}
        <Box sx={{ mt: 6, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
          <Typography variant="body2" sx={{ mb: { xs: 2, md: 0 } }}>
            © copyright CityFoods Inc. All Rights Reserved
          </Typography>
          <Box>
            {[Facebook, Instagram, Twitter, LinkedIn].map((Icon, index) => (
              <IconButton key={index} sx={{ color: 'white' }}>
                <Icon />
              </IconButton>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
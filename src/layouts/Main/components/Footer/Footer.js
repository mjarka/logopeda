import React from 'react';
import Grid from '@mui/material/Grid';

import Typography from '@mui/material/Typography';

const Footer = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography
          align={'center'}
          variant={'subtitle2'}
          color="text.secondary"
          gutterBottom
        >
          &copy; Anastazja Mikołajczyk. 2022
        </Typography>
        <Typography
          align={'center'}
          variant={'caption'}
          color="text.secondary"
          component={'p'}
        >
          Tutaj jakieś legal lines Lorem Ipsum Dolor Sit Amet.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;

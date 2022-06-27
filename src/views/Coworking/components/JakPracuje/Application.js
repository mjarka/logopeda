import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ListWithVerticalLine from './Blocks/ListWithVerticalLine';
const Application = () => {
  return (
    <Box>
      <Box marginBottom={1}>
        <Typography
          align={'center'}
          variant="h4"
          data-aos={'fade-up'}
          gutterBottom
          sx={{
            fontWeight: 700,
          }}
        >
          Jak pracuję.
        </Typography>
        <Typography
          variant="h6"
          color={'text.secondary'}
          align={'center'}
          data-aos={'fade-up'}
        >
          Krótkie intro na temat tego jak pracuję z pacjentami
        </Typography>
      </Box>
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={{ xs: 'flex-start', sm: 'center' }}
        flexDirection={{ xs: 'column', sm: 'row' }}
      ></Box>
      <ListWithVerticalLine></ListWithVerticalLine>
    </Box>
  );
};

export default Application;

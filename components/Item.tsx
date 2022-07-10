import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';

const Item = () => {
  return (
    <Grid container>
      <Grid item xs={5}>
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/g2O95L5E3Y0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </Grid>
      <Grid item xs={7}>
        <Box pl={3} pt={2}>
          <Typography variant='h4'>Movie Title</Typography>
          <Typography variant='caption'>Share by: .....@gmail.com</Typography>
          <Box display="flex" alignItems="center" flexDirection="row">
            <Box display="flex" alignItems="center" flexDirection="row" mr={2}>
              <Typography variant='caption'>89</Typography>
              <ThumbUpOutlinedIcon fontSize="small" />
            </Box>
            <Box display="flex" alignItems="center" flexDirection="row">
              <Typography variant='caption'>89</Typography>
              <ThumbDownOutlinedIcon fontSize="small" />
            </Box>
          </Box>
          <Typography variant='caption'>Description:</Typography>
          <Typography> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};
export default Item;

import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';

interface Props {
  item: {
    id: string
    title: string
    description: string
    email: string
  }
}

const Item: React.FC<Props> = ({ item }) => {
  return (
    <Grid container>
      <Grid item xs={5}>
        <iframe width="100%" height="315" src={`https://www.youtube.com/embed/${item.id}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </Grid>
      <Grid item xs={7}>
        <Box pl={3} pt={2}>
          <Typography variant='h4'>{item.title}</Typography>
          <Typography variant='caption'>Share by: {item.email}</Typography>
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
          <Typography>{item.description}</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};
export default Item;

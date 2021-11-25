import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Typography
} from '@mui/material';

const ActionAreaCard = ({ data }) => {
  console.log('');

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea component={RouterLink} to={data.url}>
          <CardMedia
            component="img"
            height="140"
            image={data.img}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data.heading}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {data.text}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default ActionAreaCard;

ActionAreaCard.propTypes = {
  data: PropTypes.any.isRequired
};

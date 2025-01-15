import React from 'react';
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LocalHotelIcon from '@mui/icons-material/LocalHotel';
import WcIcon from '@mui/icons-material/Wc';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { red } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';
import './room.css'
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function Room({ room }) {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleBook = (bedType) => {
    navigate(`/book/${bedType}`);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {room.avatar}
          </Avatar>
        }
        title={room.title}
      />
      <CardMedia className={classes.media} image={room.imgUrl} title="Paella dish" />
      <img src={`/images/${room.bedType}.png`} alt="" />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {room.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing className='flex'>
        <IconButton aria-label="add to favorites">
          <LocalHotelIcon />: {room.bed}
        </IconButton>
        <IconButton aria-label="share">
          <WcIcon />: {room.capacity}
        </IconButton>
        <IconButton aria-label="price">
          <AttachMoneyIcon />: {room.price}
        </IconButton>
        <Button onClick={() => handleBook(room.bedType)} variant="contained" color="primary">
          Book
        </Button>
      </CardActions>
    </Card>
  );
}

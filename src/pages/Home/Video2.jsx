import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import ResponsivePlayer from "./Video3";
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";




const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: '#232323',
  },
  imageList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },

}));


  const itemData = [
    {
      img: "ResponsivePlayer", 
      title: 'Роботостроение',
      author: 'author',
    },
    {
      img: ResponsivePlayer,
      title: 'Зайцы в науке',
      author: 'author',
    },
    {
      img: ResponsivePlayer,
      title: 'Котики за компьютером',
      author: 'author',
    },
    {
      img: ResponsivePlayer,
      title: 'Космос',
      author: 'author',
    },
    {
      img: ResponsivePlayer,
      title: 'Физика в жизни насекомых',
      author: 'author',
    },
    {
      img: ResponsivePlayer,
      title: 'Еда',
      author: 'author',
    },
    {
      img: ResponsivePlayer,
      title: 'Умные кокодилы',
      author: 'author',
    },{
      img: ResponsivePlayer,
      title: 'Пришельцы',
      author: 'author',
    },
    {
      img: ResponsivePlayer,
      title: 'Математический анализ в интернете для фей',
      author: 'author',
    },
    {
      img: ResponsivePlayer,
      title: 'Математика',
      author: 'author',
    },
    {
      img: ResponsivePlayer,
      title: 'Семантика в программировании',
      author: 'author',
    },{
      img: ResponsivePlayer,
      title: 'Image',
      author: 'author',
    },
    {
      img: ResponsivePlayer,
      title: 'Image',
      author: 'author',
    },
    {
      img: ResponsivePlayer,
      title: 'Image',
      author: 'author',
    },
    {
      img: ResponsivePlayer,
      title: 'Image',
      author: 'author',
    },{
      img: ResponsivePlayer,
      title: 'Image',
      author: 'author',
    },
    {
      img: ResponsivePlayer,
      title: 'Image',
      author: 'author',
    },
    {
      img: ResponsivePlayer,
      title: 'Image',
      author: 'author',
    },
    {
      img: ResponsivePlayer,
      title: 'Image',
      author: 'author',
    },{
      img: ResponsivePlayer,
      title: 'Image',
      author: 'author',
    },
    {
      img: ResponsivePlayer,
      title: 'Image',
      author: 'author',
    },
  ];
 
export default function SingleLineImageList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ImageList className={classes.imageList} cols={2.5}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img src={item.img} alt={item.title} />
            <ImageListItemBar 
              title={item.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label={`star ${item.title}`} component={Link} to="/video"> 
                  <StarBorderIcon className={classes.title} />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

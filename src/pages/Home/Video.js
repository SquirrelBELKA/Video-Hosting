import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import VideoPlayer from 'react-video-js-player'; 
import Paper from "@mui/material/Paper";
import { red, grey, indigo } from '@mui/material/colors';
import Typography from "@mui/material/Typography";
import ChatUI from "./Chat";
import { Grid } from "@material-ui/core";
import ResponsivePlayer from "./Video3";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@material-ui/core/Box"
import CssBaseline from '@material-ui/core/CssBaseline';
import SingleLineImageList from "./Video2";





const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
    
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: "#FAFAFA",
  },
  colorin: {
    backgroundColor: '#232323',
  },
  
}));


const coloro = '#2F2F2F';
const colory = '#F2A548';
const coloror = '#F7DC4E';
const colorw = '#FAFAFA';
const colorr = red[300];
const colorg = grey[400];
const colori = indigo[400];
const colorb = '#232323';




export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  
  

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
 

  return (
    <div style={{backgroundColor: colorb}} className={classes.root} height='100vh' ><br /><br />
    <CssBaseline />

<br /><br />
    <Paper elevation={7}
      sx={{ 
        p: 2.5,
        position:'static',
        margin: 'auto',
        maxWidth:1200,
        flexGrow: 1,
        backgroundColor: colorb
      }}
    >
    <Card className={classes.colorin}  >
      
    <CardMedia > < ResponsivePlayer /> </CardMedia> 
      
      <CardHeader className={classes.color}
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            N
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={<Typography color='#FAFAFA' >
        Name
        </Typography>}
        
        subheader={<Typography color='#FAFAFA' >
        15 Декабря, 2023
        </Typography>}
      />
        <Typography gutterBottom variant="h5" sx={{ color: colorw, p: 2, }}>
       Зайцы в науке. Обычный день зайца.
    </Typography>
      <CardActions disableSpacing>
        
        <IconButton aria-label="share">
          <ShareIcon sx={{ color: colorw }} fontSize="large"/>
        </IconButton>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon sx={{ color: red[500] }}  fontSize="large"/>
        </IconButton>
        <IconButton aria-label="add to favorites" >
         <FavoriteBorderIcon fontSize="large" sx={{ color: red[500] }} />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon sx={{ color: colorw }} fontSize="large"/>
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent >
          <Typography paragraph sx={{ color: colorw }}>Подробности:</Typography>
          <Typography paragraph sx={{ color: colorw }}>
            Подпишись, чтобы не пропускать новые видео.
          </Typography>
          <Typography paragraph sx={{ color: colorw }}>
            
            Этот канал не имеет определенной тематики и предназначен для разнообразного контента. 
            Здесь вы найдете различные видео, начиная от развлекательных роликов и заканчивая образовательными материалами.
             Канал создан для тех, кто любит разнообразие и не хочет ограничивать себя в выборе контента.
            
          </Typography>
          <Typography paragraph sx={{ color: colorw }}>
          Здесь вы можете найти видео на самые разные темы, от кулинарии и путешествий до спорта и науки. 
            Подписывайтесь на канал, чтобы не пропустить новые видео и получить порцию разнообразия в свой день!
          </Typography>
          <Typography sx={{ color: colorw }}>
            Напиши комментарий!!!
          </Typography>
        </CardContent>
      </Collapse>
    </Card></Paper>
    <br /><br />
    <Paper elevation={7}
      sx={{ 
        p: 2.5,
        position:'static',
        margin: 'auto',
        maxWidth:1200,
        flexGrow: 1,
        backgroundColor: colorb
      }}
    >
        <Grid container spacing={3}>
        <Grid item xs={12} sm={8}>
        
              <Typography gutterBottom variant="h5"color='#F2A548' component="div">
              Комментарии:
              </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
        <Typography gutterBottom variant="h5"color='#F7DC4E' component="div" align="center">
              Следующие:
              </Typography>
        </Grid>
         <Grid item xs={12} sm={8}>
         <Paper elevation={7}
      sx={{ 
        p: 5.5,
        position:'static',
        margin: 'auto',
        maxWidth:1200,
        flexGrow: 1,
        backgroundColor: colorb
      }}
    >
          <ChatUI/></Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
        <Paper elevation={7}
      sx={{ 
        p: 2.5,
        position:'static',
        margin: 'auto',
        maxWidth:1200,
        flexGrow: 1,
        backgroundColor: colorb
      }}
    >
        <Grid container spacing={2}>
          
            <Grid item xs container direction="column" spacing={1} align="center"><br /><br />
            <Grid item xs>
            <ResponsivePlayer
				/> 
        </Grid> <br />  <br />  <br />  <br /><br />  <br />  <br /><br />  <br /> <br />  <br /> 
        <Grid item xs> 
        <ResponsivePlayer
				/>   
				 </Grid>
         
        
          </Grid>
        
      </Grid>

      <br /><br />  <br /> <br /><br />  <br /> <br /><br />  <br /> <br /><br />  
      </Paper>
        </Grid>
        
      </Grid>
      
      </Paper>
      
      <br />  <br /> <br /><br />  <br /> 

   





    
      
      <Paper elevation={7}
      sx={{ 
        p: 2.5,
        position:'static',
        margin: 'auto',
        maxWidth:1200,
        flexGrow: 1,
        backgroundColor: colorb
      }}
    >
       <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
        
              <Typography gutterBottom variant="h5"color='#F2A548' component="div">
              Другие темы:
              </Typography>
        </Grid>
        
      
      
      
       < SingleLineImageList />  
      </Grid>
    </Paper>
    <footer><Paper elevation={8}
      sx={{ 
        pl:5,
       
        margin: 'auto',
        maxWidth:'auto',
        flexGrow: 1,
        backgroundColor: colorb,
      }}
    >
      
     <Box sx={{ width: '100%', maxWidth: 700, margin: 'auto', textAlign: 'center'  }}>
     <br /> <br /><Typography variant="h6"  gutterBottom>
      ТИНОСТУДИЯ 2023 (видео-хостинг) | Made by <a href="https://github.com/SquirrelBELKA"   > SquirrelBELKA</a> 
            
      </Typography><br /> 
     </Box></Paper>
     </footer>
      
      </div>
  );
}

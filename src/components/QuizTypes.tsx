import React from 'react';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import generalknowledge from '../images/generalknowledge.jpg'
import animals from '../images/animals.jpg'
import arts from '../images/arts.jpg'
import celebrities from '../images/celebrities.jpg'
import film from '../images/film.jpg'
import mathematics from '../images/mathematics.jpg'
import sports from '../images/sports.jpg'
import vehicle from '../images/vehicle.jpg'
import computer from '../images/computer.jpg'
import {optionObj} from '../services/types/Types'

const images = [
  {
    url: generalknowledge,
    title: 'General Knowledge',
    width: '40%',
    id:9,
  },
  {
    url: film,
    title: 'Film',
    width: '30%',
    id:11,
  },
  {
    url: animals,
    title: 'Animals',
    width: '30%',
    id:27,

  },
  {
    url: arts,
    title: 'Arts',
    width: '40%',
    id:25,
  },
  {
    url: celebrities,
    title: 'Celebrities',
    width: '30%',
    id:26,
  },
  {
    url: mathematics,
    title: 'Mathematics',
    width: '30%',
    id:19,
  },
  {
    url: sports,
    title: 'Sports',
    width: '40%',
    id:21,
  },
  {
    url: vehicle,
    title: 'Vehicles',
    width: '30%',
    id:28,
  },
  {
    url: computer,
    title: 'Computer',
    width: '30%',
    id:18,
  },
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      minWidth: 300,
      width: '100%',
    },
    image: {
      position: 'relative',
      height: 200,
      [theme.breakpoints.down('xs')]: {
        width: '100% !important', // Overrides inline-style
        height: 100,
      },
    
    // right:25,
      '&:hover, &$focusVisible': {
        zIndex: 1,
        '& $imageBackdrop': {
          opacity: 0.15,
        },
        '& $imageMarked': {
          opacity: 0,
        },
        '& $imageTitle': {
          border: '4px solid currentColor',
        },
      },
    },
    focusVisible: {},
    imageButton: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.palette.common.white,
    },
    imageSrc: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundSize: 'cover',
      backgroundPosition: 'center 40%',
    },
    imageBackdrop: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: theme.palette.common.black,
      opacity: 0.4,
      transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
      position: 'relative',
      padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    },
    imageMarked: {
      height: 3,
      width: 18,
      backgroundColor: theme.palette.common.white,
      position: 'absolute',
      bottom: -2,
      left: 'calc(50% - 9px)',
      transition: theme.transitions.create('opacity'),
    },
  }),
);

const QuizTypes:React.FC<{Category(i:number,img:string):void;options:optionObj}>=({Category,options})=> {
  const classes = useStyles();

  function selectCategory(i:number,img:string){
    Category(i,img)
    
    
}

if(options.quizType)
{
  return (
    <div className={classes.root}>
      {images.map((image) => (
        <ButtonBase
        onClick={()=>{selectCategory(image.id,image.url)}}
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width,
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {image.title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      ))}
    </div>
  );
  }
  return(
    <div>
      
    </div>
  )
}

export default QuizTypes
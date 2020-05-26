import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Tweet = (props)=>{
  
 const classes = useStyles();
    return (
        <Grid item xs>
             <Paper className={classes.paper}>{props.body}</Paper>
             <Paper className={classes.paper}>{props.author}</Paper>
             <Paper className={classes.paper}>{props.date}</Paper>       
             {
               props.hashtags.map((hashtag)=>{
                 return <Paper className={classes.paper}>{hashtag}</Paper>
               })
             }     
        </Grid>
        
    )
}
export default Tweet;
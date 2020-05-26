import React from 'react';
import {makeStyles,createStyles} from '@material-ui/core/styles';
import { FormControl, Select, MenuItem } from '@material-ui/core';

const useStyles = makeStyles((theme) => createStyles({
    formControl:{
        margin: theme.spacing(1),
        minWidth: 120 
    },
    selectEmpty: {
        marginTop: theme.spacing(2)
    },
  }));

const Filter = (props)=>{

  const updateHashtag = (hashtag)=>{
        props.updateTweets(hashtag)
    } 

    const classes = useStyles();
    return(
        
        <div class="top-nav">
			<FormControl className={classes.formControl}>
                <Select value={props.value} id="hashtag" onChange={(event)=>updateHashtag(event.target.value)}>
                    <MenuItem value="COVID-19">COVID-19
                    </MenuItem>
                    <MenuItem value="LockDown">LockDown
                    </MenuItem>
                </Select>
            </FormControl>
				
        </div>
    )
}
export default Filter;

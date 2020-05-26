import React from 'react';
import Tweet from './tweet';
import Filter from './filter';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/styles';

const useStyles = (theme) => ({
    root: {
      flexGrow: 1,
    }
  });
class tweetslist extends React.Component{
    constructor(){
        super();
        this.state = {
            tweets: [],
            hashtag: '',
            page:0
        }
    }
    componentDidMount(){  
      console.log("mountng");
      this.fetchTweets();
      window.addEventListener('scroll', this.handleScroll); 
      
    }
    componentDidUpdate(previousProps, previousState) {
    
        if(previousState.hashtag !== this.state.hashtag || previousState.page !== this.state.page){
          console.log(previousState.hashtag,previousState.page);
            this.fetchTweets();
        }     
       
      }
    updateTweets = (hashtag)=>{  
       this.setState({
           hashtag: hashtag,
           page:0
       })
       //
     }

     fetchTweets = ()=>{
      const { hashtag, page } = this.state;
        let url  = "http://172.16.0.5:9000/tweets?page="+page+"&hashtag="+hashtag;
       
        fetch(url)
        .then((res)=>res.json())
        .then((res) => {
            console.log(res);
            this.setState({                
                tweets: res
              })
        });
     }

     loadMore = ()=>{
      // var lastLi = document.querySelector("div.MuiGrid-container >  div.MuiGrid-item:last-child");
      // console.log(lastLi);
      // var lastLiOffset = lastLi.offsetTop + lastLi.clientHeight;
      // var pageOffset = window.pageYOffset + window.innerHeight;
     // console.log(lastLiOffset,pageOffset);
         this.setState({
           page: this.state.page+1          
         })
     }

     handleScroll = () => { 
      var lastLi = document.querySelector("div.MuiGrid-container >  div.MuiGrid-item:last-child");
      var lastLiOffset = lastLi.offsetTop + lastLi.clientHeight;
      var pageOffset = window.pageYOffset + window.innerHeight;

      if (pageOffset > lastLiOffset) {
        console.log("come shere",pageOffset,lastLiOffset);
        this.loadMore();
      }
    };

    
    
    
   render(){  
    const { classes } = this.props;  
       return(<>
       <Filter updateTweets={this.updateTweets} value={this.state.hashtag}/>
       <div className={classes.root}>
        <Grid container spacing={3}>
        {
            this.state.tweets.map((tweet)=>{
                return <Tweet hashtags={tweet.hashtags} id={tweet.id} author={tweet.author} body={tweet.body} date={tweet.date} />
            })
        }
        </Grid>
        <button onClick={this.loadMore}>Load more</button>
        </div>
       </>)
   }
}


export default withStyles(useStyles)(tweetslist);  
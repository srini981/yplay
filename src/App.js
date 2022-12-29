import { Grid } from "@material-ui/core";
import React from "react";
import youtube from "./api/youtube";
import {SearchBar,VideoDetail,VideoList} from "./components";
class App extends React.Component{
  state={
    video:[],
    selectedvideo:null,
  }
  OnFormSubmit=async(searchTerm)=>{
  const response = await youtube.get('search',{
    params:{
      part:'snippet',
      maxResults:5,
      key:'AIzaSyCXxdJbODGC6TjSs8cukQWSvLQEoeXjeak',
      q:searchTerm,
    }
  });

  const onSelectVideo=(video)=>{
this.state({selectedvideo:video})
  }

  this.setState({video:response.data.items,selectedvideo:response.data.items[0]})
  
  }

  render(){
    const selectedvideo =this.state.selectedvideo
    const video = this.state.video
    return (
      <Grid  justifyContent="center" container spacing={16}>
      <Grid item xs={12}>
        <Grid container spacing={16}>
          <Grid item xs={12}>
            <SearchBar OnFormSubmit={this.OnFormSubmit}/>
          </Grid>
          <Grid item xs={8}>
            <VideoDetail video={selectedvideo}/>
          </Grid>
          <Grid item xs={4}>
            <VideoList VidoeList={video} onSelectVideo={this.onSelectVideo}/>
          </Grid>
        </Grid>

      </Grid>
      </Grid>
    )
  }
}

export default App;
 
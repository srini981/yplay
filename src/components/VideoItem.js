import React from "react";
import {Paper,Grid,Typography} from '@material-ui/core'

const VideoItem=({video,onSelectVideo})=>{
    console.log("hi")
    return (
        
        <>
        <Grid item xs={12}>
        <Paper  style={{display:"flex",alignItems:'center' }} onClick={() =>onSelectVideo(video)}>
            <img style={{marginRight:'20px'}} alt="thumbnail" src={video.snippet.thumbnails.medium.url}/>
            <Typography variant="subtitle1"><b>{video.snippet.title}</b></Typography>
            </Paper>
            </Grid>
            </>
    )
}


export default VideoItem
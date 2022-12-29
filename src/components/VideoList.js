import React from "react";
import { Grid } from "@material-ui/core";

import VideoItem from "./VideoItem";

const VideoList=({VidoeList,onSelectVideo})=>{
  
        const listvideos=VidoeList.map((video,id) =><VideoItem key={id} video={video} onSelectVideo={onSelectVideo}/>)
        return (
            <Grid container spacing={10}>
                    {listvideos}
            </Grid>);
}

export default VideoList;
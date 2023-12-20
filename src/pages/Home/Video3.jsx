/*import React, { Component } from 'react'; 
import VideoPlayer from 'react-video-js-player'; 

class VideoApp extends Component { 
	player = {} 
	state = { 
		video: { 
			src: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4", 
			poster: "/1.png"
		} 
	} 

	onPlayerReady(player){ 
		this.player = player; 
	} 

	render() { 
		return ( 
			<div> 
				<VideoPlayer 
					controls={true} 
					src={this.state.video.src} 
					poster={this.state.video.poster} 
					width="1200"
					height="600"
          fullWidth
          alignItems='stretch'
          flex="1"
          position="relative"
					onReady={this.onPlayerReady.bind(this)} 
				/> 
			</div> 



		); 
	} 
} 
export default VideoApp;*/
import React from "react"
import ReactPlayer from "react-player"
 import "./responsive-player.css"

const ResponsivePlayer = ()=> {
 
    return (
      <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=trQtbCxTBF0'
          width='100%'
          height='100%'
		  controls="true"
        />
      </div>
    )
  }

export default ResponsivePlayer
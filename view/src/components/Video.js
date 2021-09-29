import React, { Component } from "react";
import {
  Player,
  ControlBar,
  ReplayControl,
  ForwardControl,
  CurrentTimeDisplay,
  TimeDivider,
  PlaybackRateMenuButton,
  VolumeMenuButton,
  BigPlayButton,
} from "video-react";
import "video-react/dist/video-react.css";
import video from "../videos/natural_sonlar.mp4";

export default class Video extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      source: video,
    };
  }

  componentDidMount() {
    // subscribe state change
    this.player.subscribeToStateChange(this.handleStateChange.bind(this));
  }

  handleStateChange(state) {
    // copy player state to this component's state
    this.setState({
      player: state,
    });
  }

  render() {
    console.dir(this.state.player && this.state.player.duration);
    return (
      <div style={{ width: "800px", margin: "0 auto" }}>
        <Player
          poster="/assets/poster.png"
          ref={(player) => {
            this.player = player;
          }}
        >
          <source src={this.state.source} />
          <ControlBar>
            <BigPlayButton position="center" />
            <ReplayControl seconds={10} order={1.1} />
            <ForwardControl seconds={30} order={1.2} />
            <CurrentTimeDisplay order={4.1} />
            <TimeDivider order={4.2} />
            <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} order={7.1} />
            <VolumeMenuButton disabled />
          </ControlBar>
        </Player>
      </div>
    );
  }
}

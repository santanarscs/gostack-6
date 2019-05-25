import React from "react";
import Slider from "rc-slider";
import {
  Container,
  Current,
  Volume,
  Progress,
  Controls,
  Time,
  ProgressSlider
} from "./styles";

import VolumeIcon from "../../assets/images/volume.svg";
import ShuffleIcon from "../../assets/images/shuffle.svg";
import BackwardIcon from "../../assets/images/backward.svg";
import PlayIcon from "../../assets/images/play.svg";
import PauseIcon from "../../assets/images/pause.svg";

import ForwardIcon from "../../assets/images/forward.svg";
import RepeatIcon from "../../assets/images/repeat.svg";
export default function Player() {
  return (
    <Container>
      <Current>
        <img
          src="https://blog.spoongraphics.co.uk/wp-content/uploads/2017/01/thumbnail-2.jpg"
          alt="teste"
        />
        <div>
          <span>Tmes like these</span>
          <small>Foo Fighters</small>
        </div>
      </Current>
      <Progress>
        <Controls>
          <button>
            <img src={ShuffleIcon} alt="shuffle" />
          </button>
          <button>
            <img src={BackwardIcon} alt="backward" />
          </button>
          <button>
            <img src={PlayIcon} alt="play" />
          </button>
          {/* <button>
            <img src={PauseIcon} alt="pause" />
          </button> */}
          <button>
            <img src={ForwardIcon} alt="forward" />
          </button>
          <button>
            <img src={RepeatIcon} alt="repeat" />
          </button>
        </Controls>
        <Time>
          <span>1:38</span>
          <ProgressSlider>
            <Slider
              railStyle={{ background: "#404040", borderRadius: 10 }}
              trackStyle={{ background: "#1ed760" }}
              handleStyle={{ border: 0 }}
            />
          </ProgressSlider>
          <span>4:23</span>
        </Time>
      </Progress>
      <Volume>
        <img src={VolumeIcon} alt="volume" />
        <Slider
          railStyle={{ background: "#404040", borderRadius: 10 }}
          trackStyle={{ background: "#FFF" }}
          handleStyle={{ display: "none" }}
          value={100}
        />
      </Volume>
    </Container>
  );
}

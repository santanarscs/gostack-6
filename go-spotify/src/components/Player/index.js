import React, { Fragment } from "react";
import Slider from "rc-slider";
import Sound from "react-sound";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Creators as PlayerActions } from "../../store/ducks/player";
import { bindActionCreators } from "redux";
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
function Player({
  player,
  playSong,
  pauseSong,
  nextSong,
  prevSong,
  playing,
  position,
  duration
}) {
  return (
    <Container>
      {!!player.currentSong && (
        <Sound
          url={player.currentSong.file}
          playStatus={player.status}
          onFinishedPlaying={nextSong}
          onPlaying={playing}
        />
      )}
      <Current>
        {!!player.currentSong && (
          <Fragment>
            <img
              src={player.currentSong.thumbnail}
              alt={player.currentSong.title}
            />
            <div>
              <span>{player.currentSong.title}</span>
              <small>{player.currentSong.author}</small>
            </div>
          </Fragment>
        )}
      </Current>
      <Progress>
        <Controls>
          <button>
            <img src={ShuffleIcon} alt="shuffle" />
          </button>
          <button>
            <img src={BackwardIcon} alt="backward" onClick={prevSong} />
          </button>
          {!!player.currentSong && player.status === Sound.status.PLAYING ? (
            <button onClick={pauseSong}>
              <img src={PauseIcon} alt="Pause" />
            </button>
          ) : (
            <button onClick={playSong}>
              <img src={PlayIcon} alt="Play" />
            </button>
          )}
          <button>
            <img src={ForwardIcon} alt="forward" onClick={nextSong} />
          </button>
          <button>
            <img src={RepeatIcon} alt="repeat" />
          </button>
        </Controls>
        <Time>
          <span>{position}</span>
          <ProgressSlider>
            <Slider
              railStyle={{ background: "#404040", borderRadius: 10 }}
              trackStyle={{ background: "#1ed760" }}
              handleStyle={{ border: 0 }}
            />
          </ProgressSlider>
          <span>{duration}</span>
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
Player.propTypes = {
  player: PropTypes.shape({
    currentSong: PropTypes.shape({
      thumbnail: PropTypes.string,
      title: PropTypes.string,
      author: PropTypes.string,
      file: PropTypes.string
    }),
    status: PropTypes.string
  }).isRequired,
  playSong: PropTypes.func.isRequired,
  pauseSong: PropTypes.func.isRequired,
  nextSong: PropTypes.func.isRequired,
  prevSong: PropTypes.func.isRequired,
  playing: PropTypes.func.isRequired,
  position: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired
};
function msToTime(duration) {
  let seconds = parseInt((duration / 1000) % 60, 10);
  const minutes = parseInt((duration / (1000 * 60)) % 60, 10);

  seconds = seconds < 10 ? `0${seconds}` : seconds;

  return `${minutes}:${seconds}`;
}

const mapStateToProps = state => ({
  player: state.player,
  position: msToTime(state.player.position),
  duration: msToTime(state.player.duration)
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(PlayerActions, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);

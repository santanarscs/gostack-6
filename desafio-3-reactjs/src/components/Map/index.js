import React, { Component } from "react";

import MapGL, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as ModalActions } from "../../store/ducks/modal";
import "./styles.css";

class Map extends Component {
  state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      zoom: 15
    }
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      const { latitude, longitude } = coords;
      console.log(coords);
      this.setState({
        viewport: {
          ...this.state.viewport,
          latitude,
          longitude
        }
      });
    });
    window.addEventListener("resize", this._resize);
    this._resize();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this._resize);
  }

  _resize = () => {
    this.setState({
      viewport: {
        ...this.state.viewport,
        width: window.innerWidth,
        height: window.innerHeight
      }
    });
  };

  handleMapClick = async e => {
    const [longitude, latitude] = e.lngLat;
    const { showModal } = this.props;
    await showModal({ latitude, longitude });
  };

  render() {
    const { viewport: viewportState } = this.state;
    const { users } = this.props;
    return (
      <MapGL
        {...viewportState}
        onClick={this.handleMapClick}
        mapStyle="mapbox://styles/mapbox/basic-v9"
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOXACCESSTOKEN}
        onViewportChange={viewport => this.setState({ viewport })}
      >
        {users.data.map(user => (
          <Marker
            latitude={user.cordinates.latitude}
            longitude={user.cordinates.longitude}
            key={user.id}
          >
            <img
              className="avatar"
              alt={`${user.name} Avatar`}
              src={user.avatar}
            />
          </Marker>
        ))}
      </MapGL>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(ModalActions, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map);

import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as PlaylistsActions } from "../../store/ducks/playlists";
import { Container, NewPlayList, Nav } from "./styles";
import Loading from "../../components/Loading";
import AddPlaylistIcon from "../../assets/images/add_playlist.svg";
class Sidebar extends Component {
  static propTypes = {
    getPlayListsRequest: PropTypes.func.isRequired,
    playlists: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          title: PropTypes.string
        })
      ),
      loading: PropTypes.bool
    }).isRequired
  };
  componentDidMount() {
    this.props.getPlayListsRequest();
  }
  render() {
    return (
      <Container>
        <div>
          <Nav main>
            <li>
              <Link to="/">Navegar</Link>
            </li>
            <li>
              <a href="">Rádio</a>
            </li>
          </Nav>
          <Nav>
            <li>
              <span>SUA BIBLIOTECA</span>
            </li>
            <li>
              <a href="">Seu Daily Mix</a>
            </li>
            <li>
              <a href="">Tocadas recentemente</a>
            </li>
            <li>
              <a href="">Músicas</a>
            </li>
            <li>
              <a href="">Álbuns</a>
            </li>
            <li>
              <a href="">Artistas</a>
            </li>
            <li>
              <a href="">Estações</a>
            </li>
            <li>
              <a href="">Arquivos locais</a>
            </li>
            <li>
              <a href="">Podcasts</a>
            </li>
          </Nav>
          <Nav>
            <li>
              <span>PLAYLISTS</span>
              {this.props.playlists.loading && <Loading />}
            </li>
            {this.props.playlists.data.map(playlist => (
              <li key={playlist.id}>
                <Link to={`playlists/${playlist.id}`}>{playlist.title} </Link>
              </li>
            ))}
          </Nav>
        </div>
        <NewPlayList>
          <img src={AddPlaylistIcon} alt="adicionarr playlist" />
          Nova Playlist
        </NewPlayList>
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  playlists: state.playlists
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(PlaylistsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);

import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as FavoritesActions from "../../store/actions/favorites";
class Main extends Component {
  static propTypes = {
    addFavoriteRequest: PropTypes.func.isRequired,
    favorites: PropTypes.shape({
      loading: PropTypes.bool,
      error: PropTypes.oneOfType(null, PropTypes.string),
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          name: PropTypes.name,
          description: PropTypes.name,
          url: PropTypes.name
        })
      ).isRequired
    })
  };
  state = {
    repositoryInput: ""
  };

  handleAddRepository = event => {
    event.preventDefault();
    this.props.addFavoriteRequest(this.state.repositoryInput);

    this.setState({ repositoryInput: "" });
  };
  render() {
    return (
      <Fragment>
        <form onSubmit={this.handleAddRepository}>
          <input
            type="text"
            placeholder="usuario/repositorio"
            value={this.state.repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">Adicionar</button>
          {this.props.favorites.loading && <span>Carregando...</span>}
          {!!this.props.favorites.error && (
            <span style={{ color: "#F00" }}>{this.props.favorites.error}</span>
          )}
        </form>
        <ul>
          {this.props.favorites.data.map(favorite => (
            <li key={favorite.id}>
              <p>
                <strong>{favorite.name}</strong>
                {favorite.description}
              </p>
              <a href={favorite.url}>Acessar</a>
            </li>
          ))}
        </ul>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  favorites: state.favorites
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(FavoritesActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);

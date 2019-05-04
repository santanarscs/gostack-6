import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
function Footer({ count }) {
  return <p>Voce tem {count} favoritos</p>;
}
Footer.propTypes = {
  count: PropTypes.number.isRequired
};
const mapStateToProps = state => ({
  count: state.favorites.length
});

export default connect(mapStateToProps)(Footer);

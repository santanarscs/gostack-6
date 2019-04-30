import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.scss';
class App extends Component {
	render() {
		return <h1>Hello mundo</h1>;
	}
}
render(<App />, document.getElementById('app'));

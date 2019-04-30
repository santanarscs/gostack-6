import React, { Component } from 'react';
import { render } from 'react-dom';
import Header from './pages/Header/Header';
import Post from './pages/Post/Post';
import './style.scss';
class App extends Component {
	state = {
		cards: [
			{
				id: 1,
				name: 'Usuário 1',
				avatar: 'http://i.pravatar.cc/150?img=3',
				time: 'Há 3 minutos',
				body: 'Testeeeee 1'
			},
			{
				id: 2,
				name: 'Usuário 2',
				avatar: 'http://i.pravatar.cc/150?img=6',
				time: 'Há 10 minutos',
				body: 'Testeeeee 2'
			},
			{
				id: 3,
				name: 'Usuário 3',
				avatar: 'http://i.pravatar.cc/150?img=5',
				time: 'Há 28 minutos',
				body: 'Testeeeee 3'
			}
		]
	};
	render() {
		return (
			<div>
				<Header />
				<div className="container">
					<Post cards={this.state.cards} />
				</div>
			</div>
		);
	}
}
render(<App />, document.getElementById('app'));

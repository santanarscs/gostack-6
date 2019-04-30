import React, { Component } from 'react';
import './style.scss';
import PostHeader from '../PostHeader/PostHeader';
export default class Post extends Component {
	render() {
		return (
			<div className="cards">
				{this.props.cards.map(card => (
					<div className="card" key={card.id}>
						<PostHeader avatar={card.avatar} name={card.name} time={card.time} />
						<p>{card.body}</p>
					</div>
				))}
			</div>
		);
	}
}

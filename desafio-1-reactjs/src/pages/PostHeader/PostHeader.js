import React, { Component } from 'react';
import './style.scss';
export default class PostHeader extends Component {
	render() {
		return (
			<div className="card-header">
				<div className="img-header">
					<img src={this.props.avatar} alt="Avatar" />
				</div>
				<div className="description-header">
					<h3>{this.props.name}</h3>
					<span>{this.props.time}</span>
				</div>
			</div>
		);
	}
}

import React, { Component } from 'react';

class ProfileCard extends Component {
	render() {
		return (
			<div className="card horizontal profile-card">
				<div className="card-image">
					<img
						src={this.props.user.images[0].url}
						alt="profile"
						className="profile-img"
					/>
				</div>
				<div className="card-stacked">
					<div className="card-content white-text profile-data">
						<p>{this.props.user.display_name}</p>
						<p>{this.props.user.email}</p>
					</div>
					<div className="card-action">
						<a
							href={this.props.user.external_urls.spotify}
							className="white-text btn waves-effect waves-light profile-btn"
						>
							Profile
						</a>
						<a
							href="http://localhost:3000/login"
							className="white-text btn waves-effect waves-light logout-btn right"
						>
							Logout
						</a>
					</div>
				</div>
			</div>
		);
	}
}

export default ProfileCard;

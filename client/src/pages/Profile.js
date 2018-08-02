import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Preloader from '../components/Preloader';
import ProfileCard from '../components/ProfileCard';
import TopArtists from '../components/TopArtists';
import TopTracks from '../components/TopTracks';
import SpotifyServices from '../services/SpotifyServices';

class Login extends Component {
	constructor() {
		super();

		const { access_token } = SpotifyServices.getHashParams();

		this.state = {
			isFetching: true,
			isLoggedIn: access_token ? true : false,
			accessToken: access_token,
			user: {},
			topArtists: [],
			topTracks: []
		};
	}

	async componentDidMount() {
		const token = this.state.accessToken;

		if (this.state.isLoggedIn) {
			let user = await SpotifyServices.getUserProfile(token);
			user = await SpotifyServices.prepareProfileData(user);

			this.setState({
				user,
				topArtists: await SpotifyServices.topArtists(
					token,
					'short_term'
				),
				topTracks: await SpotifyServices.topTracks(token, 'short_term'),
				isFetching: false
			});
		}
	}

	render() {
		if (!this.state.isLoggedIn) {
			return <Redirect to="/login" />;
		}

		return (
			<div>
				{this.state.isFetching ? (
					<Preloader />
				) : (
					<div className="container">
						<div className="row">
							<div className="col s12">
								<ProfileCard user={this.state.user} />
							</div>
						</div>
						<div className="row">
							<div className="col s6">
								<TopArtists artists={this.state.topArtists} />
							</div>
							<div className="col s6">
								<TopTracks tracks={this.state.topTracks} />
							</div>
						</div>
					</div>
				)}
			</div>
		);
	}
}

export default Login;

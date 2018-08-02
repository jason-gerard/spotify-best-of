import React from 'react';

const Login = () => {
	return (
		<div>
			<div className="container">
				<div className="row">
					<div className="card login-card white-text">
						<div className="card-content">
							<img
								src="./images/Spotify_Logo_RGB_Green.png"
								alt="Spotify Logo"
								className="spotify-logo"
							/>
							<p>
								Spotify Best Of needs to connect to your spotify
								account to be able to read the information on
								your favorite artists and songs.
							</p>
						</div>
						<div className="card-action">
							<a
								className="white-text btn login-btn waves-effect waves-light"
								href="http://localhost:8888/login"
							>
								Login with Spotify
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;

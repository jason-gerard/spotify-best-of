import React, { Component } from 'react';

class TopArtists extends Component {
	render() {
		return (
			<div>
				<ul className="collection with-header top-list">
					<li className="collection-header">
						<h2>Top Artists</h2>
					</li>
					{this.props.artists.items.map((artist, i) => {
						return (
							<li
								className="collection-item top-collection-item"
								key={i}
							>
								<img
									src={artist.images[2].url}
									alt="artist profile"
									className="top-profile"
								/>
								<div className="top-text-artist">
									<p style={{ marginRight: 6 }}>{i + 1}.</p>
									<a
										target="_blank"
										href={artist.external_urls.spotify}
									>
										{artist.name}
									</a>
								</div>
								<p className="popularity">
									Popularity: {artist.popularity}
								</p>
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}

export default TopArtists;

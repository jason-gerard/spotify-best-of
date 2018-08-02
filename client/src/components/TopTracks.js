import React, { Component } from 'react';

class TopTracks extends Component {
	render() {
		return (
			<div>
				<ul className="collection with-header top-list">
					<li className="collection-header">
						<h2>Top Tracks</h2>
					</li>
					{this.props.tracks.items.map((track, i) => {
						return (
							<li
								className="collection-item top-collection-item"
								key={i}
							>
								<img
									src={track.album.images[2].url}
									alt="track profile"
									className="top-profile"
								/>
								<div className="top-text">
									<p className="track-number">{i + 1}.</p>
									<div className="artist-track-list">
										<a
											target="_blank"
											href={track.external_urls.spotify}
										>
											{track.name}
										</a>
										<div>
											<span>
												{track.artists.length > 1
													? 'Artists: '
													: 'Artist: '}
											</span>
											{track.artists.map((artist, i) => {
												return (
													<a
														target="_blank"
														href={
															artist.external_urls
																.spotify
														}
														key={i}
													>
														{artist.name}
														{i + 1 <
														track.artists.length
															? ', '
															: ''}
													</a>
												);
											})}
										</div>
									</div>
								</div>
								<p className="popularity">
									Popularity: {track.popularity}
								</p>
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}

export default TopTracks;

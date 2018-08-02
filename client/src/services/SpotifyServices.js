export default {
	// spotify provided function
	getHashParams() {
		var hashParams = {};
		var e,
			r = /([^&;=]+)=?([^&;]*)/g,
			q = window.location.hash.substring(1);
		while ((e = r.exec(q))) {
			hashParams[e[1]] = decodeURIComponent(e[2]);
		}
		return hashParams;
	},

	prepareProfileData(user) {
		if (!user.images[0]) {
			user.images[0] = {
				url: './images/default-profile-img.png'
			};
		}
		if (!user.display_name) {
			user.display_name = user.id;
		}
		return user;
	},

	topArtists(accessToken, timeRange) {
		return fetch(
			`https://api.spotify.com/v1/me/top/artists?time_range=${timeRange}`,
			{
				method: 'get',
				headers: new Headers({
					Authorization: 'Bearer ' + accessToken
				})
			}
		)
			.then(res => {
				if (res.status === 200) {
					return res.json();
				}
			})
			.catch(error => {
				console.log(error);
			});
	},

	topTracks(accessToken, timeRange) {
		return fetch(
			`https://api.spotify.com/v1/me/top/tracks?time_range=${timeRange}`,
			{
				method: 'get',
				headers: new Headers({
					Authorization: 'Bearer ' + accessToken
				})
			}
		)
			.then(res => {
				if (res.status === 200) {
					return res.json();
				}
			})
			.catch(error => {
				console.log(error);
			});
	},

	getUserProfile(accessToken) {
		return fetch('https://api.spotify.com/v1/me', {
			method: 'get',
			headers: new Headers({
				Authorization: 'Bearer ' + accessToken
			})
		})
			.then(res => {
				if (res.status === 200) {
					return res.json();
				}
			})
			.catch(error => {
				console.log(error);
			});
	}
};

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Profile from './Profile';
import Login from './Login';

const Router = () => (
	<main>
		<Switch>
			<Route exact path="/" component={Profile} />
			<Route exact path="/login" component={Login} />
		</Switch>
	</main>
);

export default Router;

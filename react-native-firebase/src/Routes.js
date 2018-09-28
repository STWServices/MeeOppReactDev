import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import Login from './pages/Login';
import Home from './pages/Home';

export default class Routes extends Component<{}> {
	render() {
		return(
			<Router>
			    <Stack key="root" hideNavBar={true}>
			      <Scene key="home" component={Home}  />
			      <Scene key="login" component={Login} title="Login" initial={true}/>
			    </Stack>
			</Router>
		)
	}
}
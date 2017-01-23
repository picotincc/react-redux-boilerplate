import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from 'base/containers/App.js';

const home = (location, callback) => {
	require.ensure([], require => {
		callback(null, require('home/containers/HomeContainer.js').default);
	}, 'home');
};

const course = (location, callback) => {
	require.ensure([], require => {
		callback(null, require('course/containers/CourseContainer.js').default);
	}, 'course');
};




const routes = (
    <div>
		<Route path='/' component={App}>
			<IndexRoute getComponent={home} />
            <Route path='home' getComponent={home} />
						<Route path='course' getComponent={course} />
		</Route>
    </div>
);

export default routes;

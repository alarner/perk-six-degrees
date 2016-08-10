const React = require('react');
const ReactDOM = require('react-dom');
const { Router, Route, Link, IndexRoute, browserHistory } = require('react-router');
const App = require('./components/App');
const Home = require('./components/pages/Home');
const EditProfile = require('./components/pages/EditProfile');
const Connections = require('./components/pages/Connections');
const Messages = require('./components/pages/Messages');

const app = (
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home} />
			<Route path="/edit-profile" component={EditProfile} />
			<Route path="/connections" component={Connections} />
			<Route path="/messages" component={Messages} />
		</Route>
	</Router>
);

ReactDOM.render(app, document.getElementById('app'));
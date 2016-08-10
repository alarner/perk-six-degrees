const React = require('react');
const { Link } = require('react-router');

module.exports = React.createClass({
	render: function() {
		return (
			<section>
				<nav>
					<Link to="/">Home</Link>
					<Link to="/edit-profile">Edit Profile</Link>
					<Link to="/connections">Connections</Link>
					<Link to="/messages">Messages</Link>
					<a href="/auth/register">Register</a>
					<a href="/auth/login">Login</a>
				</nav>
				{this.props.children}
			</section>
		);
	}
});
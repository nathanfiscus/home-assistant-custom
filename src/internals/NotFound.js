import React from "react";
import PropTypes from 'prop-types';
import {withTheme} from 'material-ui/styles';

@withTheme()
class NotFound extends React.Component {
	static propTypes = {
		theme: PropTypes.object
	};

	render() {
		return (
			<h1 style={this.props.theme.typography.display3}>
				Not Found!<br/>
				<small style={this.props.theme.typography.body2}>The url requested doesn't exist.</small>
			</h1>
		);
	}
}

export default NotFound;

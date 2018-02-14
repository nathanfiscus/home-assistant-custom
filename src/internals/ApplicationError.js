import React from "react";
import PropTypes from "prop-types";
import {withTheme} from 'material-ui/styles';

import WarningIcon from 'material-ui-icons/Warning';
import ErrorIcon from 'material-ui-icons/ErrorOutline';

@withTheme()
class ApplicationError extends React.PureComponent {
	static propTypes = {
		error: PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.object,
			PropTypes.node
		]),
		errorInfo: PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.object,
			PropTypes.node
		]),
		theme: PropTypes.object
	};

	static defaultProps = {
		error:'unhandled exception',
		errorInfo:<div>fake error info<br/>something else</div>
	};

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div style={{
				position: 'absolute',
				top: 0,
				bottom: 0,
				right: 0,
				left: 0,
				backgroundColor: this.props.theme.palette.primary[500],
				padding:'30px'
			}}>
				<h1 style={{...this.props.theme.typography.display4, color: this.props.theme.palette.primary[100]}}><ErrorIcon style={{verticalAlign:'middle',width:'112px', height:'112px'}}/> Error...</h1>
				<h3 style={{...this.props.theme.typography.display1, color: this.props.theme.palette.primary[200]}}>{this.props.error}</h3>
				<div style={{...this.props.theme.typography.body2, color: this.props.theme.palette.primary[300],paddingLeft:'30px'}}>{this.props.errorInfo}</div>
				<br/>
				<p style={{...this.props.theme.typography.body1, color: this.props.theme.palette.primary[200],position:'absolute',bottom:'30px',right:'30px'}}><WarningIcon style={{verticalAlign:'middle'}}/> This error has been logged with the engineering team.</p>
			</div>
		);
	}
}

export default ApplicationError;

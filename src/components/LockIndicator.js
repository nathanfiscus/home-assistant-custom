import React from 'react';
import PropTypes from 'prop-types';
import { Colors } from '../theme';

class LockIndicator extends React.PureComponent {
  static propTypes = {
    locked: PropTypes.bool
  };

  static defaultProps = {
    locked: true
  };

  constructor(props) {
    super(props);
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillReceiveProps() {}

  componentWillUpdate() {}

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    let extraProps = Object.assign({}, this.props);
    delete extraProps.locked;
    return (
      <g
        {...extraProps}
        fill={this.props.locked ? Colors.green[500] : Colors.red[500]}
      >
        <path d="M0 0h24v24H0z" fill="none" />
        {this.props.locked && (
          <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
        )}
        {!this.props.locked && (
          <path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z" />
        )}
      </g>
    );
  }
}

export default LockIndicator;

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { Colors } from '../../theme';

const styles = () => ({
  on: {
    fill: '#ffffff',
    filter: 'url(#dropshadow)',
    marginTop: '50px'
  },
  off: {
    stroke: Colors.base[100],
    fill: 'none',
    strokeWidth: '0.5px'
  }
});

@withStyles(styles)
class BasementLights extends React.PureComponent {
  static propTypes = {
    classes: PropTypes.object
  };

  static defaultProps = {};

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <g id="Lights">
          <circle
            className={this.props.classes.off}
            cx="56.63"
            cy="84.96"
            r="4"
          />
          <circle
            className={this.props.classes.off}
            cx="195.56"
            cy="97.5"
            r="4"
          />
          <circle className={this.props.classes.off} cx="303" cy="99.5" r="4" />
          <circle
            className={this.props.classes.off}
            cx="207.26"
            cy="233.75"
            r="4"
          />
          <circle
            className={this.props.classes.off}
            cx="298.59"
            cy="248.61"
            r="4"
          />
          <circle
            className={this.props.classes.off}
            cx="284.85"
            cy="323.24"
            r="4"
          />
          <circle
            className={this.props.classes.off}
            cx="388"
            cy="254.36"
            r="4"
          />
          <circle
            className={this.props.classes.off}
            cx="478"
            cy="270.64"
            r="4"
          />
          <circle
            className={this.props.classes.off}
            cx="470.5"
            cy="78.5"
            r="4"
          />
          <rect
            className={this.props.classes.off}
            x="441.33"
            y="128.5"
            width="19"
            height="3.67"
            rx="1.83"
            ry="1.83"
          />
        </g>
      </React.Fragment>
    );
  }
}

export default BasementLights;

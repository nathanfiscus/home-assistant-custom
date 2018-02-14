import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { Colors } from '../theme';
import '../css/spin-animation.css';

const styles = () => ({
  fan: {
    strokeMiterlimit: 10,
    stroke: Colors.base[100],
    fill: 'none',
    strokeWidth: '0.5px',
    filter: 'url(#fanshadow)',
    transformOrigin: '50% 50%'
  },
  on: {
    animationDuration: '.75s',
    animationFillMode: 'both',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear',
    animationName: 'spin',
    transformOrigin: '50% 50%'
  },
  speed2: {
    animationDuration: '1s'
  },
  speed3: {
    animationDuration: '1.5s'
  }
});

@withStyles(styles)
class MainFloorFans extends React.PureComponent {
  static propTypes = {
    classes: PropTypes.object
  };

  static defaultProps = {};

  constructor(props) {
    super(props);
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillReceiveProps(nextProps) {}

  componentWillUpdate(nextProps) {}

  componentDidUpdate(prevProps) {}

  componentWillUnmount() {}

  render() {
    return (
      <React.Fragment>
        <filter id="fanshadow" height="130%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
          <feOffset dx="2" dy="2" result="offsetblur" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.5" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <g
          id="GreatRoomFan"
          data-name="Layer 5"
          className={this.props.classes.on}
        >
          <circle
            className={this.props.classes.fan}
            cx="264.8"
            cy="190.26"
            r="4.32"
          />
          <path
            className={this.props.classes.fan}
            d="M1027.29,1005.29c1.1,1.86,1.13,2.64.13,4.73"
            transform="translate(-743.42 -817.22)"
          />
          <line
            className={this.props.classes.fan}
            x1="284.06"
            y1="188.06"
            x2="270.56"
            y2="189.19"
          />
          <line
            className={this.props.classes.fan}
            x1="284.25"
            y1="192.81"
            x2="270.75"
            y2="191.62"
          />
          <path
            className={this.props.classes.fan}
            d="M1014,1006.4c-1.1,1.22-1.1,1.22.19,2.44"
            transform="translate(-743.42 -817.22)"
          />
          <path
            className={this.props.classes.fan}
            d="M1016,1025c-1.48,1.57-2.23,1.81-4.51,1.43"
            transform="translate(-743.42 -817.22)"
          />
          <line
            className={this.props.classes.fan}
            x1="272.67"
            y1="207.92"
            x2="267.86"
            y2="195.25"
          />
          <line
            className={this.props.classes.fan}
            x1="268.16"
            y1="209.41"
            x2="265.57"
            y2="196.11"
          />
          <path
            className={this.props.classes.fan}
            d="M1011.28,1012.47c-1.48-.72-1.48-.72-2.29.85"
            transform="translate(-743.42 -817.22)"
          />
          <path
            className={this.props.classes.fan}
            d="M994.62,1021.31c-2-.78-2.52-1.38-3-3.64"
            transform="translate(-743.42 -817.22)"
          />
          <line
            className={this.props.classes.fan}
            x1="251.06"
            y1="204.23"
            x2="260.97"
            y2="194.99"
          />
          <line
            className={this.props.classes.fan}
            x1="247.98"
            y1="200.61"
            x2="259.32"
            y2="193.19"
          />
          <path
            className={this.props.classes.fan}
            d="M1004.39,1012.21c.11-1.64.11-1.64-1.66-1.8"
            transform="translate(-743.42 -817.22)"
          />
          <path
            className={this.props.classes.fan}
            d="M991.46,998.69c.11-2.16.51-2.82,2.5-4"
            transform="translate(-743.42 -817.22)"
          />
          <line
            className={this.props.classes.fan}
            x1="247.87"
            y1="181.39"
            x2="259.77"
            y2="187.87"
          />
          <line
            className={this.props.classes.fan}
            x1="250.33"
            y1="177.32"
            x2="260.95"
            y2="185.73"
          />
          <path
            className={this.props.classes.fan}
            d="M1003.18,1005.09c1.59-.41,1.59-.41,1.18-2.14"
            transform="translate(-743.42 -817.22)"
          />
          <path
            className={this.props.classes.fan}
            d="M1011.41,988.72c2.09-.54,2.85-.36,4.59,1.18"
            transform="translate(-743.42 -817.22)"
          />
          <line
            className={this.props.classes.fan}
            x1="268.03"
            y1="171.32"
            x2="265.4"
            y2="184.61"
          />
          <line
            className={this.props.classes.fan}
            x1="272.65"
            y1="172.45"
            x2="267.8"
            y2="185.1"
          />
          <path
            className={this.props.classes.fan}
            d="M1008.82,1001.83c.87,1.39.87,1.39,2.4.49"
            transform="translate(-743.42 -817.22)"
          />
        </g>
        <g id="BedroomFan" data-name="Layer 6">
          <circle
            className={this.props.classes.fan}
            cx="398.16"
            cy="190.2"
            r="4.32"
          />
          <path
            className={this.props.classes.fan}
            d="M1160.65,1005.24c1.1,1.86,1.13,2.64.13,4.73"
            transform="translate(-743.42 -817.22)"
          />
          <line
            className={this.props.classes.fan}
            x1="417.42"
            y1="188"
            x2="403.92"
            y2="189.13"
          />
          <line
            className={this.props.classes.fan}
            x1="417.61"
            y1="192.75"
            x2="404.11"
            y2="191.57"
          />
          <path
            className={this.props.classes.fan}
            d="M1147.34,1006.35c-1.1,1.22-1.1,1.22.19,2.44"
            transform="translate(-743.42 -817.22)"
          />
          <path
            className={this.props.classes.fan}
            d="M1149.38,1024.9c-1.48,1.57-2.23,1.81-4.51,1.43"
            transform="translate(-743.42 -817.22)"
          />
          <line
            className={this.props.classes.fan}
            x1="406.03"
            y1="207.86"
            x2="401.22"
            y2="195.2"
          />
          <line
            className={this.props.classes.fan}
            x1="401.52"
            y1="209.35"
            x2="398.93"
            y2="196.05"
          />
          <path
            className={this.props.classes.fan}
            d="M1144.64,1012.41c-1.48-.72-1.48-.72-2.29.85"
            transform="translate(-743.42 -817.22)"
          />
          <path
            className={this.props.classes.fan}
            d="M1128,1021.25c-2-.78-2.52-1.38-3-3.64"
            transform="translate(-743.42 -817.22)"
          />
          <line
            className={this.props.classes.fan}
            x1="384.42"
            y1="204.17"
            x2="394.33"
            y2="194.93"
          />
          <line
            className={this.props.classes.fan}
            x1="381.34"
            y1="200.55"
            x2="392.68"
            y2="193.13"
          />
          <path
            className={this.props.classes.fan}
            d="M1137.75,1012.15c.11-1.64.11-1.64-1.66-1.8"
            transform="translate(-743.42 -817.22)"
          />
          <path
            className={this.props.classes.fan}
            d="M1124.82,998.63c.11-2.16.51-2.82,2.5-4"
            transform="translate(-743.42 -817.22)"
          />
          <line
            className={this.props.classes.fan}
            x1="381.23"
            y1="181.33"
            x2="393.13"
            y2="187.81"
          />
          <line
            className={this.props.classes.fan}
            x1="383.69"
            y1="177.26"
            x2="394.31"
            y2="185.67"
          />
          <path
            className={this.props.classes.fan}
            d="M1136.54,1005c1.59-.41,1.59-.41,1.18-2.14"
            transform="translate(-743.42 -817.22)"
          />
          <path
            className={this.props.classes.fan}
            d="M1144.77,988.66c2.09-.54,2.85-.36,4.59,1.18"
            transform="translate(-743.42 -817.22)"
          />
          <line
            className={this.props.classes.fan}
            x1="401.39"
            y1="171.26"
            x2="398.76"
            y2="184.55"
          />
          <line
            className={this.props.classes.fan}
            x1="406.01"
            y1="172.39"
            x2="401.16"
            y2="185.04"
          />
          <path
            className={this.props.classes.fan}
            d="M1142.18,1001.77c.87,1.39.87,1.39,2.4.49"
            transform="translate(-743.42 -817.22)"
          />
        </g>
      </React.Fragment>
    );
  }
}

export default MainFloorFans;

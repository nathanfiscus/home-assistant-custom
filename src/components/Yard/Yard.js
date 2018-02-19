import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { Colors } from '../../theme';

const styles = () => ({
  svg: {
    height: '100%',
    width: '100%'
  },
  edges: {
    stroke: Colors.base[300],
    strokeMiterlimit: 10,
    strokeWidth: '0.5px',
    fill: 'none'
  },
  yard: {
    fill: Colors.green[400]
  },
  edges2: {
    stroke: Colors.secondarybase[500],
    strokeMiterlimit: 10,
    fill: 'none'
  }
});

@withStyles(styles)
class Yard extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillReceiveProps(nextProps) {}

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  componentWillUpdate(nextProps, nextState) {}

  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {}

  render() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 361 251.17"
        className={this.props.classes.svg}
      >
        <g id="Layer_1" data-name="Layer 1">
          <path
            id="Yard"
            className={this.props.classes.yard}
            d="M646.67,978.67l349,1.67-.67,228L661.33,1207c-20.33-.5-25.33-15.12-25.67-27.67l.67-121C636.33,1014.3,646.13,984,646.67,978.67Z"
            transform="translate(-635.17 -978.16)"
          />
        </g>
        <g id="Concrete">
          <g id="Concrete-2" data-name="Concrete">
            <line
              className={this.props.classes.edges}
              x1="72.25"
              y1="240.17"
              x2="72.25"
              y2="160.67"
            />
            <line
              className={this.props.classes.edges}
              x1="113.33"
              y1="240.58"
              x2="113.33"
              y2="179.83"
            />
            <line
              className={this.props.classes.edges}
              x1="113.67"
              y1="170.84"
              x2="113.67"
              y2="160.24"
            />
            <line
              className={this.props.classes.edges}
              x1="127.33"
              y1="170.84"
              x2="113.67"
              y2="170.84"
            />
            <line
              className={this.props.classes.edges}
              x1="132.17"
              y1="180"
              x2="113.5"
              y2="180"
            />
            <line
              className={this.props.classes.edges}
              x1="148.17"
              y1="164.17"
              x2="132.17"
              y2="180.17"
            />
            <line
              className={this.props.classes.edges}
              x1="148.17"
              y1="149.5"
              x2="148.17"
              y2="164.17"
            />
            <line
              className={this.props.classes.edges}
              x1="138.5"
              y1="149.5"
              x2="138.5"
              y2="160.67"
            />
            <line
              className={this.props.classes.edges}
              x1="127.33"
              y1="170.84"
              x2="138.5"
              y2="160.67"
            />
            <line
              className={this.props.classes.edges}
              x1="134.58"
              y1="178.25"
              x2="127.33"
              y2="170.84"
            />
            <line
              className={this.props.classes.edges}
              x1="136.08"
              y1="176.25"
              x2="129.12"
              y2="169.21"
            />
            <line
              className={this.props.classes.edges}
              x1="138.08"
              y1="174.26"
              x2="131.17"
              y2="167.35"
            />
            <line
              className={this.props.classes.edges}
              x1="142.4"
              y1="169.94"
              x2="135.81"
              y2="163.1"
            />
            <line
              className={this.props.classes.edges}
              x1="143.89"
              y1="168.22"
              x2="137.56"
              y2="161.69"
            />
            <line
              className={this.props.classes.edges}
              x1="145.67"
              y1="166.67"
              x2="138.5"
              y2="159.42"
            />
            <line
              className={this.props.classes.edges}
              x1="138.5"
              y1="155.54"
              x2="148.17"
              y2="155.54"
            />
            <line
              className={this.props.classes.edges}
              x1="138.5"
              y1="152.5"
              x2="148.17"
              y2="152.5"
            />
            <line
              className={this.props.classes.edges}
              x1="68.67"
              y1="250.34"
              x2="72.33"
              y2="240.17"
            />
            <line
              className={this.props.classes.edges}
              x1="116.75"
              y1="250.67"
              x2="113.33"
              y2="240.59"
            />
            <line
              className={this.props.classes.edges}
              x1="68.67"
              y1="250.34"
              x2="116.75"
              y2="250.67"
            />
            <line
              className={this.props.classes.edges}
              x1="72.25"
              y1="160.67"
              x2="113.67"
              y2="160.67"
            />
            <line
              className={this.props.classes.edges}
              x1="138.5"
              y1="149.5"
              x2="148.17"
              y2="149.5"
            />
            <line
              className={this.props.classes.edges}
              x1="98.92"
              y1="20.84"
              x2="98.92"
              y2="39.42"
            />
            <line
              className={this.props.classes.edges}
              x1="117.08"
              y1="39.42"
              x2="99"
              y2="39.42"
            />
            <line
              className={this.props.classes.edges}
              x1="117.08"
              y1="20.84"
              x2="98.83"
              y2="20.84"
            />
            <line
              className={this.props.classes.edges}
              x1="117.08"
              y1="39.42"
              x2="117.08"
              y2="20.84"
            />
          </g>
        </g>
        <g id="House">
          <g id="House_Outline" data-name="House Outline">
            <line
              className={this.props.classes.edges}
              x1="158.5"
              y1="144.84"
              x2="158.5"
              y2="149.5"
            />
            <line
              className={this.props.classes.edges}
              x1="69.83"
              y1="63.84"
              x2="70.17"
              y2="161.17"
            />
            <line
              className={this.props.classes.edges}
              x1="117.17"
              y1="160.67"
              x2="70.16"
              y2="160.67"
            />
            <line
              className={this.props.classes.edges}
              x1="184.83"
              y1="64.17"
              x2="69.83"
              y2="63.84"
            />
            <line
              className={this.props.classes.edges}
              x1="184.83"
              y1="59.84"
              x2="206.83"
              y2="59.84"
            />
            <line
              className={this.props.classes.edges}
              x1="184.83"
              y1="64.17"
              x2="184.83"
              y2="59.84"
            />
            <line
              className={this.props.classes.edges}
              x1="206.83"
              y1="59.84"
              x2="206.83"
              y2="140.5"
            />
            <line
              className={this.props.classes.edges}
              x1="182.83"
              y1="140.5"
              x2="206.83"
              y2="140.5"
            />
            <line
              className={this.props.classes.edges}
              x1="182.83"
              y1="144.84"
              x2="182.83"
              y2="140.5"
            />
            <line
              className={this.props.classes.edges}
              x1="156.17"
              y1="144.84"
              x2="182.83"
              y2="144.84"
            />
            <path
              className={this.props.classes.edges}
              d="M791.33,1123"
              transform="translate(-635.17 -978.16)"
            />
            <line
              className={this.props.classes.edges}
              x1="117.5"
              y1="135.5"
              x2="129.5"
              y2="135.5"
            />
            <line
              className={this.props.classes.edges}
              x1="117.17"
              y1="160.17"
              x2="117.5"
              y2="135.5"
            />
            <line
              className={this.props.classes.edges}
              x1="129.5"
              y1="135.5"
              x2="129.5"
              y2="149.5"
            />
            <line
              className={this.props.classes.edges}
              x1="158.5"
              y1="149.5"
              x2="129.5"
              y2="149.5"
            />
            <line
              className={this.props.classes.edges}
              x1="92.92"
              y1="36.5"
              x2="92.92"
              y2="63.5"
            />
            <line
              className={this.props.classes.edges}
              x1="121.21"
              y1="36.59"
              x2="121.21"
              y2="63.98"
            />
            <line
              className={this.props.classes.edges}
              x1="92.83"
              y1="36.59"
              x2="121.17"
              y2="36.59"
            />
            <line
              className={this.props.classes.edges}
              x1="145.33"
              y1="149"
              x2="145.33"
              y2="144.84"
            />
            <line
              className={this.props.classes.edges}
              x1="92.96"
              y1="160.24"
              x2="92.58"
              y2="116.09"
            />
            <line
              className={this.props.classes.edges}
              x1="117.5"
              y1="135.5"
              x2="92.58"
              y2="116.09"
            />
            <line
              className={this.props.classes.edges}
              x1="69.83"
              y1="63.84"
              x2="108.08"
              y2="102.32"
            />
            <line
              className={this.props.classes.edges}
              x1="92.58"
              y1="116.09"
              x2="108.08"
              y2="102.32"
            />
            <line
              className={this.props.classes.edges}
              x1="92.92"
              y1="63.5"
              x2="130.74"
              y2="100.17"
            />
            <line
              className={this.props.classes.edges}
              x1="108.08"
              y1="102.32"
              x2="169.08"
              y2="102.32"
            />
            <line
              className={this.props.classes.edges}
              x1="130.74"
              y1="64"
              x2="130.74"
              y2="100.59"
            />
            <line
              className={this.props.classes.edges}
              x1="130.74"
              y1="100.17"
              x2="168.5"
              y2="64.17"
            />
            <line
              className={this.props.classes.edges}
              x1="107"
              y1="64.17"
              x2="107"
              y2="36.5"
            />
            <line
              className={this.props.classes.edges}
              x1="195.83"
              y1="60.17"
              x2="195.83"
              y2="74.09"
            />
            <line
              className={this.props.classes.edges}
              x1="184.83"
              y1="64.17"
              x2="195.83"
              y2="74.09"
            />
            <line
              className={this.props.classes.edges}
              x1="169.08"
              y1="102.32"
              x2="195.83"
              y2="74.09"
            />
            <line
              className={this.props.classes.edges}
              x1="206.83"
              y1="140.5"
              x2="168.67"
              y2="102.32"
            />
            <line
              className={this.props.classes.edges}
              x1="129.5"
              y1="135.5"
              x2="129.5"
              y2="131.5"
            />
            <line
              className={this.props.classes.edges}
              x1="182.83"
              y1="140.5"
              x2="152.55"
              y2="110.78"
            />
            <line
              className={this.props.classes.edges}
              x1="129.5"
              y1="131.5"
              x2="152.55"
              y2="110.78"
            />
            <line
              className={this.props.classes.edges}
              x1="152.65"
              y1="144.84"
              x2="152.42"
              y2="110.67"
            />
            <line
              className={this.props.classes.edges}
              x1="145.33"
              y1="144.84"
              x2="156.17"
              y2="144.84"
            />
          </g>
        </g>
      </svg>
    );
  }
}

export default Yard;

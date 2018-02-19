import React from 'react';
import PropTypes from 'prop-types';
import BasementLights from './Basement-Lights';
import BasementDoors from './Basement-Doors';
import BasementWindows from './Basement-Windows';
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
  edges2: {
    stroke: Colors.secondarybase[500],
    strokeMiterlimit: 10,
    fill: 'none'
  }
});

@withStyles(styles)
class Basement extends React.Component {
  static propTypes = {
    classes: PropTypes.object
  };

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
        viewBox="0 0 535.5 351"
        className={this.props.classes.svg}
      >
        <g id="Floorplan">
          <line
            className={this.props.classes.edges}
            x1="1"
            y1="16.5"
            y2="172.5"
          />
          <line
            className={this.props.classes.edges}
            x1="201.06"
            y1="172.99"
            y2="172.99"
          />
          <line
            className={this.props.classes.edges}
            x1="178.44"
            y1="297.49"
            x2="178.44"
            y2="173.48"
          />
          <line
            className={this.props.classes.edges}
            x1="265"
            y1="297.99"
            x2="176.87"
            y2="297.99"
          />
          <line
            className={this.props.classes.edges}
            x1="227.24"
            y1="350.5"
            x2="227.24"
            y2="298.06"
          />
          <line
            className={this.props.classes.edges}
            x1="340"
            y1="350.5"
            x2="227.48"
            y2="350.5"
          />
          <line
            className={this.props.classes.edges}
            x1="340"
            y1="297.99"
            x2="340"
            y2="350.5"
          />
          <line
            className={this.props.classes.edges}
            x1="340"
            y1="333.5"
            x2="363"
            y2="333.5"
          />
          <line
            className={this.props.classes.edges}
            x1="434"
            y1="312.5"
            x2="434"
            y2="333.5"
          />
          <line
            className={this.props.classes.edges}
            x1="535"
            y1="312.5"
            x2="434"
            y2="312.5"
          />
          <line
            className={this.props.classes.edges}
            x1="340"
            y1="297.99"
            x2="300"
            y2="297.99"
          />
          <line
            className={this.props.classes.edges}
            x1="340"
            y1="178.5"
            x2="340"
            y2="297.99"
          />
          <line
            className={this.props.classes.edges}
            x1="300"
            y1="178.5"
            x2="392"
            y2="178.5"
          />
          <line
            className={this.props.classes.edges}
            x1="231.24"
            y1="172.86"
            x2="231.24"
            y2="266.64"
          />
          <line
            className={this.props.classes.edges}
            x1="264"
            y1="173.33"
            x2="264"
            y2="266.64"
          />
          <line
            className={this.props.classes.edges}
            x1="106.49"
            y1="140.5"
            x2="106.49"
            y2="18.88"
          />
          <line
            className={this.props.classes.edges}
            x1="34.03"
            y1="18.5"
            x2="0.97"
            y2="18.5"
          />
          <line
            className={this.props.classes.edges}
            x1="77"
            y1="18.5"
            x2="241"
            y2="18.5"
          />
          <line
            className={this.props.classes.edges}
            x1="286.67"
            y1="18.5"
            x2="324"
            y2="18.5"
          />
          <line
            className={this.props.classes.edges}
            x1="367"
            y1="18.5"
            x2="451"
            y2="18.5"
          />
          <line
            className={this.props.classes.edges}
            x1="451"
            y1="0.5"
            x2="451"
            y2="18.5"
          />
          <line
            className={this.props.classes.edges}
            x1="535"
            y1="0.5"
            x2="451"
            y2="0.5"
          />
          <line
            className={this.props.classes.edges}
            x1="535"
            y1="59.17"
            x2="535"
            y2="0.5"
          />
          <line
            className={this.props.classes.edges}
            x1="535"
            y1="103.5"
            x2="535"
            y2="312.5"
          />
          <line
            className={this.props.classes.edges}
            x1="508"
            y1="312.5"
            x2="535"
            y2="312.5"
          />
          <line
            className={this.props.classes.edges}
            x1="464"
            y1="312.5"
            x2="434"
            y2="312.5"
          />
          <line
            className={this.props.classes.edges}
            x1="434"
            y1="333.5"
            x2="434"
            y2="312.5"
          />
          <line
            className={this.props.classes.edges}
            x1="408"
            y1="333.5"
            x2="434"
            y2="333.5"
          />
          <line
            className={this.props.classes.edges}
            x1="363"
            y1="333.5"
            x2="408"
            y2="333.5"
          />
          <line
            className={this.props.classes.edges}
            x1="0.74"
            y1="172.5"
            x2="0.74"
            y2="18.5"
          />
          <line
            className={this.props.classes.edges}
            x1="0.5"
            y1="147.5"
            x2="11"
            y2="147.5"
          />
          <line
            className={this.props.classes.edges}
            x1="59"
            y1="147.5"
            x2="68"
            y2="147.5"
          />
          <line
            className={this.props.classes.edges}
            x1="68"
            y1="173"
            x2="68"
            y2="147.5"
          />
          <line
            className={this.props.classes.edges}
            x1="392"
            y1="19"
            x2="392"
            y2="127.5"
          />
          <line
            className={this.props.classes.edges}
            x1="414.5"
            y1="94.5"
            x2="392"
            y2="94.5"
          />
          <line
            className={this.props.classes.edges}
            x1="414.5"
            y1="81"
            x2="414.5"
            y2="94.5"
          />
          <line
            className={this.props.classes.edges}
            x1="414.5"
            y1="35.5"
            x2="414.5"
            y2="19"
          />
          <line
            className={this.props.classes.edges}
            x1="418.5"
            y1="127.5"
            x2="535"
            y2="127.5"
          />
          <line
            className={this.props.classes.edges}
            x1="421"
            y1="154.5"
            x2="421"
            y2="127.5"
          />
          <line
            className={this.props.classes.edges}
            x1="478"
            y1="147.5"
            x2="421"
            y2="147.5"
          />
          <line
            className={this.props.classes.edges}
            x1="478"
            y1="127.5"
            x2="478"
            y2="147.5"
          />
          <line
            className={this.props.classes.edges}
            x1="510"
            y1="127.5"
            x2="510"
            y2="178.5"
          />
          <line
            className={this.props.classes.edges}
            x1="499"
            y1="227.5"
            x2="434"
            y2="227.5"
          />
          <line
            className={this.props.classes.edges}
            x1="434"
            y1="178.5"
            x2="434"
            y2="227.5"
          />
          <line
            className={this.props.classes.edges}
            x1="535"
            y1="178.5"
            x2="421"
            y2="178.5"
          />
          <line
            className={this.props.classes.edges}
            x1="264"
            y1="173.09"
            x2="231.24"
            y2="173.09"
          />
          <line
            className={this.props.classes.edges}
            x1="231.24"
            y1="191.5"
            x2="264"
            y2="191.5"
          />
          <line
            className={this.props.classes.edges}
            x1="231.24"
            y1="210"
            x2="264"
            y2="210"
          />
          <line
            className={this.props.classes.edges}
            x1="231.24"
            y1="182.5"
            x2="264"
            y2="182.5"
          />
          <line
            className={this.props.classes.edges}
            x1="231.2"
            y1="200.6"
            x2="263.92"
            y2="200.6"
          />
          <line
            className={this.props.classes.edges}
            x1="231.2"
            y1="219.5"
            x2="264"
            y2="219.5"
          />
          <line
            className={this.props.classes.edges}
            x1="231.24"
            y1="228.75"
            x2="264"
            y2="228.75"
          />
          <line
            className={this.props.classes.edges}
            x1="264.69"
            y1="238.24"
            x2="231.43"
            y2="238.24"
          />
          <line
            className={this.props.classes.edges}
            x1="264.25"
            y1="247.17"
            x2="230.99"
            y2="247.17"
          />
          <line
            className={this.props.classes.edges}
            x1="263.69"
            y1="256.24"
            x2="230.43"
            y2="256.24"
          />
          <line
            className={this.props.classes.edges}
            x1="263.69"
            y1="178.5"
            x2="267.5"
            y2="178.5"
          />
          <line
            className={this.props.classes.edges}
            x1="106.5"
            y1="173.48"
            x2="106.5"
            y2="169.38"
          />
          <line
            className={this.props.classes.edges}
            x1="515.67"
            y1="133.83"
            x2="530.33"
            y2="133.83"
          />
          <line
            className={this.props.classes.edges}
            x1="515.67"
            y1="168"
            x2="515.67"
            y2="133.83"
          />
          <line
            className={this.props.classes.edges}
            x1="530.33"
            y1="167.5"
            x2="530.33"
            y2="133.83"
          />
          <path
            className={this.props.classes.edges}
            d="M1248.67,1063c0,8,14.67,8.23,14.67-.39"
            transform="translate(-733 -896.5)"
          />
          <ellipse
            className={this.props.classes.edges}
            cx="450.83"
            cy="140"
            rx="8.17"
            ry="6.17"
          />
          <line
            className={this.props.classes.edges}
            x1="458.3"
            y1="137.5"
            x2="443.37"
            y2="137.5"
          />
        </g>
        <BasementWindows />
        <BasementDoors />
        <BasementLights />
      </svg>
    );
  }
}

export default Basement;

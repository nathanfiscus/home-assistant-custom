import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { Colors } from '../theme';
import LockIndicator from './LockIndicator';

const styles = () => ({
  doors: {
    '&>line': {
      stroke: Colors.red[500],
      strokeMiterlimit: 10,
      strokeWidth: '2px',
      fill: 'none',
      filter: 'url(#redalert)'
    }
  },
  FrontDoorClosed: {
    transformOrigin: '100% 100%',
    transform: 'rotate(-45deg)',
    stroke: Colors.green[500] + '!important',
    filter: 'none!important',
    strokeWidth: '1px!important'
  },

  BackDoorClosed: {
    transformOrigin: '0% 0%',
    transform: 'rotate(-48deg)',
    stroke: Colors.green[500] + '!important',
    filter: 'none!important',
    strokeWidth: '1px!important'
  },

  MasterDoorClosed: {
    transformOrigin: '100% 100%',
    transform: 'rotate(-45deg)',
    stroke: Colors.green[500] + '!important',
    filter: 'none!important',
    strokeWidth: '1px!important'
  },

  UpstairsBathroomDoorClosed: {
    transformOrigin: '0% 100%',
    transform: 'rotate(-45deg)',
    stroke: Colors.green[500] + '!important',
    filter: 'none!important',
    strokeWidth: '1px!important'
  },

  MasterBathroomDoorClosed: {
    transformOrigin: '0% 0%',
    transform: 'rotate(45deg)',
    stroke: Colors.green[500] + '!important',
    filter: 'none!important',
    strokeWidth: '1px!important'
  },

  SouthBedroomDoorClosed: {
    transformOrigin: '0% 0%',
    transform: 'rotate(45deg)',
    stroke: Colors.green[500] + '!important',
    filter: 'none!important',
    strokeWidth: '1px!important'
  },

  NorthBedroomDoorClosed: {
    transformOrigin: '0% 0%',
    transform: 'rotate(-45deg)',
    stroke: Colors.green[500] + '!important',
    filter: 'none!important',
    strokeWidth: '1px!important'
  },

  GarageAccessDoorClosed: {
    transformOrigin: '0% 100%',
    transform: 'rotate(-45deg)',
    stroke: Colors.green[500] + '!important',
    filter: 'none!important',
    strokeWidth: '1px!important'
  },

  LaundryDoorClosed: {
    transformOrigin: '0% 0%',
    transform: 'rotate(-47deg)',
    stroke: Colors.green[500] + '!important',
    filter: 'none!important',
    strokeWidth: '1px!important'
  },

  PantryDoorClosed: {
    transformOrigin: '100% 100%',
    transform: 'rotate(-31deg)',
    stroke: Colors.green[500] + '!important',
    filter: 'none!important',
    strokeWidth: '1px!important'
  },

  GarageDoorClosed: {
    stroke: Colors.green[500] + '!important',
    filter: 'none!important',
    strokeWidth: '1px!important'
  },

  GarageDoorOpen: {
    strokeDasharray: '3px',
    strokeWidth: '2px',
    filter: 'none!important'
  }
});

@withStyles(styles)
class MainFloorDoors extends React.PureComponent {
  static propTypes = {
    classes: PropTypes.object
  };

  static defaultProps = {};

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
    return (
      <React.Fragment>
        <filter id="redalert" height="1500%" width="1500%" x="-500%" y="-500%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="0">
            <animate
              attributeName="stdDeviation"
              calcMode="paced"
              begin="0s"
              dur="2s"
              values="0;4;0;"
              repeatCount="indefinite"
            />
          </feGaussianBlur>
          <feOffset dx="0" dy="0" result="offsetblur" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="2" />
          </feComponentTransfer>

          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="redalert2">
          <feGaussianBlur in="SourceGraphic" stdDeviation="0">
            <animate
              attributeName="stdDeviation"
              calcMode="paced"
              begin="0s"
              dur="2s"
              values="0;4;0;"
              repeatCount="indefinite"
            />
          </feGaussianBlur>
          <feOffset dx="0" dy="0" result="offsetblur" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="2" />
          </feComponentTransfer>

          <feMerge>
            <feMergeNode in="offsetblur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <g id="doors" className={this.props.classes.doors}>
          <line
            id="MasterDoor"
            className={this.props.classes.MasterDoorClosed}
            x1="450.5"
            y1="266.17"
            x2="432.5"
            y2="248.5"
          />
          <line
            id="UpstairsBathroomDoor"
            className={this.props.classes.UpstairsBathroomDoorClosed}
            x1="470.29"
            y1="275.5"
            x2="453.67"
            y2="292"
          />
          <line
            id="MasterBathroomDoor"
            className={this.props.classes.MasterBathroomDoorClosed}
            x1="453.17"
            y1="128.17"
            x2="468.83"
            y2="144.17"
          />
          <line
            id="SouthBedroomDoor"
            className={this.props.classes.SouthBedroomDoorClosed}
            x1="458.17"
            y1="303.06"
            x2="459.74"
            y2="328.83"
          />
          <line
            id="NorthBedroomDoor"
            className={this.props.classes.NorthBedroomDoorClosed}
            x1="417.5"
            y1="308.17"
            x2="417.83"
            y2="330.83"
          />
          <line
            id="FrontDoor"
            className={this.props.classes.FrontDoorClosed}
            x1="304.17"
            y1="388.5"
            x2="283.5"
            y2="367.5"
          />
          <line
            id="GarageAccessDoor"
            className={this.props.classes.GarageAccessDoorClosed}
            x1="179.17"
            y1="304.34"
            x2="197.5"
            y2="286.83"
          />
          <line
            id="BackDoor"
            className={this.props.classes.BackDoorClosed}
            x1="135.83"
            y1="109.33"
            x2="153.17"
            y2="128.83"
          />
          <line
            id="LaundryDoor"
            className={this.props.classes.LaundryDoorClosed}
            x1="183.5"
            y1="312.17"
            x2="200.5"
            y2="330.83"
          />
          <line
            id="PantryDoor"
            className={this.props.classes.PantryDoorClosed}
            x1="40.17"
            y1="233.3"
            x2="36.26"
            y2="214.03"
          />
          <line
            id="GarageDoor"
            className={this.props.classes.GarageDoorClosed}
            x1="163.17"
            y1="487.83"
            x2="18.83"
            y2="487.83"
          />
        </g>
        <LockIndicator
          id="FrontDoorLock"
          width="50%"
          height="50%"
          transform="matrix(0.5 0 0 0.5 284 370)"
          fill={Colors.green[500]}
        />
        <LockIndicator
          id="BackDoorLock"
          width="50%"
          height="50%"
          transform="matrix(0.5 0 0 0.5 142 115)"
          fill={Colors.green[500]}
        />
        <LockIndicator
          id="GarageDoorLock"
          width="50%"
          height="50%"
          transform="matrix(0.5 0 0 0.5 160 285)"
          fill={Colors.green[500]}
        />
      </React.Fragment>
    );
  }
}

export default MainFloorDoors;

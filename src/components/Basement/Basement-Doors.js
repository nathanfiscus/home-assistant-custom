import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { Colors } from '../../theme';

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
  ToyRoomDoorClosed: {
    transformOrigin: '100% 100%',
    transform: 'rotate(61deg)',
    stroke: Colors.green[500] + '!important',
    filter: 'none!important',
    strokeWidth: '1px!important'
  },
  StorageRoomDoor: {
    transformOrigin: '100% 0%',
    transform: 'rotate(48deg)',
    stroke: Colors.green[500] + '!important',
    filter: 'none!important',
    strokeWidth: '1px!important'
  },
  UtilityRoomDoor: {
    transformOrigin: '0% 0%',
    transform: 'rotate(-45deg)',
    stroke: Colors.green[500] + '!important',
    filter: 'none!important',
    strokeWidth: '1px!important'
  },
  WestBedroomDoor: {
    transformOrigin: '100% 0%',
    transform: 'rotate(41deg)',
    stroke: Colors.green[500] + '!important',
    filter: 'none!important',
    strokeWidth: '1px!important'
  },
  BathroomDoor: {
    transformOrigin: '0% 100%',
    transform: 'rotate(-44deg)',
    stroke: Colors.green[500] + '!important',
    filter: 'none!important',
    strokeWidth: '1px!important'
  },
  EastBedroomDoor: {
    transformOrigin: '0% 100%',
    transform: 'rotate(36deg)',
    stroke: Colors.green[500] + '!important',
    filter: 'none!important',
    strokeWidth: '1px!important'
  }
});

@withStyles(styles)
class BasementDoors extends React.PureComponent {
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
        <g id="Doors" className={this.props.classes.doors}>
          <line
            id="StorageRoomDoor"
            className={this.props.classes.StorageRoomDoor}
            x1="210.7"
            y1="195.86"
            x2="231.18"
            y2="172.86"
          />
          <line
            id="UtilityRoomDoor"
            className={this.props.classes.UtilityRoomDoor}
            x1="268"
            y1="178.81"
            x2="291.2"
            y2="202.01"
          />
          <line
            id="WestBedroomDoor"
            className={this.props.classes.WestBedroomDoor}
            x1="421"
            y1="178.5"
            x2="399.25"
            y2="197.5"
          />
          <line
            id="BathroomDoor"
            className={this.props.classes.BathroomDoor}
            x1="439"
            y1="160.25"
            x2="421"
            y2="178.5"
          />
          <line
            id="EastBedroomDoor"
            className={this.props.classes.EastBedroomDoor}
            x1="392"
            y1="127.5"
            x2="414.13"
            y2="111.5"
          />
          <line
            id="ToyRoomDoor"
            className={this.props.classes.ToyRoomDoorClosed}
            x1="106.5"
            y1="169.38"
            x2="80"
            y2="154.5"
          />
        </g>
      </React.Fragment>
    );
  }
}

export default BasementDoors;

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { Colors } from '../theme';

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
class MainFloorLights extends React.PureComponent {
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
        <filter id="dropshadow" y="-75%" height="250%" x="-75%" width="250%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="4" />
          <feOffset dx="0" dy="0" result="offsetblur" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.75" />
          </feComponentTransfer>

          <feMerge>
            <feMergeNode in="offsetblur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <g id="GarageLights" className={this.props.classes.off}>
          <circle cx="51.02" cy="374.73" r="4.94" />
          <circle cx="122.27" cy="374.1" r="4.94" />
        </g>
        <g id="KitchenIsland" className={this.props.classes.off}>
          <circle cx="80.02" cy="188.33" r="4.94" />
        </g>
        <g id="DiningRoom" className={this.props.classes.off}>
          <circle cx="140.4" cy="189.25" r="4.94" />
        </g>
        <g id="KitchenStoveCan" className={this.props.classes.off}>
          <circle cx="37.15" cy="191.83" r="4.94" />
        </g>
        <g id="KitchenSinkCan" className={this.props.classes.off}>
          <circle cx="37.15" cy="148.6" r="4.94" />
        </g>
        <g id="KitchenIslandEast" className={this.props.classes.off}>
          <circle cx="80.02" cy="148.6" r="4.94" />
        </g>
        <g id="KitchenIslandWest" className={this.props.classes.off}>
          <circle cx="80.02" cy="226.85" r="4.94" />
        </g>
        <g id="KitchenSink" className={this.props.classes.off}>
          <circle cx="10.72" cy="120.04" r="4.94" />
        </g>
        <g id="DeckLights" className={this.props.classes.off}>
          <circle id="DeckLight-NW" cx="120.56" cy="80.35" r="4.94" />
          <circle id="DeckLight-NE" cx="119.4" cy="25.35" r="4.94" />
          <circle id="DeckLight-SE" cx="174.65" cy="25.35" r="4.94" />
          <circle id="DeckLight-SW" cx="174.65" cy="80.35" r="4.94" />
        </g>
        <g id="LivingRoomLight-NE" className={this.props.classes.off}>
          <circle cx="233.52" cy="148.23" r="4.94" />
        </g>
        <g id="LivingRoomLight-SE" className={this.props.classes.off}>
          <circle cx="293.86" cy="148.23" r="4.94" />
        </g>
        <g id="LivingRoomLight-SW" className={this.props.classes.off}>
          <circle cx="293.86" cy="230.06" r="4.94" />
        </g>
        <g id="LivingRoomLight-NW" className={this.props.classes.off}>
          <circle cx="232.02" cy="230.06" r="4.94" />
        </g>
        <g id="MudRoomLight" className={this.props.classes.off}>
          <circle cx="206.08" cy="290.64" r="4.94" />
        </g>
        <g id="LaundryRoomLight" className={this.props.classes.off}>
          <circle cx="206.08" cy="353.73" r="4.94" />
        </g>
        <g id="EntryLight" className={this.props.classes.off}>
          <circle cx="291.4" cy="329.25" r="4.94" />
        </g>
        <g id="HallLight-Linen" className={this.props.classes.off}>
          <circle cx="380.02" cy="280.76" r="4.94" />
        </g>
        <g id="PorchLight" className={this.props.classes.off}>
          <circle cx="289.72" cy="409.23" r="4.94" />
        </g>
        <g id="NWBedroomLight" className={this.props.classes.off}>
          <circle cx="392.75" cy="370.14" r="4.94" />
        </g>
        <g id="SWBedroomLight" className={this.props.classes.off}>
          <circle cx="490.33" cy="359.56" r="4.94" />
        </g>
        <g id="MasterWalkInClosetLight" className={this.props.classes.off}>
          <circle cx="495.08" cy="213.27" r="4.94" />
        </g>
        <g id="HallLight-Bedrooms" className={this.props.classes.off}>
          <circle cx="431.08" cy="291.33" r="4.94" />
        </g>
        <g id="MasterBathroomVanityWest" className={this.props.classes.off}>
          <rect
            x="532.91"
            y="129.95"
            width="3.01"
            height="16.64"
            rx="1.51"
            ry="1.51"
          />
        </g>
        <g id="MasterBathroomVanityEast" className={this.props.classes.off}>
          <rect
            x="532.91"
            y="162.37"
            width="3.01"
            height="16.64"
            rx="1.51"
            ry="1.51"
          />
        </g>
        <g id="MainBathroomVanity" className={this.props.classes.off}>
          <rect
            x="1212.7"
            y="1057.04"
            width="3.01"
            height="16.64"
            rx="1.51"
            ry="1.51"
            transform="translate(-594.57 1462.35) rotate(-90)"
          />
        </g>
        <g id="PantryLight" className={this.props.classes.off}>
          <circle cx="24.03" cy="243.36" r="4.94" />
        </g>
      </React.Fragment>
    );
  }
}

export default MainFloorLights;

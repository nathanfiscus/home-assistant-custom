import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { Colors } from '../theme';

const styles = () => ({
  edges: {
    stroke: Colors.blue[500],
    strokeMiterlimit: 10,
    fill: 'none'
  }
});

@withStyles(styles)
class MainFloorWindows extends React.PureComponent {
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
      <g id="Windows">
        <line
          className={this.props.classes.edges}
          x1="309.17"
          y1="109.5"
          x2="283.5"
          y2="109.5"
        />
        <line
          className={this.props.classes.edges}
          x1="252.83"
          y1="109.42"
          x2="278.17"
          y2="109.42"
        />
        <line
          className={this.props.classes.edges}
          x1="221.17"
          y1="109.5"
          x2="248"
          y2="109.5"
        />
        <line
          className={this.props.classes.edges}
          x1="35.5"
          y1="109.42"
          x2="6.83"
          y2="109.42"
        />
        <line
          className={this.props.classes.edges}
          x1="0.5"
          y1="144.17"
          x2="0.5"
          y2="114.83"
        />
        <line
          className={this.props.classes.edges}
          x1="221.17"
          y1="388.5"
          x2="193.5"
          y2="388.5"
        />
        <line
          className={this.props.classes.edges}
          x1="414.17"
          y1="425.17"
          x2="371.33"
          y2="425.17"
        />
        <line
          className={this.props.classes.edges}
          x1="513.5"
          y1="406.17"
          x2="467.17"
          y2="406.17"
        />
        <line
          className={this.props.classes.edges}
          x1="536.5"
          y1="247.14"
          x2="536.5"
          y2="290.17"
        />
        <line
          className={this.props.classes.edges}
          x1="495.17"
          y1="91.5"
          x2="531.5"
          y2="91.5"
        />
        <line
          className={this.props.classes.edges}
          x1="420.17"
          y1="109.83"
          x2="374.83"
          y2="109.5"
        />
      </g>
    );
  }
}

export default MainFloorWindows;

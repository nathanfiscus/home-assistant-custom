import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { Colors } from '../../theme';

const styles = () => ({
  edges: {
    stroke: Colors.blue[500],
    strokeMiterlimit: 10,
    fill: 'none'
  }
});

@withStyles(styles)
class BasementWindows extends React.PureComponent {
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
        <g id="Windows">
          <line
            className={this.props.classes.edges}
            x1="34"
            y1="18.5"
            x2="77.01"
            y2="18.5"
          />
          <line
            className={this.props.classes.edges}
            x1="241"
            y1="18.5"
            x2="286.67"
            y2="18.5"
          />
          <line
            className={this.props.classes.edges}
            x1="367"
            y1="18.5"
            x2="324"
            y2="18.5"
          />
          <line
            className={this.props.classes.edges}
            x1="535"
            y1="59.17"
            x2="535"
            y2="103.5"
          />
          <line
            className={this.props.classes.edges}
            x1="508"
            y1="312.5"
            x2="464"
            y2="312.5"
          />
          <line
            className={this.props.classes.edges}
            x1="408"
            y1="333.5"
            x2="363"
            y2="333.5"
          />
        </g>
      </React.Fragment>
    );
  }
}

export default BasementWindows;

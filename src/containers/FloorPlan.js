import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Divider } from 'material-ui';
import Stepper, { Step, StepButton } from 'material-ui/Stepper';
import { withStyles } from 'material-ui/styles';
import MainFloor from '../components/MainFloor';
import Clock from '../components/Clock';

// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';

// function mapStateToProps(state) {
// return {};
// }

// function mapDispatchToProps(dispatch) {
// return {};
// }

const styles = theme => ({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    display: 'flex',
    overflow: 'hidden',
    alignItems: 'stretch',
    '&>*': {
      flexGrow: '1',
      position: 'relative'
    },
    '&>div:nth-child(1)': {
      flexBasis: '20%',
      minWidth: '180px'
    },
    '&>.floorplan': {
      flexGrow: '5',
      flexBasis: '100%',
      padding: '30px'
    }
  },
  navbar: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.background.paper
  },
  navHeader: {
    textAlign: 'center',
    paddingTop: '20px'
  },
  stepper: {
    paddingTop: '10px',
    paddingBottom: '50px',
    '& div:nth-child(odd) button': {
      alignItems: 'left',
      textAlign: 'left',
      justifyContent: 'left'
    },
    '& div:nth-child(even)': {
      display: 'flex',
      '& span': {
        borderColor: '#696b71'
      }
    }
  },
  stepperButton: {
    //width: '100%'
  }
});

// @connect(mapStateToProps, mapDispatchToProps)
@withStyles(styles)
class FloorPlan extends React.Component {
  static propTypes = {
    classes: PropTypes.object
  };

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      floorIndex: 1
    };
  }

  // componentWillMount() {}

  // componentDidMount() {}

  // componentWillReceiveProps(nextProps) {}

  // shouldComponentUpdate(nextProps, nextState) {
  // return true;
  // }

  // componentWillUpdate(nextProps, nextState) {}

  // componentDidUpdate(prevProps, prevState) {}

  // componentWillUnmount() {}

  stepperChange = step => () => {
    this.setState({
      floorIndex: step
    });
  };

  render() {
    return (
      <div className={this.props.classes.container}>
        <div className={this.props.classes.navbar}>
          <Clock />
          <Divider />
          <Typography
            element="h2"
            variant="headline"
            gutterBottom
            className={this.props.classes.navHeader}
          >
            Floor
          </Typography>
          <Stepper
            activeStep={this.state.floorIndex}
            orientation="vertical"
            nonLinear
            className={this.props.classes.stepper}
          >
            <Step key="yard">
              <StepButton onClick={this.stepperChange(0)}>Yard</StepButton>
            </Step>
            <Step key="mainfloor">
              <StepButton
                onClick={this.stepperChange(1)}
                className={this.props.classes.stepperButton}
              >
                Main Floor
              </StepButton>
            </Step>
            <Step key="basement">
              <StepButton onClick={this.stepperChange(2)}>Basement</StepButton>
            </Step>
          </Stepper>
        </div>
        <div className="floorplan">
          {this.state.floorIndex === 1 && <MainFloor />}
        </div>
      </div>
    );
  }
}

export default FloorPlan;

import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from 'material-ui';
import { withStyles } from 'material-ui/styles';
import moment from 'moment';

const styles = () => ({
  container: {
    paddingTop: '25px',
    paddingBottom: '25px',
    textAlign: 'center',
    justifyText: 'justify'
  },
  time: {
    color: 'white'
  }
});

@withStyles(styles)
class Clock extends React.Component {
  static propTypes = {
    classes: PropTypes.object
  };

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    const TIME = moment(this.state.date).format('h:mm:ss A');
    const DATE = moment(this.state.date).format('dddd MMM D, YYYY');
    const { classes } = this.props;
    return (
      <div className={classes.container} {...this.props}>
        <Typography element="h1" variant="display2" className={classes.time}>
          {TIME}
        </Typography>
        <Typography element="h4" variant="title">
          {DATE}
        </Typography>
      </div>
    );
  }
}

export default Clock;

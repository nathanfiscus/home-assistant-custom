import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Divider } from 'material-ui';
import Sunny from './WeatherIcons/Sunny';
import Rainy from './WeatherIcons/Rainy';
import Snow from './WeatherIcons/Snow';
import { withStyles } from 'material-ui/styles';
import numeral from 'numeral';
import Humidity from './WeatherIcons/Humidity';
import Thermometer from './WeatherIcons/Thermometer';
import Navigation from 'material-ui-icons/Navigation';

const styles = theme => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    '& > div:first-child': {
      flex: '1 1 33%'
    },
    '& > div:nth-child(2)': {
      flex: '1 1 66%'
    },
    '& > div': {
      whiteSpace: 'nowrap',
      textAlign: 'center',
      verticalAlign: 'middle'
    }
  },
  weathericon: {
    width: '100%',
    fill: 'rgba(255,255,255,0.5)'
  },
  bottomContainer: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: '10px',
    paddingBottom: '10px',
    '& > div': {
      flex: '1 1 33%',
      textAlign: 'center',
      verticalAlign: 'middle'
    }
  },
  subItems: {
    color: theme.palette.secondary[500]
  },
  weathersubicon: {
    width: '24px',
    fill: theme.palette.secondary[500]
  },
  windDirectionText: {
    fontSize: '11px',
    textAlign: 'center'
  },
  windContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& > div': {
      textAlign: 'center',
      verticalAlign: 'middle',
      paddingLeft: '5px',
      paddingRight: '5px'
    }
  }
});

@withStyles(styles)
class Weather extends React.Component {
  static propTypes = {
    icon: PropTypes.string,
    temperature: PropTypes.number,
    classes: PropTypes.object,
    humidity: PropTypes.number,
    precipitationChance: PropTypes.number,
    highTemperature: PropTypes.number,
    lowTemperature: PropTypes.number,
    precipitationChanceType: PropTypes.string,
    windSpeed: PropTypes.number,
    windBearing: PropTypes.number
  };

  static defaultProps = {
    icon: 'sunny',
    temperature: 60.2,
    humidity: 0.52,
    precipitationChance: 0.32,
    highTemperature: 72,
    lowTemperature: 40,
    precipitationChanceType: 'rain',
    windBearing: 270
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillReceiveProps() {}

  // shouldComponentUpdate() {
  // return true;
  // }

  componentWillUpdate() {}

  componentDidUpdate() {}

  componentWillUnmount() {}

  getWeatherIcon = () => {
    switch (this.props.icon) {
      case 'sunny':
      default:
        return <Sunny className={this.props.classes.weathericon} />;
    }
  };

  getWindDirection = bearing => {
    const directions = [
      'N',
      'NNE',
      'NE',
      'ENE',
      'E',
      'ESE',
      'SE',
      'SSE',
      'S',
      'SSW',
      'SW',
      'WSW',
      'W',
      'WNW',
      'NW',
      'NNW'
    ];
    let val = Math.round(bearing / 22.5);
    return directions[val % 16];
  };

  render() {
    return (
      <div className={this.props.classes.outerContainer}>
        <div className={this.props.classes.container}>
          <div>{this.getWeatherIcon()}</div>
          <div>
            <Typography variant="display2">
              {this.props.temperature}
              <span>&deg;</span>
            </Typography>
          </div>
          <div>
            <Typography variant="subheading">
              <div>
                <div>{numeral(this.props.windSpeed).format('0') + ' mph'}</div>
                <div>
                  <div className={this.props.classes.windDirectionText}>
                    {this.getWindDirection(this.props.windBearing)}
                  </div>
                  <div>
                    <Navigation
                      style={{
                        width: '16px',
                        transform: `rotate(${this.props.windBearing}deg)`
                      }}
                    />
                  </div>
                </div>
              </div>
            </Typography>
          </div>
        </div>
        <Divider />
        <div className={this.props.classes.bottomContainer}>
          <div className={this.props.classes.subItems}>
            <Humidity className={this.props.classes.weathersubicon} />
            <Typography variant="button">
              {numeral(this.props.humidity).format('0.0%')}
            </Typography>
          </div>
          <div className={this.props.classes.subItems}>
            {this.props.precipitationChanceType === 'rain' ? (
              <Rainy className={this.props.classes.weathersubicon} />
            ) : (
              <Snow className={this.props.classes.weathersubicon} />
            )}
            <Typography variant="button">
              {numeral(this.props.precipitationChance).format('0.0%')}
            </Typography>
          </div>
          <div className={this.props.classes.subItems}>
            <Thermometer className={this.props.classes.weathersubicon} />
            <Typography variant="button">
              {numeral(this.props.highTemperature).format('0')}
              <span>&deg;</span>
              <span>&nbsp;/&nbsp;</span>
              {this.props.lowTemperature}
              <span>&deg;</span>
            </Typography>
          </div>
        </div>
      </div>
    );
  }
}

export default Weather;

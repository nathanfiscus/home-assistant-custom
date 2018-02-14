import React from 'react';
import PropTypes from 'prop-types';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import { MuiThemeProvider, withStyles } from 'material-ui/styles';
import { PlatformTheme, Colors } from '../theme';

import Routes from './Routes';
import ApplicationError from './ApplicationError';

const styles = () => ({
  '@global': {
    body: {
      backgroundColor: Colors.base[500]
    }
  }
});

@withStyles(styles)
export default class Root extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    children: PropTypes.oneOfType([PropTypes.object, PropTypes.node])
  };

  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      error: '',
      errorInfo: []
    };
  }

  componentDidCatch(error, info) {
    this.setState({
      hasError: true,
      error: error.message,
      errorInfo: (
        <div>
          {info.componentStack
            .split(/\n/g)
            .map((item, index) => <div key={index}>{item}</div>)}
        </div>
      )
    });
  }

  render() {
    const { store, history } = this.props;
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <MuiThemeProvider theme={PlatformTheme}>
            <div>
              {!this.state.hasError ? (
                <Routes rootPath="/" />
              ) : (
                <ApplicationError
                  error={this.state.error}
                  errorInfo={this.state.errorInfo}
                />
              )}
            </div>
          </MuiThemeProvider>
        </ConnectedRouter>
      </Provider>
    );
  }
}

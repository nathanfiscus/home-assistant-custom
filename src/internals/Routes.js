import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import FloorPlan from '../containers/FloorPlan';

export default class Routes extends React.Component {
  static propTypes = {
    rootPath: PropTypes.string
  };

  render() {
    return (
      <Switch>
        <Route component={FloorPlan} />
      </Switch>
    );
  }
}

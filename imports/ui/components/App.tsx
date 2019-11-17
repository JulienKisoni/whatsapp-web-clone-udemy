import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Main from './Main';
import Login from './Login';
import NormalTheme from '../../theme/NormalTheme';

const App = (props:any): JSX.Element => {
  return (
  
    <ThemeProvider theme={NormalTheme}>
      <Router>
        <Switch>
          <Route path="/" component={Login} exact />
          <Route path="/chats" component={Main} exact />
        </Switch>
      </Router>
    </ThemeProvider>
  )
};

export default App;
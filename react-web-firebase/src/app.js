import React from 'react';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LoginContainer from './components/login/LoginBox';

class App extends React.Component {

  render() {
    return (
      <AppContainer>
        <MuiThemeProvider>
            <BrowserRouter>
              <Switch>
                <Route exact path='/' component={LoginContainer} />
              </Switch>
            </BrowserRouter>
        </MuiThemeProvider>
      </AppContainer>
    );
  }
}
export default App;

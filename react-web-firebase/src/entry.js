import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

ReactDOM.render(
  <App />,
  document.getElementById('react'),
);

if (module.hot) {
  module.hot.accept('./app', () => {
    ReactDOM.render(<App />, document.getElementById('react'));
  });
}

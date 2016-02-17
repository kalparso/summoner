'use strict';

import React from 'react';
window.React = React;
import Router from 'react-router';
import { IndexRoute, Route } from 'react-router';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/lib/createBrowserHistory';

import Header from './components/Header.react';
import bodyText from './components/bodyText.react';
import AddSummoner from './components/AddSummoner.react';
import Footer from './components/Footer.react';



var Shell = React.createClass({
  render() {
    return (
      <body>
        <Header />
        {this.props.children}
        <Footer />
      </body>
    );
  },
});
	
let history = createBrowserHistory();

var routes = (
  <Route path='/' component={Shell}>
    <IndexRoute component={bodyText} />
  </Route>);

function startApp(endpoints) {
  var el = document.getElementById('react');
  ReactDOM.render(<Router history={history}>{routes}</Router>, el);
}

startApp();

'use strict';

import React from 'react';
window.React = React;
import Router from 'react-router';
import { IndexRoute, Route } from 'react-router';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/lib/createBrowserHistory';

import Header from './components/Header.react';
import bodyText from './components/bodyText.react';
import Footer from './components/Footer.react';
import SummonerForm from './components/SummonerForm.react';


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
  // TODO: should only be rendering the Router here (as you're doing above).  The way you're doing the SummonerForm components
  // would be rendered for any route within the Shell component, which is fine for now with the one route, but ultimately there will
  // be more routes.  These SummonerForm
  // components should be at the top and bottom of your bodyText component (and also please always start
  // the component name with a capital letter (so BodyText), or you could make a Body component the component
  // your IndexRoute renders and then your Body Component could be something like the below.  And you could pass in a
  // prop styleClass (that's just what I named it, but you can call it anything obviously) to help manipulate the compoent
  // if anything needs to be different between the two.  I don't think you'll need to in this case, but was just giving an example
  //'use strict';

  // import React from 'react';
  // import bodyText from './components/bodyText.react';
  // import SummonerForm from './components/SummonerForm.react';

  // export default React.createClass({
  //   render() {
  //     return (
  // <div>
  //   <SummonerForm styleClass='summonerFormTop'>
  //   <BodyText>
  //   <SummonerForm styleClass='summonerFormBottom'>
  // <div>
  //     );
  //   },

  // });
  ReactDOM.render(<SummonerForm/>, document.getElementById('summonerFormTop'));
  ReactDOM.render(<SummonerForm/>, document.getElementById('summonerFormBottom'));
}

startApp();

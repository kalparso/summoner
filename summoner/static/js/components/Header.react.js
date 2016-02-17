'use strict';

import React from 'react';

export default React.createClass({
  render() {
    return (
      <header>
      	<div className="container">
      		<div className="logo">
      			<a href="">
      				<img src='/_dist/images/vantagesports_logo.svg' />
      			</a>
      		</div>
      		<div className="login">
               <a href="">Login <img src='/_dist/images/caret.png' /></a>
            </div>	
      	</div>
      	</header>
    );
  },

});

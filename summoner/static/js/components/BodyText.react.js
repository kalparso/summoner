'use strict';

import React from 'react';
import SummonerForm from './SummonerForm.react';

export default React.createClass({
  render() {
    return (
	<bodyText>	
    <div className="top_banner">
		<div className="container">
            <div className="table-div">
               <div id="table-cell" className="table-cell">
                  <h1 className="heading">Train Like the Pros.</h1>
                  <p className="tagline">Vantage Sports analyzes every aspect of your game on an unrivaled level. <br /> Sign up for Vantage Sports <b>free</b> today to <br /> receive access to the only training platform endorsed by the pros.</p>
				  <div className="form-div">
					 <div id="summonerFormTop">
					 	<SummonerForm />
					 </div>
					 <p className="note">Vantage Sports provides a free analysis to all user who sign up.<br /> Additional charges will apply on a per-match basis.</p>
                  </div>
               </div>
            </div>
         </div>
   	</div>
	<div className="take-tour">
         <div className="container">
            <div className="take-t-inner">
               <p>Not convinced yet?</p>
               <a href="" className="take-a-tour">Take a Tour</a>
               <span>Screenshots, dataset breakdowns and more</span>
            </div>
         </div>
      </div>
	  <div className="testimonial">
         <div className="container">
            <div className="testimonial-inner">
               <div className="c-otr">
                  <div className="item">
                     <p>"I use Vantage Sports to break down all my games for the best possible insight on improving my performance. I'd be lost without<br /> their unique analysis and perspective on my game."</p>
                     <div className="c-name">
                        <img src='/_dist/images/baby.jpg' /> <span>Zachary "Sneaky" Scuderi, AD Carry for Cloud9</span>
                     </div>
                     <div className="see-more">
                        <a href="">See what other professionals are saying about Vantage Sports</a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
	  <div className="logo-section">
         <div className="conatiner">
            <p>We provide analytics to the best team and players worldwide </p>
            <ul className="logo-ul">
               <li><a href=""><img width="130" src='/_dist/images/teamliquid_white.svg' /></a></li>
               <li><a href=""><img src='/_dist/images/immortals_white.svg' /></a></li>
               <li><a href=""><img src='/_dist/images/h2k_white.svg' /></a></li>
               <li><a href=""><img width="90" src='/_dist/images/solomid_white.svg' /></a></li>
               <li><a href=""><img width="120" src='/_dist/images/c9_white.svg' /></a></li>
            </ul>
         </div>
      </div>
	  <div className="form-section">
         <div className="container">
            <div className="inner">
               <div className="logo-b">
                  <a href=""><img src='/_dist/images/vantagesports_logo.svg' /></a>
               </div>
               <div className="form-div">
                  <div id="summonerFormBottom">
                  		<SummonerForm />
                  </div>
                  <p className="note"><span>Vantage Sports provides a free analysis to all user who sign up.</span><br /> Additional charges will apply on a per-match basis. </p>
               </div>
            </div>
         </div>
      </div>
   </bodyText>
    );
  },
});

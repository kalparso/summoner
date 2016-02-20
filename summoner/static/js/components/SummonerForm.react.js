'use strict';

import React from 'react';
import request from 'superagent';
import $ from 'jquery';
import { History } from 'react-router';
import { getSummoner } from '../actions/AppActionCreators';


var el = "";



export default React.createClass({
  mixins: [History],

  getInitialState() {
    return {pending: false, resultMessage: ''};
  },

  render() {
    var { pending, resultMessage } = this.state;
    var submitValue = pending ? 'Submitting...' : 'Submit';
    return (
      <form onSubmit={this._submitSummonerName}>
     <div className="form-group">
        <input className="form-controls" ref="summonerName"  type="text" placeholder="Summoner Name"  required  />
      </div>
      <div className="form-group">
        <input className="form-controls" ref="summonerEmail" type="email" placeholder="Email Address"  required />
      </div>      
      <div className="btn-group">
       <button className="btn summoner-submit" type="submit" >{submitValue}</button>
      </div>
      <div className='error'>{resultMessage}</div>
     </form>  
    );
  },

  _submitSummonerName(e) {
    e.preventDefault();
    var summonerName = this.refs.summonerName.value;
    var summonerEmail = this.refs.summonerEmail.value;
    el = this;
    request.post('https://api-staging.vantagesports.com/summoners/v1/registerSummoner')
        .send({ summoner_name: summonerName, email: summonerEmail, region:'na' })
        .set('Accept', 'application/json')
        .end(function(err, res){
                      var resultMessage;
                      if (err) {
                        resultMessage = err.response.body.message;
                      } else {
                        resultMessage = `${res.body.summoner.summoner_name} is registered`;
                      }
                      el.setState({pending: false, resultMessage: resultMessage});
                      $(".form-controls").val("");
                    });
    
    
    this.setState({pending: true, resultMessage: ''});
  }

});

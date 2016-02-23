'use strict';

import React from 'react';
import { getSummoner } from '../actions/AppActionCreators';

export default React.createClass({
  getInitialState() {
    return {pending: false, resultMessage: ''};
  },

  render() {
    var { pending, resultMessage } = this.state;
    var submitValue = pending ? 'Submitting...' : 'Submit';
    return (
      <form onSubmit={this._submitSummonerName}>
        <div className="form-group">
          <input className="form-controls" ref="summonerName"  type="text" placeholder="Summoner Name" required />
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
    getSummoner(summonerName, summonerEmail, this._summonerResponseReceived);
    this.setState({pending: true, resultMessage: ''});
  },

  _summonerResponseReceived(success) {
    if (success) { 
    	this.refs.summonerName.value = "";
    	this.refs.summonerEmail.value = "";
    	this.setState({pending: false, resultMessage: 'Your request has been received successfully'}); 
    } else {
    	this.setState({pending: false, resultMessage: 'Some error has been occurred while submitting your request, Please verify the Summoner Name and try again.'}); 
    }
  },

});

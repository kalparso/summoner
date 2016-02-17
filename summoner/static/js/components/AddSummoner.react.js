'use strict';

import React from 'react';
import { History } from 'react-router';
import { getSummoner } from '../actions/AppActionCreators';

export default React.createClass({
  mixins: [History],

  getInitialState() {
    return {pending: false, resultMessage: '',};
  },

  render() {
    var { pending, resultMessage } = this.state;
    var submitValue = pending ? 'Searching...' : 'Submit';
    return (
      <form className='summoner-form' onSubmit={this._submitSummonerName}>
        <input type='text' ref='summonerName' className='summoner-input' placeholder='Enter Summoner Name' required />
        <input type='submit' className='summoner-submit' value={submitValue} />
        <div className='error'>{resultMessage}</div>
      </form>
    );
  },

  _submitSummonerName(e) {
    e.preventDefault();
    var summonerName = this.refs.summonerName.value;
    // TODO: send request to get Summoner
    // getSummoner(summonerName, this._summonerResponseReceived);
    this.setState({pending: true, resultMessage: ''});
  },

  _summonerResponseReceived(success) {
    if (success) this.history.pushState(null, '/confirmSummoner');
    else this.setState({pending: false, resultMessage: 'could not locate Summoner Name'});
  },

});

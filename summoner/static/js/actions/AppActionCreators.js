'use strict';

import { dispatch } from '../AppDispatcher';
import ActionTypes from '../constants/ActionTypes';
import { getSummoner } from '../apis/vs-summoner.js';

var _pending = {};

function abortPendingRequests(key) {
  if (!key) throw new Error('Empty key');

  var pending = _pending[key];
  if (pending) {
    pending._callback = function(){};
    pending.abort();
    _pending[key]= null;
  }  
}

function dispatchResult(successKey, callback) {
  return function(result) {
    if (result.success) dispatch(successKey, { data: result.data });
    callback(result.success);
  };
}

export default {

  getSummoner(summonerName, messageCallback) {
    setTimeout(function() {
      var key = ActionTypes.SUMMONER_PENDING;
      abortPendingRequests(key);
      dispatch(key);

      var callback = dispatchResult(ActionTypes.SUMMONER_RECEIVED, messageCallback);
      _pending[key] = getSummoner(summonerName, callback);
    }, 0);
  },  

};

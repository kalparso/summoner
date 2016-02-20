'use strict';

import { send } from '../utils/SummonerUtil';

const _urlBase = 'https://api-staging.vantagesports.com/summoners/v1'

export function getSummoner(summonerName, summonerEmail, callback) {
  var payload = { summoner_name: summonerName, email: summonerEmail, region:'na' };
  return send(_urlBase, '/registerSummoner' , 'POST', payload, callback);
}

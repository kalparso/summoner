'use strict';


import request from 'superagent';

// Allows us to change verbosity to debug issues in the wild.
var w = window || {};
w.vsReqVerbose = false;

export function send(_urlBase, path, method, data, callback) {
  if (w.vsReqVerbose) console.log('Sending %o request to %o. Data: %o', method, _urlBase+path, data);

  var req = buildJSONRequest(_urlBase, path, method, data);
  req.end(handleResponse(callback));
  return req;
}

function buildJSONRequest(host, path, method, data) {
  var url = host + path;

  var req;
  if (method === 'GET') req = request.get(url);
  else if (method === 'PUT') req = request.put(url);
  else if (method === 'POST') req = request.post(url);
  else if (method === 'DELETE') req = request.del(url);
  else if (method === 'HEAD') req = request.head(url);
  else {
    console.error('unrecognized method: ' + method);
    return false;
  }

  req = req.set('Content-Type', 'application/json');

  if (data) {
    if (method === 'GET' || method === 'HEAD') req.query(data);
    else req.send(data);
  }
  return req;
}

function handleResponse(callback) {
  return function(err, response) {
    if (!callback) return;
    // https://visionmedia.github.io/superagent/#error-handling
    // When errors occur, the err.response is populated with all the fields of
    // normal response properties.
    response = response || err.response || {};
    var result = {success: !err, code: response.status};
    if (err) {
      // Most of our APIs return a json payload with http errors that include a
      // message describing the error. Use that if possible.
      var remoteErrMsg = (safeJSONParse(response.text) || {}).message;
      result.message = remoteErrMsg || err.toString();
    } else {
      result.data = response.body;
    }
    callback(result);
  };
}

'use strict';

import {Dispatcher} from 'flux';

const flux = new Dispatcher();

export function register(callback) {
  return flux.register(callback);
}

export function waitFor(ids) {
  return flux.waitFor(ids);
}

export function dispatch(type, action = {}) {
  if (!type) throw new Error('No type specified.');

  flux.dispatch({ type, ...action });
}

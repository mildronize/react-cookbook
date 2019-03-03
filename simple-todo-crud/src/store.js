/*
Simple state manangement inspired by Anas
v0.0.1
*/

import * as store from './store';

var _store = {}
var rootRef = null;

// Not test yet
export function register(key, value) {
    _store[key] = value;
}

// Not test yet
export function getStore(key) {
    if (!_store[key]) throw "Store not found: " + key;
    return _store[key];
}

export function setRoot(ref) {
    rootRef = ref;
}

export function getRoot() {
    return rootRef;
}

export default store;
export * from './store';

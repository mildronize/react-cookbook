/*
Simple state manangement inspired by Anas
v0.0.1
*/

import * as store from './store';

var rootRef = null;

export function setRoot(ref) {
    rootRef = ref;
}

export function getRoot() {
    return rootRef;
}

export default store;
export * from './store';

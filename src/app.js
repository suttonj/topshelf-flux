
import 'babel/polyfill';

import React from 'react/addons';
import FastClick from 'fastclick';
import emptyFunction from 'react/lib/emptyFunction';
import App from './components/App';
import Dispatcher from './core/Dispatcher';
import AppActions from './actions/AppActions';
import ActionTypes from './constants/ActionTypes';
import BookLists from './api/books.js';
import mockapi from './api/mockapi';

let path = decodeURI(window.location.pathname);
let setMetaTag = (name, content) => {
  // Remove and create a new <meta /> tag in order to make it work
  // with bookmarks in Safari
  let elements = document.getElementsByTagName('meta');
  [].slice.call(elements).forEach((element) => {
    if (element.getAttribute('name') === name) {
      element.parentNode.removeChild(element);
    }
  });
  let meta = document.createElement('meta');
  meta.setAttribute('name', name);
  meta.setAttribute('content', content);
  document.getElementsByTagName('head')[0].appendChild(meta);
};

function run() {
    //Mock data
  mockapi.init();
  let books = BookLists.getBookData();
  console.log(books);
  
  // Render the top-level React component
  let props = {
    path: path,
    books: books,
    onSetTitle: (title) => document.title = title,
    onSetMeta: setMetaTag,
    onPageNotFound: emptyFunction
  };
  let element = React.createElement(App, props);
  React.render(element, document.body);

  // Update `Application.path` prop when `window.location` is changed
  Dispatcher.register((payload) => {
    if (payload.action.actionType === ActionTypes.CHANGE_LOCATION) {
      element = React.cloneElement(element, {path: payload.action.path});
      React.render(element, document.body);
    }
  });
}

// Run the application when both DOM is ready
// and page content is loaded
Promise.all([
  new Promise((resolve) => {
    if (window.addEventListener) {
      window.addEventListener('DOMContentLoaded', resolve);
    } else {
      window.attachEvent('onload', resolve);
    }
  }).then(() => FastClick.attach(document.body)),
  new Promise((resolve) => AppActions.loadPage(path, resolve))
]).then(run);

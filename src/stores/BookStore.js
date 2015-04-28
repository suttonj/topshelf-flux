import Dispatcher from '../core/Dispatcher';
import ActionTypes from '../constants/ActionTypes';
import PayloadSources from '../constants/PayloadSources';
import EventEmitter from 'eventemitter3';
import assign from 'react/lib/Object.assign';
import _ from 'lodash';

var CHANGE_EVENT = 'change';

var loading = false;
var book = {}, list = [], selected = null;

// Method to load book data from mock API
function loadBookData(data) {
  list = data.results.list;
  selected = list[0];
}

// Method to set the currently selected book variation
function setSelected(index) {
  selected = list[index];
}


// Extend bookStore with EventEmitter to add eventing capabilities
var BookStore = _.extend({}, EventEmitter.prototype, {

  // Return list data
  getBookList() {
    return list;
  },
  
  // Return book data
  getBook() {
    return book;
  },

  // Return selected book
  getSelected() {
    return selected;
  },

  // Emit Change event
  emitChange() {
    this.emit('change');
  },

  // Add change listener
  addChangeListener(callback) {
    this.on('change', callback);
  },

  // Remove change listener
  removeChangeListener(callback) {
    this.removeListener('change', callback);
  },
  
  isLoading() {
    return loading;
  }

});

BookStore.dispatcherToken = Dispatcher.register((payload) => {
  var action = payload.action;

  switch (action.actionType) {

    case ActionTypes.RECEIVE_DATA:
      loadBookData(action.data);
      break;

    // Respond to SELECT_BOOK action
    case ActionTypes.SELECT_BOOK:
      setSelected(action.data);
      break;
      
    default:
      // Do nothing

  }
  
  BookStore.emitChange();

});

export default BookStore;
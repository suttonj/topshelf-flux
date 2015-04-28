'use strict';

import AppActions from '../actions/AppActions';
import http from 'superagent';

export default {
  getBookData(listName) {
    let data = JSON.parse(localStorage.getItem('booklist'));
    AppActions.receiveList(data);
    return data;
  },
  
  requestBookList(listName, cb) {
      http.get('/api/list/${listName}')
          .accept('application/json')
          .end((err, res) => {
            AppActions.receiveList(res);
            if (cb) {
              cb();
            }
          });
  }
};

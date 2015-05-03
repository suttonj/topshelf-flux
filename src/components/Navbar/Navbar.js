/*
 * React.js Starter Kit
 * Copyright (c) 2014 Konstantin Tarkus (@koistya), KriaSoft LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react'; // eslint-disable-line no-unused-vars

class Navbar {
  
  componentDidMount() {
    window.addEventListener('scroll', () => {
      if ($(document).scrollTop() > 100){  
          $('header').addClass("sticky");
      }
      else{
          $('header').removeClass("sticky");
      }
    });
  }
  
  render() {
    return (
      <header className="">
        <div className="container">
          <a className="navbar-brand row" href="/">
            <img src={require('./logo-small.png')} width="38" height="38" alt="React" />
            <span>React.js Starter Kit</span>
          </a>
        </div>
      </header>
    );
  }

}

export default Navbar;

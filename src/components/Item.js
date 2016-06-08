/*
* @Author: mithril
* @Date:   2016-06-08 14:06:56
* @Last Modified by:   mithril
* @Last Modified time: 2016-06-08 14:20:19
*/

'use strict';


import React, { Component } from 'react';

export class Item extends Component {
  render() {
    return (
      <div className="item-container">
        <h3>{this.props.name}</h3>
        <p>{this.props.desc}</p>
        {this.props.chirldren}
      </div>
    );
  }
}
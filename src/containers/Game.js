/*
* @Author: mithril
* @Date:   2016-06-08 14:24:51
* @Last Modified by:   mithril
* @Last Modified time: 2016-06-08 14:44:26
*/

import React, { Component } from 'react';

export class Game extends Component {
  const {gamelist} = this.props
  render() {
    return (
        <ul>
          {gamelist.map(function(game){
            return <li key={game.id}>{game.name}</li>;
          })}
        </ul>
    );
  }
}
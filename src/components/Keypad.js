import React, { Component } from 'react';



export default class Keypad extends Component {

  tickle = function(){console.log('Entering password...')}

  render(){
    return <input onKeyUp={this.tickle} type="password" />
  }
}

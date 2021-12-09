import React, { Component } from 'react';
import ringImg from './ring.png';
export default class Ring extends Component {
  render() {
    return (
      <>
        <img src={ringImg} alt="ringWiki" width="200" />
        <div>Ring</div>
      </>
    );
  }
}

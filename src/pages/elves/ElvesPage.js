import React, { Component } from 'react';
import './ElvesPage.css';
import elves from './EldarAvari.png';
export default class ElvesPage extends Component {
  render() {
    return (
      <>
        <h1>Eldar Avari</h1>
        <div className="wrappler">
          <img src={elves} alt="Eldar Avari" className="pictire" />
        </div>

        <a href="https://lotr.fandom.com/ru/wiki/%D0%A0%D0%B0%D0%B7%D0%B4%D0%B5%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5_%D1%8D%D0%BB%D1%8C%D1%84%D0%BE%D0%B2">
          The source of information
        </a>
      </>
    );
  }
}

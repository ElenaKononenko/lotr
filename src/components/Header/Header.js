import React, { Component } from 'react';
import './Header.css';
export default class Header extends Component {
  render() {
    return (
      <header>
        <ul className="header_list">
          <li className="header_list_item">Elves</li>
          <li className="header_list_item">Dwarfs</li>
          <li className="header_list_item">Humans</li>
        </ul>
      </header>
    );
  }
}

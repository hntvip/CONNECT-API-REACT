import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
export default class Menu extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="collapse navbar-collapse navbar-ex1-collapse">
          <ul className="nav navbar-nav">
            <li>
              <NavLink to="/" activeClassName="active"> Home </NavLink>
            </li>
            <li>
              <NavLink to="/product-list" activeClassName="active"> Quan Ly Products </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

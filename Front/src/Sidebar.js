// sidebar.js

import React from 'react';
import {slide as Menu } from 'react-burger-menu';
import ReactDOM from 'react-dom';
import './css/sidebar.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
export default class SideBar extends React.Component {

  render(){
  return (
    <Menu className="menu">
      <Link to="/home">
        <div class="box-1">
          <div class="btn btn-one">
            <span>Saisir Absense</span>
          </div>
        </div>
      </Link>
      <Link to="/home">
        <div class="box-1">
          <div class="btn btn-one">
            <span>Reserver Salle</span>
          </div>
        </div>
      </Link>
      <Link to="/home">
        <div class="box-1">
          <div class="btn btn-one">
            <span>Envoyer Cours</span>
          </div>
        </div>
      </Link>
      <Link to="/home">
        <div class="box-1">
          <div class="btn btn-one">
            <span>Parametre</span>
          </div>
        </div>
      </Link>
      
    </Menu>
  )
}
}
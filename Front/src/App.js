// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SideBar from './Sidebar';
import Square from './Listeabs.js';
import './css/App.css';
import Footer from './footer.js';
import Navb from './Navbar.js';
import Login from './Login.js';
import Formabs from './Formabs.js';


var email;
var lien;
var group;
var modul=["ALG","ANA1","ANA2","ANA3"];
var eleves=[{mat:170186,nom:'yaici',prenom:'walid',absent:null},
{mat:170186,nom:'yaici',prenom:'walid',absent:null},
{mat:170190,nom:'deroues',prenom:'noufel',absent:null},
{mat:170001,nom:'etic',prenom:'dream team',absent:null},
{mat:170125,nom:'guendouz',prenom:'yanis',absent:null},]

export default class App extends React.Component {
  
  render(){
  return (

    <div id="App">
      <p>{email}</p>
      <Route path="/" exact render={()=>(<Login onClick={this.handleLoginClick} link={lien}/>)}/>
      <Route path="/home" render={() => (<Navb id={email} />)} />
      <Route path="/home" component={SideBar} />
      <div id="page-wrap">
      <Route path="/home/Form" render={() => (<Formabs link="/home/Abs" modules={modul}/>)}/>
        <Route path="/home/Abs" render={() => (<Square eleves={eleves} />)}/>
      </div>
      <Footer/>
    </div>


  )}

  handleLoginClick(em,admin,ens,etu){
    
    if(!true){
      lien="";
      alert("Erreur d'authentification");
      }else {
      if(ens) lien="/home/Form";
      email=em;
      console.log(email);
    }
  }

 
}
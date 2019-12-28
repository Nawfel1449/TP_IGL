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
import FormAjout from './Formajout.js';
import ListeEtudiant from './ListeEtudiant.js'
import axios from 'axios';
import {Redirect} from 'react-router';

var email;
var lien;
var group;
var modul=["ALG","ANA1","ANA2","ANA3"];
var eleves=[];

export default class App extends React.Component {

	constructor(props) {
    super(props)
    this.handleFormabsClick= this.handleFormabsClick.bind(this)
		this.handleFormajoutClick= this.handleFormajoutClick.bind(this)

  }

	render(){
  return (

    <div id="App">
      <p>{email}</p>
      <Route path="/" exact render={()=>(<Login onClick={this.handleLoginClick} link={lien}/>)}/>
      <Route path="/home" render={() => (<Navb id={email} />)} />
      <Route path="/home" component={SideBar} />
      <div id="page-wrap">
        <Route path="/home/Form" render={() => (<Formabs link="/home/Abs" modules={modul} onClick={this.handleFormabsClick}/>)}/>
        <Route path="/home/Abs" render={() => (<Square eleves={eleves} />)}/>
				<Route path="/home/AjouterEtudiant" render={() => (<FormAjout link="/home/Listetudiant" onClick={this.handleFormajoutClick}/>)}/>
				<Route path="/home/Listetudiant" render={() => (<ListeEtudiant eleves={eleves} />)}/>

      </div>
      <Footer/>
    </div>


  )}

  handleLoginClick(em,admin,ens,etu){
    if(!true){
      alert("Erreur d'authentification");
      }else {
      if(ens) lien="/home/Form";
			else if (admin) lien="/home/AjouterEtudiant";
      email=em;
			this.props.history.push('/dashboard')
      console.log(email);
    }
  }

	handleFormabsClick(){
		axios.get(`http://127.0.0.1:8000/api/Student`)
			.then(res => {
        eleves=res.data;
				this.setState({});

      })
	}

	handleFormajoutClick(groupe){
		group=groupe;
		eleves=[];
		axios.get(`http://127.0.0.1:8000/api/Student`)
			.then(res => {
        eleves=res.data;
				this.setState({});

      })
	}


}

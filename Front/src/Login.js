import React,{Component} from 'react';
import './css/Login.css';
//import { browserHistory } from 'react-router-dom';
import {Button,Form,FormGroup,Label,Input} from 'reactstrap';
import {FacebookLoginButton} from 'react-social-login-buttons';
import { BrowserRouter as Router, Route, Link,Redirect } from "react-router-dom";


var admin;
var ens;
var etu;
var authenntification=true;
var email;

class Login extends Component {


	handleCheckClic(adm,en,et){
		admin=adm;
		ens=en;
		etu=et;
		//if(admin) link="/home";
	}


	


	render(){

		return(
			<Form className="login-form">
				<h1 className="font-weight-bold text-center" id="esiH1">
					ESI SCOLARITE
				</h1>
				
				<h2 className="text-center" id="esiH2">Bienvenue</h2>
				<img id="cadenas"src="./cadenas.png" />
				<FormGroup>
					<Label>Email</Label>
					<Input type="email" placeholder="Email" id="mail"/>
				</FormGroup>
				<FormGroup>
					<Label>Password</Label>
					<Input type="Password" id="pwd" placeholder="Password"/>
				</FormGroup>
				<label class="container">Admin
				  <input type="radio"  name="radio" onClick={()=>this.handleCheckClic(true,false,false)}/>
				  <span class="checkmark"></span>
				</label>
				<label class="container">Enseignant
				  <input type="radio"  name="radio" onClick={()=>this.handleCheckClic(false,true,false)}/>
				  <span class="checkmark"></span>
				</label>
				<label class="container">etudiant
				  <input type="radio"  name="radio" onClick={()=>this.handleCheckClic(false,false,true)}/>
				  <span class="checkmark"></span>
				</label>
				<Link to={this.props.link}><Button className="btn-lg btn-danger btn-block mt-4 btn-custum" onClick={()=>this.props.onClick(document.getElementById("mail").value,admin,ens,etu)}>
					Log in </Button></Link>
				<div className="text-center">
					<a href="#" >Sign up</a>
					<span className="p-2">|</span>
					<a href="#">Forgot Password</a>
				</div>
			</Form>
		)
	}
}

export default Login;

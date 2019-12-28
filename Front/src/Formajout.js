import React,{Component} from 'react';
import './css/Formabs.css';
import {Button,Form,FormGroup,Label,Input} from 'reactstrap';
import {FacebookLoginButton} from 'react-social-login-buttons';
import { BrowserRouter as Router, Route, Link,Redirect } from "react-router-dom";

export default class FormAjout extends React.Component{
	render(){
		return (
			<form className="Abs-form">
				<img id="Logo_esi"src="../ESI_Logo.png" />
				<h1 className="font-weight-bold text-center" id="formabs-title">
					Formulaire d'ajout d'un etudiant a un groupe
				</h1>
				<FormGroup id="test">
		          <Label for="exampleSelect" className="font-weight-bold">Nom Etudiant</Label>
		          <Input type="texte" placeholder="Nom" id="exampleSelect"></Input>
		    </FormGroup>
				<FormGroup id="test">
		          <Label for="exampleSelect" className="font-weight-bold">Prenom Etudiant</Label>
		          <Input type="texte" placeholder="Prenom" id="exampleSelect"></Input>
		    </FormGroup>
				<FormGroup id="test">
		          <Label for="exampleSelect" className="font-weight-bold">Matricule Etudiant</Label>
		          <Input type="number"placeholder="Matricule"  id="exampleSelect"></Input>
		    </FormGroup>
		    <FormGroup>
		          <Label for="exampleSelect" className="font-weight-bold">Groupe</Label>
		          <Input type="select" name="select" id="groupe">
		            <option>1</option>
		            <option>2</option>
		            <option>3</option>
		            <option>4</option>
		            <option>5</option>
		          </Input>
		    </FormGroup>
				<Link to={this.props.link}><Button className="btn-lg btn-danger btn-block mt-4 btn-custum"
				onClick={()=>this.props.onClick(document.getElementById("groupe").value)}>
					Soumettre </Button></Link>
			</form>
	    )
	}
}

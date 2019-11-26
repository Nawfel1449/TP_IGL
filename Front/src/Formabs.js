import React,{Component} from 'react';
import './css/Formabs.css';
import {Button,Form,FormGroup,Label,Input} from 'reactstrap';
import {FormControl} from 'react-bootstrap';
import {FacebookLoginButton} from 'react-social-login-buttons';
import { BrowserRouter as Router, Route, Link,Redirect } from "react-router-dom";
import Bootstrap from "react-bootstrap";

export default class Formabs extends React.Component{
	render(){
		return (
			<Form className="Abs-form">
				<img id="Logo_esi"src="../ESI_Logo.png" />
				<h1 className="font-weight-bold text-center" id="formabs-title">
					Formulaire de saisie des absences
				</h1>


				<FormGroup id="test">
		          <Label for="exampleSelect" className="font-weight-bold">Nom du Module</Label>
		          <Input type="select" name="select" id="exampleSelect">
		          	{this.props.modules.map((module,index) =>(
				        <option>{module}</option>
				      ))}
		          </Input>
		        </FormGroup>
		        <FormGroup>
		          <Label for="exampleSelect" className="font-weight-bold">Groupe</Label>
		          <Input type="select" name="select" id="exampleSelect">
		            <option>1</option>
		            <option>2</option>
		            <option>3</option>
		            <option>4</option>
		            <option>5</option>
		          </Input>
		        </FormGroup>
				<FormGroup id="tes">
		          <Label for="exampleDate" className="font-weight-bold">Date</Label>
		          <Input type="date" name="date" id="exampleDate" placeholder="date placeholder" />
		        </FormGroup>
		        <FormGroup>
		          <Label for="exampleTime"  className="font-weight-bold">Time</Label>
		          <Input type="time" name="time" id="exampleTime" placeholder="time placeholder" />
		        </FormGroup>
				<Link to={this.props.link}><Button className="btn-lg btn-danger btn-block mt-4 btn-custum"
				onClick={()=>this.props.onClick()}>
					Soumettre </Button></Link>

			</Form>
	    )
	}
}

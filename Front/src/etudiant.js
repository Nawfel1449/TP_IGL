import React from 'react';
import ReactDOM from 'react-dom';
import './vendor/bootstrap/css/bootstrap.min.css';
import './fonts/font-awesome-4.7.0/css/font-awesome.min.css';
import './vendor/animate/animate.css';
import './vendor/select2/select2.min.css';
import './vendor/perfect-scrollbar/perfect-scrollbar.css';
import './css/util.css';
import './css/main.css';


class Etudiant extends React.Component{
	render(){
		return (
		<div class="row">
				<div class="cell" data-title="Matricule" with={25} height = {30}>
					{this.props.us.Serial_Number}
				</div>
				<div class="cell" data-title="Nom">
					{this.props.us.First_Name}
				</div>
				<div class="cell" data-title="Prenom">
					{this.props.us.Last_Name}
				</div>
				<div class="cell" data-title="E-mail">
					{this.props.us.Email}
				</div>

	    </div>
	    )
	}
}

export {Etudiant}

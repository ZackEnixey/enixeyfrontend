import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';

// COMPONENTS, IMAGES
import Notification from '../otherMenuItems/notifications/Notification';

//ACTIONS
import * as usersActions from '../../actions/usersActions';

let listOfUsers = [ 
	{'username': 'demo', 'password': 'demo'},
	{'username': 'Zack', 'password': 'Zack'},
	{'username': 'Enixey', 'password': 'Enixey'},
	{'username': 'abba', 'password': 'abba'},
]

class FrontPageSignUp extends Component {

	constructor(props) {
	    super(props);
	    this.state = {
		    userName: '',
		    password: '',
		    currentMode: 'logIn',
		    redirect: false,
		    isAdminLoggedIn: false,
		    adminOrUser: "user",
		    notification: "",
            isNotificationDialog: false
      	};
	    this.handleSubmitLogIn = this.handleSubmitLogIn.bind(this);
	    this.handleSubmitSignUp = this.handleSubmitSignUp.bind(this);
	    this.handleChangeUserName = this.handleChangeUserName.bind(this);
	    this.handleChangePassword = this.handleChangePassword.bind(this);
	    this.closeNotificationParent = this.closeNotificationParent.bind(this);
        this.closeNotification = this.closeNotification.bind(this);
	}

	rand() {
	    return Math.random().toString(30).substr(2); // remove `0.`
	};

	token() {
	    return this.rand() + this.rand() + this.rand() + this.rand() + this.rand(); // to make it longer
	};

	handleChangeUserName (event) {
		this.setState({ userName: event.target.value });
	}
	
	handleChangePassword(event){			
		this.setState({ password: event.target.value });
	}

	closeNotificationParent(){
        this.setState({
            isNotificationDialog: false
        })
    }

    closeNotification = (isOpen) => {
        console.log("closeNotification parent", isOpen);
        this.setState({
            isNotificationDialog: isOpen
        })
    }

	handleSubmitLogIn(event) {
		var me = this;
		var token = this.token();

		axios({
			method: 'post',
			url: 'http://localhost:9090/login',
			data: {
				"email": this.state.userName,
				"password": this.state.password,
	
			},
			headers: { 'authorization': 'Bearer '+ token  }
		}).then(response => {
			me.setState({
				redirect: true
			})
			localStorage.clear();
			localStorage.setItem("idAppUser", response.data.id);
			localStorage.setItem("email", response.data.email);
			localStorage.setItem("token", response.data.token);
			localStorage.setItem("password", this.state.password);
			localStorage.setItem("authority", response.data.authorities[0].authority);
			this.props.usersActions.setLoggedInUserDataWithLocalStorage(localStorage);
			
		})
		.catch(error => {
			console.log(error.response);
			localStorage.setItem("email", 	 this.state.userName);
			localStorage.setItem("password", this.state.password);
			this.props.usersActions.setLoggedInUserDataWithLocalStorage(localStorage);
			if(error != null && error.response != null){
				if(error.response.data.includes("change temporary password")){
					me.setState({ currentMode: 'changeThePassword' })
				}
				if(error.response.data.includes("Bad credentials")){
					alert("The user: " + this.state.userName + " does not exist in the data base");
				}
			} 
		});
	}

	handleSubmitSignUp(event){
		var me = this;

		axios({
			method: 'post',
			url: 'http://localhost:9090/signup',
			data: {
				"email": this.state.userName,
				"password": this.state.password,
			}
		}).then(response => {
			console.log(response);	
			me.setState({
                notification: "WELCOME! Please comfirm you email",
                isNotificationDialog: true
            })
		})
		.catch(error => {
			console.log(error.response);
			me.setState({
                notification: error.response.data,
                isNotificationDialog: true
            })
		});
		
	}

	switchLogInSignUp(){
		if(this.state.currentMode === 'logIn'){ 
			this.setState({ currentMode: 'signUp' })
		}else{
			this.setState({ currentMode: 'logIn' })
		}
	}


    render() {

   		console.log(this.state.currentMode);
   		console.log(this.state.redirect);

    	if(this.state.currentMode === 'changeThePassword'){
    		return <Redirect to="/changepassword" />;
    	}else {
    		if (this.state.redirect) {
				return <Redirect to="/dashboard" />;
			}else { 
		        return ( 
		            <div id="frontPageWrapper" >
		            	<div className="center positioningParentDiv" >

		            		<div className="signUpSquaresDimentions positioningChildDiv">
		            			<div id="logInInputForm" className="logInForm">
							        <div>
							          	<div className="logInInputFormText"> Username: </div>
							          	<div>	 <input className="logInInputForm" type="text" name="username" value={this.state.userName} onChange={this.handleChangeUserName} onFocus={this.closeNotificationParent} /> </div>
							        	<div className="logInInputFormText"> Password: </div>
							          	<div>	 <input className="logInInputForm" type="password" name="password" value={this.state.password} onChange={this.handleChangePassword} onFocus={this.closeNotificationParent} /> </div>
							        </div>
							        {this.state.currentMode === 'logIn' ?
							        		<button type="submit" onClick={() => this.handleSubmitLogIn()} className="logInInputFormButton webAppGreenColorForBackground">LOG IN</button>
							        	:
							        		<button type="submit" onClick={() => this.handleSubmitSignUp()} className="logInInputFormButton webAppGreenColorForBackground">SIGN UP</button>
							        }
							      </div>
		            		</div>

		            		<div className="signUpSquaresDimentions positioningChildDiv backgroundColorBlue signUpText fontFamily">
			            		{this.state.currentMode === 'logIn' ? 
				            		<div className="logInForm">
				            			<div className="logInTextTitle"> Enixey </div>
				            			<div className="marginTopTen"> The WebApp for privatisation of vocabulary. Learn what matters, study pragmatically! </div>
			      				        <div className="marginTopTen"> Don't have an account? Do not hessitate, make one right now. </div>
			      				        <input  onClick={() => this.switchLogInSignUp()} id="logInInputFormButton" type="submit" value="SIGN UP" className="logInInputFormButton webAppWhiteColorForBackground" />
				            		</div>
				            		:
				            		<div className="logInForm">
				            			<div className="logInTextTitle"> Enixey </div>
				            			<div className="marginTopTen"> The WebApp for privatisation of vocabulary. Learn what matters, study pragmatically! </div>
			      				        <div className="marginTopTen"> Don't look any further! Boost your words absorbtion to the maximum. </div>
				            			<input  onClick={() => this.switchLogInSignUp()} id="logInInputFormButton" type="submit" value="LOG IN" className="logInInputFormButton webAppWhiteColorForBackground" />
				            		</div>
			            		}
		            		</div>

		            	</div>
		            	<Notification notification={this.state.notification} isNotificationDialog={this.state.isNotificationDialog} closeNotification={this.closeNotification} />

		            </div>
	        	);
	    	}
    	}
    }
}

function mapStateToProps(state, ownProps){
    return {
        listOfUsers: state.listOfUsers,
    }
}

function mapDispatchToProps(dispatch){
    return{
        usersActions: bindActionCreators(usersActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FrontPageSignUp);

import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';

// COMPONENTS, IMAGES
import logoImage from'./components/images/demoIcon.png';

//actions
import * as usersActions from './actions/usersActions';

class InviteUser extends Component {

	constructor(props) {
	    super(props);
	    this.state = {
		    userName: '',
		    redirect: false,
      	};
	    this.confrimEmail = this.confrimEmail.bind(this);
	}

	componentDidMount() {
		const { location: { search } } = this.props;
		const values = queryString.parse(search);
		console.log(values);
		values.token 
		this.props.usersActions.setUserToken(values.token);
	}

	confrimEmail() {
		console.log("shouuuuuuting SCRAM SCAM");
		console.log(this.props.users.token);
		var me = this;
		axios({
            method: 'post',
            url: 'http://localhost:9090/appuser/confirm/'+this.props.users.token,
        }).then(response => {
        	console.log("Zooooooooooooraaaan");
            console.log(response); 
            me.setState({
            	redirect: true
            })
        })
        .catch(error => {
            var recievedError = error +" ";
            console.log("Zooooooooooooraaaan"); 
            me.setState({
            	redirect: true
            })
            console.log(recievedError);
        });
	}

	render() {

		if (this.state.redirect) {
			console.log("redirect is TRUE");
		    return <Redirect push to="/changeThePassword" />;
		}else{ 
			console.log("redirect is TRUE");
			return(
			    <div>
			        
			        
			    	<Link to="/">
						<button type="submit" onClick={() => this.confrimEmail()} className="comfirmButton webAppGreenColorForBackground"> comfirm</button>
					</Link>

					<img id="frontPageLogoImage" className="centerImageInsideOfDiv frontPageLogoDimension marginTopFifty" src={logoImage} />

 			    </div>
		    )
		}
	}
}


function mapStateToProps(state, ownProps){
    return {
        listOfUsers: state.listOfUsers,
        users: state.users,
    }
}

function mapDispatchToProps(dispatch){
    return{
        usersActions: bindActionCreators(usersActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InviteUser);
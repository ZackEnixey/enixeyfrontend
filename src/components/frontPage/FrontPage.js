import React, { Component } from 'react';
import logoImage from'../images/logoEnixey.png';
import FrontPageLogo from './FrontPageLogo';
import FrontPageSignUp from './FrontPageSignUp';

var browserHeightGlobal = '700px';
class FrontPage extends Component {

	constructor(props) {
	    super(props);
	    this.state = {
		    browserHeight: '700px',
		    frontPageSignUp: false
	    };
	    this.switchComponent = this.switchComponent.bind(this);
	 }

	switchComponent (value) {
		console.log("switchComponent function");
		if(this.state.frontPageSignUp){
			this.setState({ frontPageSignUp: false })
		}else{
			this.setState({ frontPageSignUp: true })
		}
        
    }

    render() {
    	if(this.state.frontPageSignUp){
    		return( 
    			<FrontPageSignUp switchComponent = {this.switchComponent} />
    		)
    	}else{
    		return(	    			
	    		<FrontPageLogo switchComponent = {this.switchComponent} />	    		
    		)
    	}
    }
}

export default FrontPage;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// COMPONENTS
import settingsIcon from '../images/settingsIcon.png';
import profilePhoto from '../images/profilePhoto.png';
import readingIcon from '../images/readingIcon.png';
import wordListIcon from '../images/wordListIcon.png';
import dropDownIcon from '../images/dropDownIcon.png';
import hamburgerMenuIcon from '../images/hamburgerMenuIcon.png';
import demoIcon from '../images/demoIcon.png';
import home from '../images/home.png';
import otherFeatures from '../images/otherFeatures.png';

class MobileHeader extends Component {

	constructor(props) {
	    super(props);
	    this.state = {
		    browserHeight: '700px',
		    currentHeight: document.documentElement.clientHeight,
	    };
	    this.resize = this.resize.bind(this);
	    this.headerMenuItemAction = this.headerMenuItemAction.bind(this);
	}

	resize() {
    	this.setState({
    		currentHeight: document.documentElement.clientHeight
    	})
	}

	componentDidMount() {
		window.addEventListener('resize', this.resize)
		console.log('did');
	}

	componentWillUnmount() {
	  	window.removeEventListener('resize', this.resize)
	  	console.log('will');
	}

	headerMenuItemAction(variable){
		var x = document.getElementById("mobileMenu");
		var y = document.getElementById("MobileMenuBackground");

		if (x.style.display === "block") {
		    	x.style.display = "none";
		    	y.style.display = "none";
		} else {
		    	x.style.display = "block";
		    	y.style.display = "block";
		}
	}

    render() {   
    	let dashboardHeight = this.state.currentHeight-60;

		return( 
			<div id="mobileBase" className="mobileBase">
				<div id="MobileMenuBackground" className="MobileMenuBackground" style={{"height": dashboardHeight}}> </div>
			  	<div id="mobileMenu" className="mobileMenu"> 


					<Link to="/dashboard" style={{'textDecoration': 'none'}} >
				  		<div onClick={() => this.headerMenuItemAction('smth1')} className="dropDownMenuText"> 
							<img id="frontPageLogoImage" className="headerMenuIconDropDown" src={home} /> <div className="headerDropDownText">HOME</div> 
						</div>
					</Link>					
					<Link to="/profile" style={{'textDecoration': 'none'}} >
						<div onClick={() => this.headerMenuItemAction('smth1')} className="dropDownMenuText"> 
							<img id="frontPageLogoImage" className="headerMenuIconDropDown" src={profilePhoto} /> <div className="headerDropDownText">PROFILE</div>
						</div>
					</Link>
					<Link to="/settings" style={{'textDecoration': 'none'}} >
						<div onClick={() => this.headerMenuItemAction('smth1')} className="dropDownMenuText"> 
							<img id="frontPageLogoImage" className="headerMenuIconDropDown" src={settingsIcon} /> <div className="headerDropDownText">SETTINGS</div> 
						</div>
					</Link>
					<Link to="/openedBook" style={{'textDecoration': 'none'}} >
						<div onClick={() => this.headerMenuItemAction('smth1')} className="dropDownMenuText"> 
							<img id="frontPageLogoImage" className="headerMenuIconDropDown" src={readingIcon} /> <div className="headerDropDownText">READING</div>
						</div>
					</Link>
					<Link to="/wordList" style={{'textDecoration': 'none'}} >
						<div onClick={() => this.headerMenuItemAction('smth1')} className="dropDownMenuText"> 
							<img id="frontPageLogoImage" className="headerMenuIconDropDown" src={wordListIcon} /> <div className="headerDropDownText">WORD LIST</div>
						</div>
					</Link>
					<Link to="/otherFeatures" style={{'textDecoration': 'none'}} >
				  		<div onClick={() => this.headerMenuItemAction('smth1')} className="dropDownMenuText"> 
							<img id="frontPageLogoImage" className="headerMenuIconDropDown" src={otherFeatures} /> <div className="headerDropDownText">OTHER FEATURES</div> 
						</div>
					</Link>

					


			  	</div>
			</div>
		)
    }
}

export default MobileHeader;
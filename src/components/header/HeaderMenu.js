import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// COMPONENTS
import forumIcon from '../images/forumIcon.png';
import profilePhoto from '../images/profilePhoto.png';
import readingIcon from '../images/readingIcon.png';
import wordListIcon from '../images/wordListIcon.png';
import dropDownIcon from '../images/dropDownIcon.png';
import hamburgerMenuIcon from '../images/hamburgerMenuIcon.png';
import demoIcon from '../images/demoIcon.png';
import home from '../images/home.png';
import otherFeatures from '../images/otherFeatures.png';

// ACTION
import * as dashboardActions from '../../actions/dashboardActions';

class HeaderMenu extends Component {

	constructor(props) {
	    super(props);
	    this.state = {
		    browserHeight: '700px',
	    };
	    this.headerMenuItemAction = this.headerMenuItemAction.bind(this);
	}

	headerMenuItemAction(){
		console.log("HeaderMenu");
		console.log(this.props.users);
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

	closeDropDownMenu(){
		alert('empty function');
	}

    render() {
    	if(this.props.mode === 'big'){ 
			return( 
				<div id="headerMenuWrapper" className="headerMenuWrapper" style={{"float": "right"}} > 					
					<Link to="/dashboard">
						<div id="headerMenuWordList" onClick={() => this.headerMenuItemAction('Homepage')} className="displayInlineBlock"> 
							<img id="frontPageLogoImage" className="headerMenuIcon" src={home} /> 
						</div>
					</Link>					
			        <Link to="/wordList">
						<div id="headerMenuWordList" onClick={() => this.headerMenuItemAction('headerMenuWordList')} className="displayInlineBlock"> 
							<img id="frontPageLogoImage" className="headerMenuIcon" src={wordListIcon} /> 
						</div>
					</Link>
					<Link to={"/openedBook/"+this.props.selectedBook.url}>
						<div id="headerMenuReading"  onClick={() => this.headerMenuItemAction('openedBook')} className="displayInlineBlock circleOnProfilePhoto"> 
							<img id="frontPageLogoImage" className="headerMenuIcon" src={readingIcon} /> 
						</div>
					</Link>
					<Link to="/forum">	
						<div id="headerMenuSettings" onClick={() => this.headerMenuItemAction('headerMenuSettings')} className="displayInlineBlock"> 
							<img id="frontPageLogoImage" className="headerMenuIcon" src={forumIcon} /> 
						</div>
					</Link>
					<Link to="/profile">
						<div id="headerMenuProfilePhoto" onClick={() => this.headerMenuItemAction('headerMenuProfilePhoto')} className="displayInlineBlock"> 
							<img id="frontPageLogoImage" className="headerMenuIcon circleOnProfilePhoto" src={profilePhoto} /> 
						</div>		
					</Link>
					<Link to="/otherFeatures">
						<div id="headerMenuWordList" onClick={() => this.headerMenuItemAction('otherFeatures')} className="displayInlineBlock"> 
							<img id="frontPageLogoImage" className="headerMenuIcon" src={otherFeatures} /> 
						</div>
					</Link>
				</div>
			)
		}else{
			return( 
				<div id="headerMenuWrapper" style={{"float": "right"}} > 
					<div id="headerMenuDropDown"  className="displayInlineBlock cursorPointer cursorPointer"> <img id="frontPageLogoImage" onClick={() => this.headerMenuItemAction()} className="headerMenuIcon cursorPointer" src={hamburgerMenuIcon} /> </div>
				</div>
			)
		}
    }
}

function mapStateToProps(state, ownProps){
    return {
        selectedBook: state.selectedBook,
        dashboardBookList: state.dashboardBookList,
        users: state.users,
    }
}

function mapDispatchToProps(dispatch){
    return{
        dashboardActions: bindActionCreators(dashboardActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderMenu);
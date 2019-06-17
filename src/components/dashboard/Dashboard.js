import React, { Component } from 'react';
import Header from '../header/Header';
import MobileHeader from '../header/MobileHeader';
import SubHeader from '../header/SubHeader';
import DashboardBookCollection from './DashboardBookCollection';
import settingsIcon from '../images/settingsIcon.png';
import profilePhoto from '../images/profilePhoto.png';
import readingIcon from '../images/readingIcon.png';
import wordListIcon from '../images/wordListIcon.png';
import dropDownIcon from '../images/dropDownIcon.png';
import hamburgerMenuIcon from '../images/hamburgerMenuIcon.png';
import demoIcon from '../images/demoIcon.png';

class Dashboard extends Component {

	constructor(props) {
	    super(props);
	    this.state = {
		    browserHeight: '700px',
	    };
	    this.headerMenuItemAction = this.headerMenuItemAction.bind(this);
	}

	headerMenuItemAction(what){
		console.log(what);
	}

    render() {
		return( 
			<div id="dashboardComponent" >   
				<Header/>  
                <div id="subHeaderDivWrapper"  > 
                	<SubHeader />
                </div>
                <div id="dashboardDivWrapper" className="dashboardDivWrapper" > 
               		<DashboardBookCollection />
               	</div>
			</div>
		)
    }
}

export default Dashboard;
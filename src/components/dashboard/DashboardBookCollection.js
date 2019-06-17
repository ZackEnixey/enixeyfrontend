import React, { Component } from 'react';
import settingsIcon from '../images/settingsIcon.png';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as dashboardActions from '../../actions/dashboardActions';

class DashboardBookCollection extends Component {

	constructor(props) {
	    super(props);
	    this.state = {
		    browserHeight: '700px',
		    currentHeight: document.documentElement.clientHeight,
	    };
	    this.resize = this.resize.bind(this);
	}

	resize() {
    	this.setState({
    		currentHeight: document.documentElement.clientHeight
    	})
	}

	componentDidMount() {
		window.addEventListener('resize', this.resize);
	}

	componentWillUnmount() {
	  	window.removeEventListener('resize', this.resize);
	}

    openSelectedBook(item){
    	console.log(item.url);
        //this.props.dashboardActions.setSelectedBookByUrl(item.url);
    }

    render() {

		let listOfBooks = this.props.dashboardBookList.slice(0).reverse().map( item => { 
			return( 
                <Link to={"/openedBook/"+item.url}>		
    				<div className="dashboardBookWrapper" onClick={() => this.openSelectedBook(item)}>
    					 <img id="frontPageLogoImage" className="dashboardBook" src={item.image} />
    				</div>		
                </Link>
			)
		})

		let dashboardHeight = this.state.currentHeight-99;

		return( 
			<div id="dashboardBookCollectionComponentWrapper" > 
				<div id="mainDashboardWrapper" className="mainDashboardWrapper" style={{"height": dashboardHeight }}>
					{listOfBooks}
				</div>
			</div>
		)
    }
}


function mapStateToProps(state, ownProps){
    return {
        dashboardBookList: state.dashboardBookList,
        selectedBook: state.selectedBook,
        users: state.users,
    }
}

function mapDispatchToProps(dispatch){
    return{
        dashboardActions: bindActionCreators(dashboardActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardBookCollection);

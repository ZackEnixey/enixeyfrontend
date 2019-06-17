import React, { Component } from 'react';
import logoImage from'../images/logoEnixey.png';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// ACTIONS
import * as frontPageActions from '../../actions/profileActions';

var browserHeightGlobal = '700px';
class FrontPageLogo extends Component {

	constructor(props) {
	    super(props);
	    this.state = {
		    browserHeight: '700px',
		    color: 'white',
		    currentHeight: document.documentElement.clientHeight,
	    };
	    this.switchComponent = this.switchComponent.bind(this);
	 	this.resize = this.resize.bind(this);
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

	switchComponent() {
		this.props.switchComponent("text")
	}

    render() {
    	browserHeightGlobal = this.state.currentHeight;

    	let rows = this.props.frontPageDemoBookList.map( item => { 
			return( 
				<div id="frontPageScrollingBottomAd" className="frontPageScrollingBottomAd floatingTextParent" > 
					<div className="floatingTextChild floatingTextChildCoordinatesAd widthHeightHunderdPercent adText fontFamily"> 
						<div id="floatingTextTitle"> {item.title} </div> 
						<div id="floatingTextSubtitle"> {item.subtitle} </div> 
					</div>
					<img id="frontPageScrollingBottomAdImage" src={item.image} />
				</div>
			)
		})

        return (
            <div id="frontPageWrapper">

            	<div className="frontPageBackgroundColor" style={{"height": browserHeightGlobal}}>
	            	<div id="frontPageLogoImageWrapper" style={{"paddingTop": "40vmin"}} className="floatingTextParent" onClick={this.switchComponent} >
	            		
		            		<div id="frontPageLogIn" className="frontPageLogIn floatingTextChild floatingTextChildCoordinatesLogIn logInSignUpDimentions fontFamily"> 
		            			Log in/Sign up
		            		</div>


	            		<img id="frontPageLogoImage" className="centerImageInsideOfDiv frontPageLogoDimension" src={logoImage} />
	            	</div>
	            </div>

	            <div onClick={this.switchComponent} id="frontPageScrollingBottomAdWrapper" className="frontPageScrollingBottomAdWrapper">
	            	{rows}
	            </div>

            </div>
        );
    }
}


function mapStateToProps(state, ownProps){
    return {
        frontPageDemoBookList: state.frontPageDemoBookList,
    }
}

function mapDispatchToProps(dispatch){
    return{
        frontPageActions: bindActionCreators(frontPageActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FrontPageLogo);
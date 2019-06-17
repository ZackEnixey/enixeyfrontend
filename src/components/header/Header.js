import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HeaderMenu from './HeaderMenu';
import MobileHeader from './MobileHeader';
import SearchForm from './SearchForm';
import logoFlatImage from'../images/flatLogoEnixey.png';
import smallLogoEnixey from'../images/smallLogoEnixey.png';


class Header extends Component {

	constructor(props) {
	    super(props);
	    this.state = {
		    browserHeight: '700px',
		    mode: '',
	    };
	    this.resize = this.resize.bind(this);
	    this.headerMenuItemAction = this.headerMenuItemAction.bind(this);
	}


	resize() {
		if(document.documentElement.clientWidth <= 600){ 
	    	if(this.state.mode !=='small'){ 
		    	console.log('small ' + document.documentElement.clientWidth);
		    	this.forceUpdate();
		    }
	    }

	    if(document.documentElement.clientWidth > 600){ 
	    	if(this.state.mode !=='big'){ 
		    	console.log('big ' + document.documentElement.clientWidth);
		    	this.forceUpdate();
		    }		
	    }
	}

	componentDidMount() {
		window.addEventListener('resize', this.resize)
		console.log('did');
	}

	componentWillUnmount() {
	  	window.removeEventListener('resize', this.resize)
	  	console.log('will');
	}

	headerMenuItemAction(what){
		console.log(what);
	}



    render() {

    	if(document.documentElement.clientWidth > 680){ 
			return( 
				<div id="headerComponentWrapper" className="header" > 
				<MobileHeader />
					<Link to="/dashboard">
						<div className="headerComponents headerLogoWidth" onClick={() => this.headerMenuItemAction('logo')} > 
							<img id="frontPageLogoImage" className="headerLogoImage cursorPointer" src={logoFlatImage} /> 
						</div>
					</Link>
					<div className="headerComponents headerSearchWidth"  > <SearchForm mode={'big'}/> </div> 
					<div className="headerComponents headerMenuWidth" > <HeaderMenu mode={'big'}/> </div>
				</div>
			)
		}else{
			return( 
				<div id="headerComponentWrapper" className="header"> 
				<MobileHeader />
					<Link to="/dashboard">
						<div className="headerComponents  headerLogoWidthSmall" onClick={() => this.headerMenuItemAction('logo')}> 
							{ document.documentElement.clientWidth > 400 ?
								<img id="frontPageLogoImage" className="headerLogoImage cursorPointer" src={logoFlatImage} /> 
							:
								<img id="frontPageLogoImage" className="headerLogoImage cursorPointer" src={smallLogoEnixey} /> 
							}
						</div>
					</Link>	
					<div className="headerComponents  headerSearchWidthSmall" > <SearchForm mode={'small'} /> </div> 
					<div className="headerComponents  headerMenuWidthSmall" > <HeaderMenu mode={'small'} toggleWoleScreenDropDownMenu={this.props.toggleWoleScreenDropDownMenu} /> </div>
				</div>
			)
		}
    }
}

export default Header;
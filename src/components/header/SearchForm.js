import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// ACTIONS
import * as dashboardActions from '../../actions/dashboardActions';

class SearchForm extends Component {

	constructor(props) {
	    super(props);
	    this.state = {
		    browserHeight: '700px',
		    name: '',
		    inputedValue: '',
		    showSearchDropdown: false,
      		shareholders: [{ name: '' }],
	    };
	 }

	handleNameChange = (evt) => {
	    var inputedValue = evt.target.value;
	    console.log(inputedValue);

	    this.setState({
	    	inputedValue: inputedValue,
	    	showSearchDropdown: true
	    })
	}
	  
	handleSubmit = (evt) => {
	    const { name, shareholders } = this.state;
	    alert(`Incorporated: ${name} with ${shareholders.length} shareholders`);
	}

    render() {
    	let rows = [];

    	if(this.state.inputedValue !== ''){ 
	    	rows = this.props.listOfMaterialToSearch.map( item => {
				if(item.searchId.includes(this.state.inputedValue)){ 
					return( 		
						<div onClick={() => this.openSelectedBook(item)}>
							{item.title}
						</div>			
					)
				}
			})
		}

		return( 
			<div id="headerMenuWrapper"> 
				
		        <input
			        type="text"
			        placeholder="  search"
			        onChange={this.handleNameChange}
			        className="searchFormField"
		        />
		        <button onClick={this.handleSubmit} className="searchFormButton cursorPointer"> SEARCH </button>
				
		        {this.state.showSearchDropdown === true ? 
			        <div id="searchDropDownResults" className="dropdownSearchContent">
						<div onClick={() => this.headerMenuItemAction('smth1')} className="dropDownSearchText"> 
							{rows}
						</div>
					</div>
				:
					<div id="searchDropDownResults" className="dropdownSearchContentHide">
						<div onClick={() => this.headerMenuItemAction('smth1')} className="dropDownSearchText"> 
							{rows}
						</div>
					</div>
				}
				


			</div>
		)
    }
}

function mapStateToProps(state, ownProps){
    return {
        listOfMaterialToSearch: state.listOfMaterialToSearch,
    }
}

function mapDispatchToProps(dispatch){
    return{
        dashboardActions: bindActionCreators(dashboardActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// COMPONENTS
import addNewItem from'../images/addNewItem.png';
import AddNewBook from './AddNewBook';

// ACTIONS
import * as dashboardActions from '../../actions/dashboardActions';

var bookContent = '';

class SubHeader extends Component {

	constructor(props) {
	    super(props);
	    this.state = {
		    browserHeight: '700px',
		    isOpen: false,
		    fileOrPlainText: 'plainText',
		    inputedTextState: '',
	    };
	    this.headerMenuItemAction = this.headerMenuItemAction.bind(this);
	    this.onSave = this.onSave.bind(this);
	    this.changeTypeOfInput = this.changeTypeOfInput.bind(this);
	}

	headerMenuItemAction(what){
		console.log(what);
	}

	toggleModal = () => {
	    this.setState({
	      	isOpen: !this.state.isOpen
	    });
	}

	onSave(){
		console.log(bookContent);
		var title =  Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
		console.log(title);

		if(bookContent.length===0){
			alert("NO TEXT WAS INSERTED");
		}else{ 
			this.setState({
				isOpen: false
			})
			this.props.dashboardActions.addNewBook( {'id': '',  'state': 'A', 'url': title, 'property': 'uploaded', 'title': "User's material", 'subtitle': "user's material", 'image': 'https://i.ibb.co/ctmjFF6/13.jpg' } );                 	
			this.props.dashboardActions.setSelectedBook(  {'id': '', 'status': 'A', 'dashboardBookListId': '', 'url': title, 'title': "User's material", 'subtitle': '', 'author': 'Lewis Carroll', 'image': 'https://images.gr-assets.com/books/1451442088l/24817626.jpg', 'bookContent': bookContent });
		}
	}

	changeTypeOfInput(uloadedType){
		this.setState({
			fileOrPlainText: uloadedType,
			inputedTextState: bookContent
		})
	}

	getInputedText(event){
		bookContent = event.target.value;
	}

    render() {
    	bookContent = '';
		return( 
			<div id="subHeaderComponentWrapper" className="subheader"> 


		        <AddNewBook show={this.state.isOpen} onClose={this.toggleModal} onSave={this.onSave}>
			        
			        <div className="footer">
			       		<button onClick={() => this.changeTypeOfInput('plainText')} className="addNewReadingMaterialUPLOADButton cursorPointer floatRight" style={{"marginRight": "1%"}} > 
	                     	UPLOAD PLAIN TEXT
	                  	</button>
	                  	<button onClick={() => this.changeTypeOfInput('file')} className="addNewReadingMaterialUPLOADButton cursorPointer floatRight" style={{"marginLeft": "1%"}} > 
	                      	UPLOAD FILE
	                  	</button>	                 	
	             	</div>

		          	{ this.state.fileOrPlainText === 'file' ?
			          	<div className="addNewBookModalStyle">
			          		<div className="addNewReadingMaterialDragAndDrop appColor"> DRAG & DROP </div>
			          		<div className="appColor"> reding material </div>
			          	</div>
			        :
					    <textarea onChange={this.getInputedText} rows="5" cols="60" name="description" className="uploadNewText" />
			    	}

		        </AddNewBook>

				<div onClick={this.toggleModal} > <img id="dashboardPlusIcon" className="addNewItemStyle circleOnProfilePhoto" src={addNewItem} /> </div>
			</div>
		)
    }
}


function mapStateToProps(state, ownProps){
    return {
        selectedBook: state.selectedBook,
    }
}

function mapDispatchToProps(dispatch){
    return{
        dashboardActions: bindActionCreators(dashboardActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubHeader);
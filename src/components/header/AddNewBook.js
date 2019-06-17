import React from 'react';
import PropTypes from 'prop-types';

class AddNewBook extends React.Component {
  render() {

    if(!this.props.show) {
      return null;
    }

    return (
      <div className="backdrop" className="backdropStyle">
          <div className="modal" className="modalStyle">
              {this.props.children}

              
              <div className="footer">
                  <button onClick={this.props.onSave} className="addNewReadingMaterialSAVEButton cursorPointer floatRight"> 
                      SAVE
                  </button>
                  <button onClick={this.props.onClose} className="addNewReadingMaterialCANCELButton cursorPointer floatRight"> 
                      CANCEL
                  </button>
              </div>
          </div>
      </div>
    );
  }
}

AddNewBook.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default AddNewBook;
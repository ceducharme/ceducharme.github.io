import React, { Component } from 'react';

class ItemOrderScreenPreview extends Component {
    //-----------------------------------------------------------------------------------------------
    //FINAL RENDER FUNCTION
    //-----------------------------------------------------------------------------------------------
    render() {
        return (
            <div className="col-3 text-center text-success mx-0 my-0 px-0 py-0 Preview-OrderNumber align-middle">
                {this.props.value}
            </div>
        );
    }
}

export default ItemOrderScreenPreview;
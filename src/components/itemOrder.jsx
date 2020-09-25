import React, { Component } from 'react';

class ItemOrder extends Component {
    //-----------------------------------------------------------------------------------------------
    //FUNCTIONS TO RENDER PARTS
    //-----------------------------------------------------------------------------------------------
    renderOrderBtn() {

        // const txtAffiche = "Affiché"
        // const txtNonAffiche = "Non affiché"

        //Déterminer comment afficher le bouton de la commande en fonction de son statut affiché (1) ou non affiché (0).
        if (this.props.order.status === 0) {
            return (
                <React.Fragment>
                    {/* <td className="w-50 pl-5 text-center align-middle">
                        <button onClick={() => this.props.onOrderStatusChange(this.props.order)} className="btn btn-outline-dark btn-sm" type="button" id="btn_status_order">
                            {txtNonAffiche}
                        </button>
                    </td> */}
                    <div className="flexValues btn-group mr-2 my-1" role="group">
                        <button onClick={() => this.props.onOrderStatusChange(this.props.order)} type="button" className="btn btn-dark btn-sm text-strong" id="btn_status_order">{this.props.order.value}</button>
                        <button onClick={() => this.props.onOrderDelete(this.props.order.id)} aria-label="Close" type="button" id="btn_delete_order" className="btn btn-dark btn-sm"><span aria-hidden="true">&times;</span></button>
                    </div>
                </React.Fragment>
            );
        } else {
            return (
                <React.Fragment>
                    {/* <td className="w-50 pl-5 text-center align-middle">
                        <button onClick={() => this.props.onOrderStatusChange(this.props.order)} className="btn btn-outline-success btn-sm" type="button" id="btn_status_order">
                            {txtAffiche}
                        </button>
                    </td> */}
                    <div className="flexValues btn-group mr-2 my-1" role="group">
                        <button onClick={() => this.props.onOrderStatusChange(this.props.order)} type="button" className="btn btn-success btn-sm text-strong" id="btn_status_order">{this.props.order.value}</button>
                        <button onClick={() => this.props.onOrderDelete(this.props.order.id)} aria-label="Close" type="button" id="btn_delete_order" className="btn btn-success btn-sm"><span aria-hidden="true">&times;</span></button>
                    </div>
                </React.Fragment>
            );
        }
    }
    
    //-----------------------------------------------------------------------------------------------
    //FINAL RENDER FUNCTION
    //-----------------------------------------------------------------------------------------------
    render() {
        return (
            <React.Fragment>
                {/* <td className="w-25 text-left align-middle pl-4">
                    <span><strong>{this.props.order.value}</strong></span>
                </td>
                {
                    this.renderOrderBtn()
                }
                <td className="w-25 text-right align-middle pr-4">
                        <button onClick={() => this.props.onOrderDelete(this.props.order.id)} className="close" aria-label="Close" type="button" id="btn_delete_order">
                            <span aria-hidden="true">&times;</span>
                        </button>
                </td> */}
                {
                    this.renderOrderBtn()
                }
            </React.Fragment>
        );
    }
}

export default ItemOrder;
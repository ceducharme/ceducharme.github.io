import React, { Component } from 'react';

//Constante de texte
const txtAffiche = "Affiché"
const txtNonAffiche = "Non affiché"

class Order extends Component {
    render() {
        return (
            <React.Fragment>
                <td className="text-left align-middle pl-4">
                    <span><strong>{this.props.order.value}</strong></span>
                </td>
                {
                    this.renderOrderBtn()
                }
                <td className="text-right align-middle pr-4">
                        <button onClick={() => this.props.fooDelete(this.props.order.id)} className="close" aria-label="Close" type="button" id="btn_status_order">
                            <span aria-hidden="true">&times;</span>
                        </button>
                </td>
            </React.Fragment>
        );
    }

    //Fonction pour faire le rendu du bouton de la commande en fonction du statut actuel de celle-ci.
    renderOrderBtn() {
        if (this.props.order.status === 0) {
            return (
                <React.Fragment>
                    <td className="text-center align-middle">
                        <button onClick={() => this.props.fooOrderStatus(this.props.order)} className="btn btn-outline-dark btn-sm" type="button" id="btn_status_order">{txtNonAffiche}</button>
                    </td>
                </React.Fragment>
            );
        } else {
            return (
                <React.Fragment>
                    <td className="text-center align-middle">
                        <button onClick={() => this.props.fooOrderStatus(this.props.order)} className="btn btn-outline-success btn-sm" type="button" id="btn_status_order">
                            {/* <span className="spinner-grow spinner-grow-sm text-danger" role="status" aria-hidden="true"></span>&nbsp; */}
                            {txtAffiche}
                        </button>
                    </td>
                </React.Fragment>
            );
        }
    }


    // renderOrderBtn() {
    //     if (this.props.order.status === 0) {
    //         return (
    //             <React.Fragment>
    //                 <td className="text-center align-middle">
    //                     <button onClick={() => this.props.fooOrderStatus(this.props.order)} className="btn btn-outline-dark btn-sm" type="button" id="btn_status_order">{txtNonAffiche}</button>
    //                 </td>
    //                 <td className="text-right align-middle">
    //                     <button onClick={() => this.props.fooOrderStatus(this.props.order)} className="btn btn-outline-dark btn-sm" type="button" id="btn_status_order">{btnCmdPrete}</button>
    //                 </td>
    //             </React.Fragment>
    //         );
    //     } else {
    //         return (
    //             <React.Fragment>
    //                 <td className="text-center align-middle">
    //                     <button onClick={() => this.props.fooOrderStatus(this.props.order)} className="btn btn-outline-dark btn-sm" type="button" id="btn_status_order">{txtAffiche}</button>
    //                 </td>
    //                 <td className="text-right align-middle">
    //                     <button onClick={() => this.props.fooDelete(this.props.order.id)} className="btn btn-outline-dark btn-sm" type="button" id="btn_status_order">{btnRetirer}</button>
    //                 </td>
    //             </React.Fragment>
    //         );
    //     }
    // }

}

export default Order;
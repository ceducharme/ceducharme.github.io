import React, { Component } from 'react';
import ItemOrder from './itemOrder';

class TableOrders extends Component {
    //-----------------------------------------------------------------------------------------------
    //CONSTRUCTOR INITIALISATION
    //-----------------------------------------------------------------------------------------------
    constructor(props) {
        super(props);
        this.handleOrderDelete = this.handleOrderDelete.bind(this);
        this.handleOrderStatusChange = this.handleOrderStatusChange.bind(this);
    }

    //-----------------------------------------------------------------------------------------------
    //HANDLE FUNCTIONS FROM PARENT
    //-----------------------------------------------------------------------------------------------

    /**
    * Supprimer une commande dans le tableau des commandes.
    * @param  {Number} order ID de la commande à supprimer.
    */
    handleOrderDelete(e) {
        this.props.onOrderDelete(e)
    }

    /**
    * Changer le statut d'une commande pour l'afficher ou l'enlever de l'écran d'affichage.
    * @param  {Order} order Objet de la commande à changer de status.
    */
    handleOrderStatusChange(e) {
        this.props.onOrderStatusChange(e)
    }

    //-----------------------------------------------------------------------------------------------
    //FINAL RENDER FUNCTION
    //-----------------------------------------------------------------------------------------------
    render() {

        const filterText = this.props.addOrderControlValue;

        const rows = [];

        
            this.props.tableOrdersValue.forEach((order) => {
                if (filterText) {
                    if (order.value.indexOf(filterText) !== 0) {
                        return;
                    }
                }
                rows.push(
                    <ItemOrder key={order.id} order={order} onOrderDelete={this.handleOrderDelete} onOrderStatusChange={this.handleOrderStatusChange} />
                );
            });
        
        return (
            <React.Fragment>
            {/* <table className="table">
                <tbody>
                    {this.props.tableOrdersValue.map((order, index) => (
                        <tr key={order.id}>
                            <ItemOrder order={order} onOrderDelete={this.handleOrderDelete} onOrderStatusChange={this.handleOrderStatusChange} />
                        </tr>
                    ))}
                </tbody>
            </table> */}
            
            <div className="FlexContainer d-flex flex-wrap ml-3 mr-2 mt-3 justify-content-center">{rows}
                {/* {this.props.tableOrdersValue.map((order, index) => (
                            <ItemOrder order={order} onOrderDelete={this.handleOrderDelete} onOrderStatusChange={this.handleOrderStatusChange} />
                    ))} */}
            </div>
            </React.Fragment>
        );
    }
}

export default TableOrders;
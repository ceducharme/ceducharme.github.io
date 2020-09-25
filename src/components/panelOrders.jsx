import React, { Component } from 'react';
import TableOrders from './tableOrders';
import ControlAddOrders from './controlAddOrder';

class PanelOrders extends Component {
    //-----------------------------------------------------------------------------------------------
    //CONSTRUCTOR INITIALISATION
    //-----------------------------------------------------------------------------------------------
    constructor(props) {
        super(props);
        this.handleOrderDelete = this.handleOrderDelete.bind(this);
        this.handleOrderStatusChange = this.handleOrderStatusChange.bind(this);
        this.handleAddNewOrder = this.handleAddNewOrder.bind(this);
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
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

    /**
    * Ajouter une commande dans le tableau des commandes.
    * @param  {String} value Valeur de la nouvelle commande à ajouter (Numéro de commande).
    */
    handleAddNewOrder(e) {
        this.props.onAddNewOrder(e)
    }

    /**
    * Modifie le texte qui permet de filtrer les commandes lorsqu'on veux trouver une commande rapidement.
    * @param  {String} filterText Valeur textuel du filtre à utiliser pour afficher les bonnes commandes.
    */
    handleFilterTextChange(e) {
        this.props.onFilterTextChange(e);
    }

    //-----------------------------------------------------------------------------------------------
    //FINAL RENDER FUNCTION
    //-----------------------------------------------------------------------------------------------
    render() {
        return (
            <div className="col-auto order-12 order-sm-12 order-md-12 order-lg-1 order-xl-1">
                <div className="card Commandes">
                    {/* <div className="card-header">
                        <h5>Commandes</h5>
                    </div> */}
                    <div className="card-block px-0 py-3">
                        <div className="table-responsive">
                            <ControlAddOrders addOrderControlValue={this.props.addOrderControlValue} onFilterTextChange={this.handleFilterTextChange} onAddNewOrder={this.handleAddNewOrder} />
                            <TableOrders tableOrdersValue={this.props.tableOrdersValue} addOrderControlValue={this.props.addOrderControlValue} onOrderStatusChange={this.handleOrderStatusChange} onOrderDelete={this.handleOrderDelete} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PanelOrders;
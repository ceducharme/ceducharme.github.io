import React, { Component } from 'react';
import PanelOrders from './panelOrders';
import PanelOrdersScreenPreview from './panelOrdersScreenPreview';

class AppOrder extends Component {
    //-----------------------------------------------------------------------------------------------
    //CONSTRUCTOR INITIALISATION
    //-----------------------------------------------------------------------------------------------
    constructor(props) {
        super(props);
        this.state = {
            addOrderControlValue: "",
            nbPreview: 3,
            ordersPreviewParameter: { 
                bgColor: "",
                orderColor: "",
                newOrderColor: "",
                nbItemsColumn: 5,
                nbColumns: 3
            },
            tableOrdersValue : [
                { id: 0, value: "12345", status: 0 },
                { id: 1, value: "15656", status: 0 },
                { id: 2, value: "23452", status: 0 },
                { id: 3, value: "34678", status: 0 },
                { id: 4, value: "45794", status: 1 },
                { id: 5, value: "73248", status: 1 },
                { id: 6, value: "94732", status: 0 },
                { id: 7, value: "98233", status: 1 }
            ]
        };

        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    }

    //-----------------------------------------------------------------------------------------------
    //HANDLE FUNCTIONS FOR CHILD COMPONENTS
    //-----------------------------------------------------------------------------------------------

    /**
    * Supprimer une commande dans le tableau des commandes.
    * @param  {Number} order ID de la commande à supprimer.
    */
    handleOrderDelete = order => {
        var nbOrderPreview = this.state.nbPreview

        const tableOrdersValue = this.state.tableOrdersValue.filter((t) => {
            if (t.status === 1 && t.id === order) {
                nbOrderPreview -= 1;
            }

            return t.id !== order
        });
        this.setState({ nbPreview: nbOrderPreview, tableOrdersValue });
    }

    /**
    * Changer le statut d'une commande pour l'afficher ou l'enlever de l'écran d'affichage.
    * @param  {Order} order Objet de la commande à changer de status.
    */
    handleOrderStatusChange = order => {
        const tableOrdersValue = [...this.state.tableOrdersValue];
        var nbOrderPreview = this.state.nbPreview

        tableOrdersValue.map((t) => {
            if (t.id === order.id) {
                if (t.status === 1) {
                    t.status = 0;
                    nbOrderPreview -= 1;
                } else if (nbOrderPreview === 16) {
                    t.status = 0;
                } else {
                    t.status = 1;
                    nbOrderPreview += 1;
                }
                    
            }
            return t;
        });
        this.setState({ nbPreview: nbOrderPreview, tableOrdersValue });
        
    }

    /**
    * Ajouter une commande dans le tableau des commandes.
    * @param  {String} value Valeur de la nouvelle commande à ajouter (Numéro de commande).
    */
    handleAddNewOrder = value => {
        if (value) {
            const tableOrdersValue = [...this.state.tableOrdersValue];
            tableOrdersValue.push(
                {
                    id: this.generateOrderId(),
                    value: value,
                    status: 0
                }
            );
            
            tableOrdersValue.sort(this.sortByProperty("value"));

            this.setState({ addOrderControlValue: "", tableOrdersValue })
        } else {
            const tableOrdersValue = [...this.state.tableOrdersValue];
            tableOrdersValue.push(
                {
                    id: this.generateOrderId(),
                    value: Math.floor(10000 + Math.random() * 90000).toString(),
                    status: 0
                }
            );
            
            tableOrdersValue.sort(this.sortByProperty("value"));

            this.setState({ addOrderControlValue: "", tableOrdersValue })
        }
    }

    /**
    * Modifie le texte qui permet de filtrer les commandes lorsqu'on veux trouver une commande rapidement.
    * @param  {String} filterText Valeur textuel du filtre à utiliser pour afficher les bonnes commandes.
    */
    handleFilterTextChange(filterText) {
        this.setState({
            addOrderControlValue: filterText
        });
    }

    //-----------------------------------------------------------------------------------------------
    //UTILITY FUNCTIONS
    //-----------------------------------------------------------------------------------------------

    /**
    * Génère un ID pour les nouvelles commandes ajoutées.
    */
    generateOrderId() {
        let d = new Date();
        var n = d.getTime();
        return n;
    }

    /**
    * Permet de faire un tri dans un tableau d'objet à partir d'une propriété de l'objet.
    * * @param  {String} property Nom de la propriété de l'objet sur laquelle trier.
    */
    sortByProperty(property){
        return (a, b) => {
           if(a[property] > b[property])
              return 1;
           else if(a[property] < b[property])
              return -1;
           return 0;
        }  
     }

    //-----------------------------------------------------------------------------------------------
    //FINAL RENDER FUNCTION
    //-----------------------------------------------------------------------------------------------
    render() {
        return (
            <React.Fragment>
                <PanelOrders tableOrdersValue={this.state.tableOrdersValue} addOrderControlValue={this.state.addOrderControlValue} onFilterTextChange={this.handleFilterTextChange} onOrderStatusChange={this.handleOrderStatusChange} onOrderDelete={this.handleOrderDelete} onAddNewOrder={this.handleAddNewOrder} />
                <PanelOrdersScreenPreview tableOrdersValue={this.state.tableOrdersValue} />
            </React.Fragment>
        );
    }
}

export default AppOrder;
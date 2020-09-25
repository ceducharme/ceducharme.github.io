import React, { Component } from 'react';

import Order from './order';
import AddOrder from './addOrder';
//import OrdersScreenPreview from './components/ordersScreenPreview';

class Orders extends Component {

    // État du composant avec valeurs par défaut.
    state = {
        addOrderValue: "",
        ordersPreviewParameter: [
            {
                bgColor: "",
                orderColor: "",
                newOrderColor: "",
                nbItemsColumn: 5,
                nbColumns: 3,
            }
        ],
        ordersPreviewValue: [
            {
                id: 3,
                value: "23452-3",
            },
            {
                id: 4,
                value: "45794-5",
            },
            {
                id: 6,
                value: "34678-3",
            }
        ],
        orders : [
            {
                id: 1,
                value: "98233-1",
                status: 0
            },
            {
                id: 2,
                value: "73248-5",
                status: 0
            },
            {
                id: 3,
                value: "23452-3",
                status: 1
            },
            {
                id: 4,
                value: "94732-1",
                status: 1
            },
            {
                id: 5,
                value: "45794-5",
                status: 0
            },
            {
                id: 6,
                value: "34678-3",
                status: 1
            }
        ]
    }

    // Méthode utilitaire locale pour obtenir l'heure.
    // On utilise l'heure comme id lors de l'ajout d'un ToDo.
    getTime() {
        let d = new Date();
        var n = d.getTime();
        return n;
    }

    // Les méthodes handleDelete, handleDone et addNewOrder sont des méthodes dont les références sont passées comme des attributs de composant.

    // Méthode appelé par le composant order.
    handleDelete = order => {
        const orders = this.state.orders.filter((t) => {
            return t.id !== order
        });
        this.setState({ orders });
    }

    // Méthode appelé par le composant order.
    handleOrderStatus = order => {
        const orders = [...this.state.orders];
        var ordersPreviewValue = null;
        orders.map((t) => {
            if (t.id === order.id) {
                if (t.status === 1) {
                    t.status = 0;

                    ordersPreviewValue = this.state.ordersPreviewValue.filter((t) => {
                        return t.id !== order.id
                    });
                } else {
                    t.status = 1;

                    ordersPreviewValue = [...this.state.ordersPreviewValue];
                    ordersPreviewValue.push(
                        {
                            id: t.id,
                            value: t.value,
                        }
                    );
                }
                    
            }
            return t;
        });
        this.setState({ ordersPreviewValue, orders });
    }

    // Méthode appelé par le composant addorder.
    addNewOrder = value => {
        if (value) {
            const orders = [...this.state.orders];
            const ordersPreviewValue = [...this.state.ordersPreviewValue]
            orders.push(
                {
                    id: this.getTime(),
                    value: value,
                    status: 0
                }
            );
            this.setState({ addOrderValue: "", ordersPreviewValue, orders })
        } else {
            console.log("Ajoutez du text s.v.p.");
        }
    }

    render() {
        return (
            <React.Fragment>
                <table className="table">
                    <tbody>
                        {this.state.orders.map((order, index) => (
                            <tr key={order.id}>
                                <Order order={order} fooDelete={this.handleDelete} fooOrderStatus={this.handleOrderStatus} />
                            </tr>
                        ))}
                    </tbody>
                </table>
                <AddOrder fooAddOrder={this.addNewOrder} addOrderValue={this.state.addOrderValue} />
            </React.Fragment>
        );
    }

}

export default Orders;
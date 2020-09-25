import React, { Component } from 'react';
import OrderScreenPreview from './orderScreenPreview';

class OrdersScreenPreview extends Component {
    render() {
        return (
            <ul className="Preview-List" data-columns="1">

                {/* {Orders.state.orderPreviewValue.map((order) => (
                    <li key={order.id}><h2 className="text-success mb-0">{order.value}</h2></li>
                ))} */}
                {/* <li><h2 className="text-success mb-0">98233-1</h2></li>
                <li><h2 className="text-success mb-0">73248-5</h2></li> */}
                <li><h2 className="text-success mb-0">23452-3</h2></li>
                <li><h2 className="text-success mb-0">94732-1</h2></li>
                {/* <li><h2 className="text-success mb-0">45794-5</h2></li> */}
                <li><h2 className="text-success mb-0">34678-3</h2></li>
            </ul>
        );
    }
}
export default OrdersScreenPreview;
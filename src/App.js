import React, { Component } from 'react';
/* import Orders from './components/orders';
import OrdersScreenPreview from './components/ordersScreenPreview'; */
import AppOrder from './components/appOrder';

class App extends Component {

  render() {
    return (
      <div className="app-main-container">
        <div className="app-wrapper">
          <div className="app-content">
            <div className="app-inner-content">
              <div className="main-body">
                <div className="page-wrapper">
                  <div className="row justify-content-center">
                    <AppOrder />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> 
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import TableOrdersScreenPreview from './tableOrdersScreenPreview';

class PanelOrdersScreenPreview extends Component {
    //-----------------------------------------------------------------------------------------------
    //FINAL RENDER FUNCTION
    //-----------------------------------------------------------------------------------------------
    render() {
        return (
            <div className="col-auto order-1 order-sm-1 order-md-1 order-lg-12 order-xl-12">
                <div className="card Screen-Preview">
                    {/* <div className="">
                        <h4 className="text-white mt-2 ml-3">Prêt</h4>
                    </div> */}
                    <div className="card-block Screen-Preview px-0 py-0">
                        <TableOrdersScreenPreview tableOrdersValue={this.props.tableOrdersValue}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default PanelOrdersScreenPreview;
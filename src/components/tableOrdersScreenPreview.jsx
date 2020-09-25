import React, { Component } from 'react';
import ItemOrderScreenPreview from './itemOrderScreenPreview';

class TableOrdersScreenPreview extends Component {
    //-----------------------------------------------------------------------------------------------
    //FINAL RENDER FUNCTION
    //-----------------------------------------------------------------------------------------------
    render() {

        const rows = [];
        const nbRows = 4;
        const nbColumns = 4;

        //Boucle sur tous les commandes pour afficher dans l'écran preview tous les commandes qui ont un statut affiché (1). 
        this.props.tableOrdersValue.forEach((order, index) => {
            if (order.status === 1) {
                rows.push(
                    <ItemOrderScreenPreview value={order.value} key={order.id} />
                );
            }
        });

        let renderRows = [];

        //Génère un tableau qui affiche les commandes en ordre alpha-numérique dans l'écran de preview. 
        for (var rowNb=0; rowNb < nbRows; rowNb++) {
            let renderColumns = [];
            for (var columnNb=0; columnNb < nbColumns; columnNb++) {
                if (rows[nbRows*columnNb+rowNb] != null)
                    renderColumns.push(rows[nbRows*columnNb+rowNb])
                else
                    renderColumns.push(<div key={'row' + rowNb + 'col' + columnNb} className="col-3 text-success mx-0 my-0 px-0 py-0 Preview-OrderNumber"></div>)
            }
            renderRows.push(<div key={'col' + columnNb + 'row' + rowNb} className="row Preview-Row mx-0 my-0">{renderColumns}</div>)
        }

        return (
            <div className="container Preview-List">
                {renderRows}
            </div>
        );
    }
}

export default TableOrdersScreenPreview;
import React, { Component } from 'react';

//Constantes
const limitChar = 7;

class AddOrder extends Component {

    state = {
        defaultValue: "",
        value: this.props.addOrderValue,
        invalid: false
    }

    handleChange = (e) => {
        if (e.target.value.length <= limitChar)
            this.hideInvalidData();
        else if (e.target.value.length > limitChar)
            this.showInvalidData();

        this.setState({
            value: e.target.value
        });
    }

    clearInput = () => {
        //Effacer la valeur existante de l'input
        document.getElementById("orderValue").value = "";

        //Mettre à jour le state du composant local
        this.setState({ value:"" });
    }

    showInvalidData = () => {
        document.getElementById("orderValue").classList.add("is-invalid");
        document.getElementById("invalidInputError").classList.remove("invisible");
        
        this.setState({
            invalid: true
        });
    }

    hideInvalidData = () => {
        document.getElementById("orderValue").classList.remove("is-invalid");
        document.getElementById("invalidInputError").classList.add("invisible");
        
        this.setState({
            invalid: false
        });
    }

    addOrder = () => {
        if (this.state.value.length > limitChar) {
            
        } else {
            //Fait appel à la méthode fooAddOrder du composant orders en utilisant props
            this.props.fooAddOrder(this.state.value);
            this.clearInput();
        }
        
    }

    render() {
        return (
                <div className="input-group">
                    <input type="text" className="form-control ml-3 mb-1" id="orderValue" placeholder="Entrez un numéro de commande" onChange={this.handleChange} />
                    <div className="input-group-append mr-3 mb-1">
                        <button onClick={this.addOrder} className="btn btn-secondary rounded-right" type="button" id="button-addon2">+ Ajouter</button>
                    </div>
                    <div id="invalidInputError" className="invalid-feedback text-wrap invisible ml-3 mr-3">
                        Numéro de commande invalide. (Dois être de {limitChar} caractères maximum)
                    </div>
                </div>
        );
    }
}

export default AddOrder;
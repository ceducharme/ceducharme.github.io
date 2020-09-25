import React, { Component } from 'react';

const limitChar = 6;

class ControlAddOrder extends Component {
    //-----------------------------------------------------------------------------------------------
    //CONSTRUCTOR INITIALISATION
    //-----------------------------------------------------------------------------------------------
    constructor(props) {
        super(props);
        this.state = {
            defaultValue: "",
            value: this.props.addOrderControlValue,
            invalid: false
        };

        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    }

    //-----------------------------------------------------------------------------------------------
    //UTILITY FUNCTIONS
    //-----------------------------------------------------------------------------------------------

    /**
    * Gère le texte de la boîte de saisie et vérifie si le texte saisie respecte les standards établis. Appelé par le onChange de la boîte de saisie.
    * @param  {String} e Valeur textuel de la boîte de saisie à utiliser pour ajouter une nouvelle commande.
    */
    handleChange = (e) => {
        if (e.target.value.length <= limitChar)
            this.hideInvalidData();
        else if (e.target.value.length > limitChar)
            this.showInvalidData();

        this.handleFilterTextChange(e.target.value)

        this.setState({
            value: e.target.value
        });
    }

    /**
    * Gère le texte de la boîte de saisie pour mettre à jour la valeur de filtre de recherche. Utilisé par handleChange qui est appelé par le onChange de la boîte de saisie.
    * @param  {String} e Valeur textuel du filtre à utiliser pour afficher les bonnes commandes.
    */
    handleFilterTextChange(e) {
        this.props.onFilterTextChange(e);
    }

    /**
    * Remet le texte de la boîte de saisie à vide lorsqu'une nouvelle commande est ajouté.
    */
    clearInput = () => {
        //Effacer la valeur existante de l'input
        document.getElementById("orderValue").value = "";
        this.nameInput.focus();

        //Mettre à jour le state du composant local
        this.setState({ value:"" });
    }

    /**
    * Change le style de la boîte de saisie pour montrer une saisie invalide et affiche l'erreur sous la boîte.
    */
    showInvalidData = () => {
        document.getElementById("orderValue").classList.add("is-invalid");
        document.getElementById("invalidInputError").classList.remove("invisible");
        
        this.setState({
            invalid: true
        });
    }

    /**
    * Change le style de la boîte de saisie pour retirer le style d'une saisie invalide et cache l'erreur sous la boîte.
    */
    hideInvalidData = () => {
        document.getElementById("orderValue").classList.remove("is-invalid");
        document.getElementById("invalidInputError").classList.add("invisible");
        
        this.setState({
            invalid: false
        });
    }

    /**
    * Ajouter une commande dans le tableau des commandes. Déclenché par le onClick du bouton + Ajouter.
    */
    addOrder = () => {
        if (this.state.value.length > limitChar) {
            
        } else {
            this.props.onAddNewOrder(this.state.value);
            this.clearInput();
        }
        
    }

    /**
    * Événement sur la fin du rendu des composants. Permet de sélectionner la boîte de saisie par défaut pour ajouter du texte plus rapidement.
    */
    componentDidMount(){
        this.nameInput.focus();
    }

    /**
    * Événement sur l'appuie de Enter lorsqu'on est en édition sur la boîte de saisie. Permet d'ajouter une commande en cliquant sur Enter pour plus de rapidité.
    */
    handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            this.addOrder()
        }
    }
    

    //-----------------------------------------------------------------------------------------------
    //FINAL RENDER FUNCTION
    //-----------------------------------------------------------------------------------------------
    render() {
        return (
            <div className="input-group">
                <input ref={(input) => { this.nameInput = input; }} type="text" className="form-control ml-3 mb-1 mt-1" id="orderValue" placeholder="Entrez un # de commande" onChange={this.handleChange} onKeyDown={this.handleKeyDown}/>
                <div className="input-group-append mr-3 mb-1 mt-1">
                    <button onClick={this.addOrder} className="btn btn-secondary rounded-right" type="button" id="button-addon2">+ Ajouter</button>
                </div>
                <div id="invalidInputError" className="invalid-feedback text-wrap invisible ml-3 mr-3">
                    Numéro de commande invalide. (Dois être de {limitChar} caractères maximum)
                </div>
            </div>
        );
    }
}

export default ControlAddOrder;
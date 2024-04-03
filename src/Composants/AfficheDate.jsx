import React from "react";
import "../style/Compte.css"

function AfficherData(props) {
    return (
        <div class="flex justify-center">
            <div class="w-60 h-60 data bg-white shadow-md rounded-md mt-9">
                <p>Prénom : {props.prenom}</p>
                <p>Nom : {props.nom}</p>
                <p>Number : {props.tele}</p>
            </div>
        </div>
    )
}

export default AfficherData
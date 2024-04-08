import React, {useState} from "react";
import "../style/Compte.css"


function AfficherData(props) {

    return (
        <div className="flex justify-center">
            <div className="w-60 h-60 data bg-white shadow-md rounded-md mt-9">
                <center>
                <div className="mt-8">
                    <p><label className="text-lg font-bold">Prénom : </label>{props.prenom}</p>
                    <p><label className="text-lg font-bold">Nom : </label>{props.nom}</p>
                    <p><label className="text-lg font-bold">Number : </label>{props.age}</p>
                </div>
                <div className="flex justify-center">
                    <button className="SupprimerBtn hover:bg-orange-500 text-white font-bold py-2 px-4 rounded-full shadow-md hover:shadow-lg w-56 flex ">
                        Supprimer
                    </button>
                </div>
                </center>
            </div>
        </div>
    )
}

export default AfficherData
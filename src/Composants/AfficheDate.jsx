import React, { useState } from "react";
import "../style/Compte.css";

function AfficherData(props) {
  function supprimer() {
    document.getElementById("prenomLabel").textContent = "";
    document.getElementById("nomLabel").textContent = "";
    document.getElementById("ageLabel").textContent = "";
  }

  return (
    <div className="flex justify-center">
      <div className="w-60 h-60 data bg-white shadow-md rounded-md mt-9 hover:shadow-none">
        <center>
          <div className="mt-8">
            <p>
              <label className="text-lg font-bold">Prénom : </label>
              <label id="prenomLabel">{props.prenom}</label>
            </p>
            <p>
              <label className="text-lg font-bold">Nom : </label>
              <label id="nomLabel">{props.nom}</label>
            </p>
            <p>
              <label className="text-lg font-bold">Number : </label>
              <label id="ageLabel">{props.age}</label>
            </p>
          </div>
          <div className="flex justify-center">
            <button
              onClick={supprimer}
              className="SupprimerBtn hover:bg-orange-500 text-white font-bold py-2 px-4 rounded-full shadow-md hover:shadow-lg w-56 flex "
            >
              Supprimer
            </button>
          </div>
        </center>
      </div>
    </div>
  );
}

export default AfficherData;

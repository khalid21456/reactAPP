import ReactDOM from "react";
import React from "react";
import "../index.css"
import "../style/Compte.css"
import AfficherData from "./AfficheDate";
function AfficherCompte() {
    return (
        <>
        <div class="flex justify-center">
            <div className="container bg-white shadow-md rounded-md mt-9">
                <div class="flex justify-evenly pt-9">
                    <div>
                        <label class="pt-2 pr-4">Name</label>
                        <input type="text" className="nice-input" placeholder="Enter your Name"/>
                    </div>
                    <div>
                      <label class="pt-2 pr-4">Number</label>
                      <input type="text" className="nice-input" placeholder="Enter your Number"/>
                    </div>
                </div>
                <div class="flex justify-center pt-9">
                    <button class="AjouterBtn  hover:from-indigo-600 hover:to-purple-600 text-white font-bold py-2 px-4 rounded-full shadow-md hover:shadow-lg w-56">
                        Ajouter
                    </button>
                </div>
            </div>
        </div>
        <AfficherData/>
        </>
    )
}

export default AfficherCompte
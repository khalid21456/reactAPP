import React, { useEffect } from "react";
import "../index.css";
import "../style/Compte.css";
import AfficherData from "./AfficheDate";
import AfficheImg from "./AfficheImg";

function AfficherCompte() {
  return (
    <>
      <div className="flex justify-center">
        <div className="container bg-white shadow-md rounded-md mt-9">
          <div className="flex justify-evenly pt-9">
            <div>
              <label className="pt-2 pr-4 font-bold">Name</label>
              <input
                type="text"
                name="name"
                className="name nice-input"
                placeholder="Enter your Name"
              />
            </div>
            <div>
              <label className="pt-2 pr-4 font-bold">Number</label>
              <input
                type="text"
                name="numb"
                className="numb nice-input"
                placeholder="Enter your Number"
              />
            </div>
          </div>
          <div className="flex justify-center pt-9">
            <button
              id="AjouterBtn"
              className="AjouterBtn hover:from-indigo-600 hover:to-purple-600 text-white font-bold py-2 px-4 rounded-full shadow-md hover:shadow-lg w-56"
            >
              Ajouter
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-evenly ml-14">
        <div className="data">
          <AfficherData />
        </div>
        <div className="data shadow-md rounded-md bg-white mt-9"></div>
            <AfficheImg/>
        </div>
    </>
  );
}

export default AfficherCompte;

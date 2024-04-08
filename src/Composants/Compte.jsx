import React, { useState } from "react";
import "../index.css";
import "../style/Compte.css";
import AfficherData from "./AfficheDate";
import AfficheImg from "./AfficheImg";

function AfficherCompte() {

  const [prenom,setPrenom] = useState();
  const [nom,setNom] = useState();
  const [age,setAge] = useState();

  function Afficher() {
    let PrenomInput = document.getElementsByClassName("name1")[0]
    let AgeInput = document.getElementsByClassName("numb")[0]
    let NomInput = document.getElementsByClassName("name2")[0]
    console.log(PrenomInput.value)
    console.log(AgeInput.value)
    setPrenom(PrenomInput.value)
    setAge(AgeInput.value)
    setNom(NomInput.value)
  }

  

  return (
    <>
      <div className="flex justify-center">
        <div className="container bg-white shadow-md rounded-md mt-9 hover:shadow-none">
          <div className="flex justify-evenly pt-9 ">
            <div className="ml-7">
              <label className="pt-2 pr-4 font-bold">Prénom</label>
              <input
                type="text"
                name="name"
                className="name1 nice-input"
                placeholder="Enter your Name"
              />
            </div>
            <div>
              <label className="pt-2 pr-4 font-bold">Nom</label>
              <input
                type="text"
                name="name"
                className="name2 nice-input"
                placeholder="Enter your Name"
              />
            </div>
            <div>
              <label className="pt-2 pr-4 font-bold">Age</label>
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
              className="AjouterBtn hover:bg-orange-500 text-white font-bold py-2 px-4 rounded-full shadow-md hover:shadow-lg w-56"
              onClick={Afficher}

            >
              Ajouter
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-evenly ml-14">
        <div className="data">
          <AfficherData prenom={prenom} nom={nom} age={age}/>
        </div>
        <div className="data shadow-md rounded-md bg-white mt-9 hover:shadow-none"></div>
            <AfficheImg/>
        </div>
    </>
  );
}

export default AfficherCompte;


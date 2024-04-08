import React from 'react';
import ReactDOM,{render} from 'react-dom';
import './index.css';
import App from './App';
import AfficherCompte from './Composants/Compte';
import Recherche from './Composants/Recherche';
import Evenement from "./Composants/Evenement";

const root = document.getElementById("root");
ReactDOM.render(
  <App/>,root
)


const AccueilBtn = document.getElementsByTagName("button")[0];
const CompteBtn = document.getElementsByTagName("button")[1];
const RechercheBtn = document.getElementsByTagName("button")[3];
const EvenementBtn = document.getElementsByTagName("button")[2];



AccueilBtn.addEventListener("click",(event)=> {
  ReactDOM.render(
    <App/>,root
  )
})

CompteBtn.addEventListener("click",(event)=> {
  ReactDOM.render(
    <AfficherCompte/>,root
  )
})

RechercheBtn.addEventListener("click",(event)=> {
  ReactDOM.render(
    <Recherche/>,root
  )
})

EvenementBtn.addEventListener("click",(event)=> {
  render(
    <Evenement/>,root
  )
})






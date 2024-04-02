import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AfficherCompte from './Composants/Compte';


const root = document.getElementById("root");
ReactDOM.render(
  <App/>,root
)
const AccueilBtn = document.getElementsByTagName("button")[0];
const CompteBtn = document.getElementsByTagName("button")[1];
const RechercheBtn = document.getElementsByTagName("button")[2];
const EvenementBtn = document.getElementsByTagName("button")[3];



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
  
})

EvenementBtn.addEventListener("click",(event)=> {
  
})






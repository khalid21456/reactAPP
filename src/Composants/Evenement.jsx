import React from "react";
import "../style/Event.css";

export default function Evenement() {
  document.addEventListener("mousemove", function (event) {
    var hoveredElement = event.target;
    if (hoveredElement.className == "delete") {
      hoveredElement.src = require("../eventImg/poubelle-checked.png");
    } else if (hoveredElement.className == "favoris") {
      hoveredElement.src = require("../eventImg/étoile-checked.png");
    } else {
      var imgsDelete = document.querySelectorAll(".delete");
      imgsDelete.forEach((element) => {
        element.src = require("../eventImg/poubelle-unchecked.png");
      });
      var imgsFavoris = document.querySelectorAll(".favoris");
      imgsFavoris.forEach((element) => {
        element.src = require("../eventImg/étoile-unchecked.png");
      });
    }
  });

  document.addEventListener("click", (event) => {
    var clickedElement = event.target;
    if (clickedElement.className == "like") {
      if (clickedElement.src == require("../eventImg/like-checked.png"))
        clickedElement.src = require("../eventImg/like-unchecked.png");
      else clickedElement.src = require("../eventImg/like-checked.png");
    }
    if (clickedElement.className == "delete") {
      let deletedEvent = clickedElement.parentElement.parentElement.parentElement.parentElement;
      console.log(deletedEvent);
      deletedEvent.parentElement.removeChild(deletedEvent);
    }
  });

  return (
    <div className="container1 flex justify-center scroll-m-14">
      <div className="subContainer mt-5">
        <div className="post border border-gray-400 shadow-sm rounded-sm bg-white">
          <div className="mt-1 flex">
            <div className="image-container ml-1">
              <img
                className="eventImage"
                src="https://liu.se/dfsmedia/dd35e243dfb7406993c1815aaf88a675/78518-50065/ai-genererad-bild-av-sara-laathen-till-en-av-ai-sidornas-toppbild?as=1&w=640&h=360&cr=1&crw=640&crh=360&bc=%23ffffff"
                alt="picture"
              />
            </div>
            <div className="divContainer ml-5 flex justify-between">
              <div className="contentContainer">
                <h3 className="title text-3xl">Intelligence artificiel</h3>
                <p className="mt-2 text-justify">
                  L'IA est en réalité une discipline jeune d'une soixante
                  d'années, qui réunit des sciences, théories et techniques
                  notamment logique mathématique, statistiques, probabilités,
                  neurobiologie
                </p>
              </div>
              <div>
                <img
                  style={{ cursor: "pointer" }}
                  className="favoris"
                  src={require("../eventImg/étoile-unchecked.png")}
                  alt=""
                />
                <img
                  style={{ cursor: "pointer" }}
                  className="delete"
                  src={require("../eventImg/poubelle-unchecked.png")}
                  alt=""
                />
                <img
                  style={{ cursor: "pointer" }}
                  className="like"
                  src={require("../eventImg/like-unchecked.png")}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="post border border-gray-400 shadow-sm rounded-sm bg-white">
          <div className="mt-1 flex">
            <div className="image-container ml-1">
              <img
                className="eventImage"
                src={require("../eventImg/Neural.jpg")}
                alt="picture"
              />
            </div>
            <div className="divContainer ml-5 flex justify-between">
              <div className="contentContainer">
                <h3 className="title text-3xl">Neural Networks</h3>
                <p className="mt-2 text-justify">
                  A neural network is a method in artificial intelligence that
                  teaches computers to process data in a way that is inspired by
                  the human brain.
                </p>
              </div>
              <div>
                <img
                  style={{ cursor: "pointer" }}
                  className="favoris"
                  src={require("../eventImg/étoile-unchecked.png")}
                  alt=""
                />
                <img
                  style={{ cursor: "pointer" }}
                  className="delete"
                  src={require("../eventImg/poubelle-unchecked.png")}
                  alt=""
                />
                <img
                  style={{ cursor: "pointer" }}
                  className="like"
                  src={require("../eventImg/like-unchecked.png")}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="post border border-gray-400 shadow-sm rounded-sm bg-white">
          <div className="mt-1 flex">
            <div className="image-container ml-1">
              <img
                className="eventImage"
                src={require("../eventImg/gametheory.png")}
                alt="picture"
              />
            </div>
            <div className="divContainer ml-5 flex justify-between">
              <div className="contentContainer">
                <h3 className="title text-3xl">Game Theory</h3>
                <p className="mt-2 text-justify">
                  game theory, branch of applied mathematics that provides tools
                  for analyzing situations in which parties, called players,
                  make decisions that are interdependent. This interdependence
                  causes each player to consider the other player's possible
                  decisions, or strategies, in formulating strategy.
                </p>
              </div>
              <div>
                <img
                  style={{ cursor: "pointer" }}
                  className="favoris"
                  src={require("../eventImg/étoile-unchecked.png")}
                  alt=""
                />
                <img
                  style={{ cursor: "pointer" }}
                  className="delete"
                  src={require("../eventImg/poubelle-unchecked.png")}
                  alt=""
                />
                <img
                  style={{ cursor: "pointer" }}
                  className="like"
                  src={require("../eventImg/like-unchecked.png")}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="post border border-gray-400 shadow-sm rounded-sm bg-white">
          <div className="mt-1 flex">
            <div className="image-container ml-1">
              <img
                className="eventImage"
                src={require("../eventImg/jvm.jpg")}
                alt="picture"
              />
            </div>
            <div className="divContainer ml-5 flex justify-between">
              <div className="contentContainer">
                <h3 className="title text-3xl">Java Virtual Machine</h3>
                <p className="mt-2 text-justify">
                  La machine virtuelle Java (JVM) est un moteur d'interprétation
                  chargé de l'exécution du pseudo-code binaire dans un programme
                  compilé Java. Elle convertit les byte codes Java en
                  instructions natives de la machine hôte.
                </p>
              </div>
              <div>
                <img
                  style={{ cursor: "pointer" }}
                  className="favoris"
                  src={require("../eventImg/étoile-unchecked.png")}
                  alt=""
                />
                <img
                  style={{ cursor: "pointer" }}
                  className="delete"
                  src={require("../eventImg/poubelle-unchecked.png")}
                  alt=""
                />
                <img
                  style={{ cursor: "pointer" }}
                  className="like"
                  src={require("../eventImg/like-unchecked.png")}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

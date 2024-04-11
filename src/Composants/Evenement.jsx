import React from "react";
import "../style/Event.css";
import data from "./eventData";
import eventComponent from "./eventComponent";

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
      try {
        let deletedEvent = clickedElement.parentElement.parentElement.parentElement.parentElement;
        deletedEvent.parentElement.removeChild(deletedEvent);
      }catch(TypeError ) {
         console.log(TypeError);
      }
      
    }
  });

  return (
    <div className="container1 flex justify-center scroll-m-14">
      <div className="subContainer mt-5">

        {data.map(eventComponent)}
        
      </div>
    </div>
  );
}

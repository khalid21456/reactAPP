import React from "react";
import "../style/Event.css";

export default function Evenement() {

    // function deleteP() {
    //     let deleteImages = document.getElementById("delete");
    //     deleteImages.src = require("../eventImg/poubelle-checked.png")
    // }

    // function deleteB() {
    //     let deleteImages = document.getElementById("delete");
    //     deleteImages.src = require("../eventImg/poubelle-unchecked.png")
    // }

    document.addEventListener("mousemove", function(event) {
        var hoveredElement = event.target;
        if(hoveredElement.className == "delete") {
            hoveredElement.src = require("../eventImg/poubelle-checked.png")
        }else {
            var imgs = document.querySelectorAll(".delete")
            imgs.forEach((element) => {
                element.src = require("../eventImg/poubelle-unchecked.png")
            })
        }
      });

    //   onMouseLeave={deleteB} onMouseOver={deleteP}
  return (
    <div className="container1 flex justify-center scroll-m-14">
      <div className="subContainer mt-5">
        <div className="post border border-gray-400 shadow-sm rounded-sm bg-white">
            <div className="mt-1 flex">
                <div className="image-container ml-1">
                    <img className="eventImage" src="https://liu.se/dfsmedia/dd35e243dfb7406993c1815aaf88a675/78518-50065/ai-genererad-bild-av-sara-laathen-till-en-av-ai-sidornas-toppbild?as=1&w=640&h=360&cr=1&crw=640&crh=360&bc=%23ffffff" alt="picture"/>
                </div>
                <div className="divContainer ml-5 flex justify-between">
                    <div className="contentContainer">
                        <h3 className="text-4xl">Titre</h3>
                        <p className="mt-2">Description</p>
                    </div>
                    <div>
                        <img style={{cursor : "pointer"}} className="delete" src={require("../eventImg/poubelle-unchecked.png")} alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div className="post border border-gray-400 shadow-sm rounded-sm bg-white">

        </div>
        <div className="post border border-gray-400 shadow-sm rounded-sm bg-white">

        </div>
        <div className="post border border-gray-400 shadow-sm rounded-sm bg-white">

        </div>
      </div>
    </div>
  );
}

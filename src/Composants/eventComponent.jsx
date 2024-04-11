import React from "react";

export default function eventComponent(props) {
    return (
        <div className="post border border-gray-400 shadow-sm rounded-sm bg-white">
          <div className="mt-1 flex">
            <div className="image-container ml-1">
              <img
                className="eventImage"
                src={props.image}
                alt="picture"
              />
            </div>
            <div className="divContainer ml-5 flex justify-between">
              <div className="contentContainer">
                <h3 className="title text-3xl">{props.title}</h3>
                <p className="mt-2 text-justify">
                  {props.description}
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
    )
}
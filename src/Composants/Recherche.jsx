import react from "react"
import "../style/Recherche.css"
import CardRech from "./cardRech"

function Recherche() {
    return(
        <div>
            <div className="grid grid-rows-2 grid-flow-col gap-4  justify-evenly h-auto pt-6">
                <CardRech/>
                <div className="h-60 w-60 bg-white shadow-md rounded-md">
                  
                </div>
                <div className="h-60 w-60 bg-white shadow-md rounded-md">
                  
                </div>
                <div className="h-60 w-60 bg-white shadow-md rounded-md">

                </div>
                <div className="h-60 w-60 bg-white shadow-md rounded-md">
              
                </div>
                <div className="h-60 w-60 bg-white shadow-md rounded-md">

                </div>
            </div>
        </div>
    )
}

export default Recherche
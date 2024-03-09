import { IconDefinition, faFolder } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";


type State = {
    stateText: string,
    count: number, 
    icon: IconDefinition
}
export default function BoxState(stateType: State){

        const  [numberState, setNumber] = useState(0);

           useEffect(() => {
                const interval = setInterval(() => {    
                    setNumber(prev => {
                            if (prev === stateType.count) {
                                clearInterval(interval);
                            }else {
                                
                            }
                            return ((prev + 1))
                    })
                }, 0.1)

                return () => clearInterval(interval)
           }, [], )
           
 

    return (<>
                 <div className=" w-72 h-28 bg-white rounded-xl flex flex-row justify-between p-3 relative">
                            <div>
                            <FontAwesomeIcon icon={stateType.icon} className="text-blue-400 text-5xl absolute border p-3 bg-white outline outline-8 outline-slate-200 rounded-full border-slate -top-4 -left-4" />
                            </div>
                            <div className="w-full flex flex-col justify-start items-center">
                                <div className="flex flex-col ml-3">
                                    <h4 className="text-4xl laila-bold text-gray-700">
                                       {numberState - 1}
                                        </h4>
                                    <p className="text-md text-gray-400">{stateType.stateText}</p>
                                </div>
                            </div>
                        </div>

    </>)
}
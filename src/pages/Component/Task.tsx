import { faEdit, faMessage, faTrashAlt, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Badge from "./badge.tsx";

type task = {
    name: string, 
    project: string
}

export default function Task (prop: task) {

    const [showBox, setShowBox] = useState(false) 

    function handlechangeShowBox(){
        setShowBox(!showBox)

    }
   

    return (<>
    
    <li  className="w-full min-h-20 flex flex-row items-start px-4 bg-white border border-slate-200 rounded-lg relative">
                    <div className="w-1/3 min-h-20 flex flex-col justify-center items-start">
                        <span className="px-2 border border-slate-400 bg-slate-200 rounded-full text-xs">{prop.project}</span>
                        <ul className="w-full flex flex-row gap-3 text-white text-xs items-start">
                        </ul>
                        <p className="pt-2">{prop.name}</p>
                    </div>
                    <div className="w-1/3  min-h-20 relative flex flex-row items-center justify-center ">
                        <img  className="w-10 h-10 rounded-full object-cover z-30" alt="profil" src="https://media.istockphoto.com/id/1309328823/fr/photo/verticale-headshot-de-lemploy%C3%A9-masculin-de-sourire-dans-le-bureau.jpg?s=612x612&w=0&k=20&c=hCqYTwKfIW4Fp6_j_P-p8kMXB4b0H3mrajayCBd7JJw=" />
                        <img  className="w-10 h-10 rounded-full object-cover z-20 -ml-2" alt="profil" src="https://cdn11.bigcommerce.com/s-1tqjsol232/images/stencil/572x572/products/954/11299/M103AfroNL___69028.1662751493.jpg?c=1" />
                        <img  className="w-10 h-10 rounded-full object-cover z-10 -ml-2" alt="profil" src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1LzM2OC1tai0yNTE2LTAyLmpwZw.jpg" />
                        <span className="w-10 h-10 rounded-full z-0 -ml-2 border border-slate-200 flex justify-center items-center text-xs bg-slate-200 font-mono">
                            +23
                        </span>
                        </div>
                    <div className="w-1/3  min-h-20 relative flex justify-end gap-20 items-center">
                        <div className="flex flex-col items-end">
                            <span className="text-slate-400 laila-regular text-xs">45%</span>
                        <progress value={45} max={100} className="bg-slate-300 text-green-400 rounded-full h-1 w-20" ></progress>
                        </div>
                        <p className="text-center rounded-full font-bold tracking-widest text-lg align-middle mr-4 cursor-pointer flex justify-center items-center" onClick={handlechangeShowBox}><span>...</span></p>
                        {showBox && (<div className="min-w-64 min-h-24 bg-white shadow-lg shadow-gray-300 z-20 absolute top-14 right-4 border border-slate-200 rounded-lg">
                                <ul className="w-full h-full divide-y divide-slate-300 p-3 flex flex-col gap-3">
                                    <li className="flex flex-row gap-4 items-center p-2 cursor-pointer hover:bg-slate-300 rounded-b-lg">
                                        <FontAwesomeIcon icon={faEdit} />
                                        <span>Edit</span>
                                    </li>
                                    
                                    <li className="flex flex-row items-center gap-4 p-2  cursor-pointer hover:bg-slate-300 rounded-b-lg">
                                        <FontAwesomeIcon icon={faMessage} />
                                        <span>Discucsion</span>
                                    </li>

                                    <li className="flex flex-row items-center gap-4 p-2 text-red-500 cursor-pointer hover:bg-slate-300 rounded-b-lg">
                                        <FontAwesomeIcon icon={faTrashCan} />
                                        <span>Delete</span>
                                    </li>
                                    
                                </ul>
                        </div>)}
                    </div>
                    </li>
    
    </>)
}
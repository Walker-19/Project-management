import { faSearch, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { MouseEventHandler } from "react";

type TeamAdd = {
    showbox: MouseEventHandler
}



export default function TeamsAdd(team: TeamAdd){


    return (<>
            <div className={`w-full h-60 bg-white  p-6 shadow-2xl shadow-gray-300 border border-slate-300 absolute z-10 top-30 rounded-2xl`}>
                                        <FontAwesomeIcon icon={faXmark} className="absolute right-3 top-2 text-sky-900 cursor-pointer" onClick={team.showbox}/>
                                        <p className="text-start font-bold laila-semibold w-full ">Teams</p>

                                            <div className="w-full h-10 rounded-xl border border-gray-300  relative">
                                                <input type="text" className="border-none w-full bg-slate-200/35 h-full focus:ring-0 text-center laila-semibold" placeholder="Enter a UID user or email" />
                                                <FontAwesomeIcon icon={faSearch}  className="absolute right-5 top-3"/>
                                            </div>
                                    </div>
    
    </>)
}
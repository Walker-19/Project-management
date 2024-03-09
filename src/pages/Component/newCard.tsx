import { faArrowRight, faClipboardCheck, faClipboardList, faClockRotateLeft, faHourglassStart, faLink, faMessage, faTasks, faTimeline, faTimes, faTimesRectangle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
type projet = {
    name: string,
    begining: string,
    deadline: string
}
export default function NewCard(p: projet){
    return(<>
    
            <div className="w-64 h-80 bg-white rounded-lg relative border border-slate-400 overflow-hidden">
                    <div className="h-1/2 w-full relative bg-white rounded-b-3xl z-0">
                        <img src="https://preview.redd.it/backgrounds-for-google-meets-v0-8ryxwhpd3bna1.png?width=1568&format=png&auto=webp&s=3eb6f218a5f8da0831249a615767c0c944ca17d5" className="w-full h-full object-cover absolute z-10 blur-sm hover:blur-0" alt="" />
                        <p className=" z-10 m-2 px-2 bg-slate-500 border border-slate-900 rounded-full text-white laila-bold absolute text-xs">{p.name}</p>
                        <img src="https://cdn11.bigcommerce.com/s-1tqjsol232/images/stencil/572x572/products/954/11299/M103AfroNL___69028.1662751493.jpg?c=1" className="w-14 h-14 rounded-full absolute  outline outline-offset-1 outline-4 z-20 outline-white -bottom-4 inset-x-24 border-2 border-slate-400" alt="" />
                    </div>
                    <div className="py-5 h-1/2 flex flex-col justify-between">
                        <div className="w-full flex justify-start mt-1 flex-col items-center gap-2">
                            <div className="w-full flex flex-row justify-around">
                                <div className="relative">
                                    <span className="text-xs text-slate-500 w-4 h-4 font-bold absolute top-3 left-3 shadow-xl shadow-gray-400 bg-white rounded-full ">34</span>
                                    <FontAwesomeIcon icon={faMessage} className="text-slate-400" /> <span className="text-xs text-slate-500 ml-2">Comments</span>
                                </div>
                                <div className="relative">
                                <span className="text-xs text-slate-500 w-4 h-4 font-bold absolute top-4 left-1 shadow-xl shadow-gray-400 bg-white rounded-full ">34</span>
                                    <FontAwesomeIcon icon={faClipboardList} className="text-slate-400" /> <span className="text-xs text-slate-500 ml-2">Tasks</span>
                                </div>

                            </div>
                                
                        
                         </div>
                         <div className="w-full flex flex-row items-end px-4 h-full">
                            <div className="w-full flex flex-row justify-center">
                            <img  className="w-10 h-10 rounded-full object-cover z-30" alt="profil" src="https://media.istockphoto.com/id/1309328823/fr/photo/verticale-headshot-de-lemploy%C3%A9-masculin-de-sourire-dans-le-bureau.jpg?s=612x612&w=0&k=20&c=hCqYTwKfIW4Fp6_j_P-p8kMXB4b0H3mrajayCBd7JJw=" />
                        <img  className="w-10 h-10 rounded-full object-cover z-20 -ml-2" alt="profil" src="https://cdn.uc.assets.prezly.com/5e4ea29f-5853-4d7a-b003-03b7cf023489/MA22_20210407_KIBURI-0816-8.jpg" />
                        <img  className="w-10 h-10 rounded-full object-cover z-10 -ml-2" alt="profil" src="https://img.freepik.com/photos-premium/femme-africaine-professionnelle_1035907-6.jpg?w=2000" />
                        <span className="w-10 h-10 rounded-full z-0 -ml-2 border border-slate-200 flex justify-center items-center text-xs bg-slate-200 font-mono">
                            +23
                        </span>
                            </div>
                        </div>
                        </div>
                        

                    </div>
            
    </>)
}
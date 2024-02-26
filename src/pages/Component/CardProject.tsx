import React from "react";

import { faCalendarAlt, faCalendarDay, faCalendarDays, faClockFour, faHashtag } from "@fortawesome/free-solid-svg-icons";
import Tag from "./Tag.tsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type propProjet = {
    name: string;
    time: string
}
export default function CardProject(projet: propProjet){

    

    return (<>
    
            <div className="w-80 h-72 rounded-xl  bg-white text-black overflow-hidden">
                <div className="w-full h-1/2 bg-white/70 bg-{} bg-center object-cover flex flex-col gap-4 justify-around  backdrop-blur-2xl bg-yellow-100/1">
                    <div className="flex flex-col p-5 backdrop-blur-sm">
                    <p className="text-start font-bold font-popone text-2xl"> {projet.name}</p>
                    <ul className="mt-5 w-full flex flex-row overflow-auto gap-1">
                        <Tag name="web design" icon={faHashtag} sizeIcon="xs"  />
                        <Tag name="web design" icon={faHashtag} sizeIcon="xs" />
                        <Tag name="web design" icon={faHashtag} sizeIcon="xs" />
                    </ul>

                    </div>
                </div>
                <div className="w-full h-1/2 flex flex-col pb-10 justify-between px-2 bg-white text-black rounded-tr-2xl rounded-tl-2xl p-4 shadow-2xl shadow-slate-600">
                    <ul className="w-full grid grid-cols-2 px-5 divide-x">
                        <li className="flex justify-start">
                            <FontAwesomeIcon icon={faCalendarDays} /> <span className="text-xs ml-1 font-thin">20 Feb</span>
                        </li>
                        <li className="flex justify-end">
                            <FontAwesomeIcon icon={faClockFour} /> <span className="text-xs ml-1 font-thin"> 6 Hours </span>
                        </li>
                    </ul>

                    <div className="w-full bg-gradient-to-br from-transparent">
                        <ul>
                            <li className="flex flex-row relative">
                            <img src="https://pics.craiyon.com/2023-07-27/5d8efad564fd4289b59f45ab5e1d21a3.webp" className='w-7 h-7 rounded-full' alt="" />
                        <img src="https://byaaronwallace.com/cdn/shop/articles/Screenshot_2022-03-23_085734_ac4d2f2d-8bd7-46c9-9ea9-e3d602f64e6a_600x600_crop_center.png?v=1648041655" className='w-7 h-7 rounded-full absolute left-5' alt="" />

                            </li>
                            <li></li>
                          
                        </ul>
                    </div>
                </div>
            </div>
    </>)
}
import { IconProp } from "@fortawesome/fontawesome-svg-core";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { MouseEventHandler } from "react";

type menuBar = {
    name : string,
    icon: IconProp
    click: MouseEventHandler
}



export default function TopMenu(menu: menuBar){
    return (<>
    
                    <li className="border border-slate-200 p-2 rounded-full cursor-pointer hover:bg-slate-400 hover:text-white" onClick={ menu.click}>
                                <FontAwesomeIcon icon={menu.icon} className="mx-2" />
                                <span className="text-sm">{menu.name}</span>
                            </li>
    </>)
}
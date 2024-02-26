import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faMinus } from "@fortawesome/free-solid-svg-icons";
import React, { MouseEventHandler, useRef, useState } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type Menu = {
        name: String;
        icon: IconProp;
        subMenu: string[] | null;
        isSbumenu: boolean,
        active: boolean,
        onItem: MouseEventHandler
            
        }



export default function MenuDashboard(menu: Menu){
    const [isOpen, setOpen] = useState(false)
      function  handleOpenSubMenu () {
      setOpen(!isOpen);
        
    }
    const [isPage, setPage] = useState(false);

const changePage = () =>{
    setPage(!isPage)
}

    return (<>
            <li className="p-3 mx-4  rounded-lg flex flex-col gap-3 items-center justify-start text-slate-500 relative cursor-pointer" style={menu.active ? {'color': "black"}: {animation: "both"}} onClick={menu.onItem}>
                    <div className="w-full flex flex-row justify-start items-center p-2" onClick={handleOpenSubMenu} >
                    <FontAwesomeIcon icon={menu.icon} className="" size="lg" />
                    <span className="pl-3 font-semibold text-sm">{menu.name}</span>
                    {menu.isSbumenu && (<FontAwesomeIcon icon={isOpen ? faMinus: faAdd } className="bg-slate-300 p-1 w-3 h-3 text-slate-700 rounded-full absolute right-0 transition-all"/>)}
                    </div>
                    {menu.isSbumenu && (isOpen && (<div className="w-full rounded-es-lg p-2 border-l border-slate-400 transition-all" >
                        <ul className="flex flex-col justify-start items-start gap-2 text-sm">
                        
                        </ul>
                    </div>))}
                </li>
    
    </>)    
}
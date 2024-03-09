import React, { useState } from "react";
import MenuDashboard from "../Component/MenuDashboard.tsx";
import { faHouse, faFolderTree, faListCheck, faFolder, faFolderBlank, faFolderClosed, faFolderMinus, faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import NewCard from "../Component/newCard.tsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BoxState from "../Component/BoxStateProject.tsx";

export default function Project(){
    
    const [active, setActive] = useState({
        activeHome: true,
        activeProject: false,
        activeTask: false 
    });
   function PageHome (){
    setActive({
        activeHome: true,
        activeProject: false,
        activeTask: false
    })
   }
   function PageProject (){
    setActive({
        activeHome: false,
        activeProject: true,
        activeTask: false
    })
    
   }
   function PageTask (){
    setActive({
        activeHome: false,
        activeProject: false,
        activeTask: true
    })
}
    
    return(<>
            <div className="w-full h-screen bg-gray-200 flex flex-row justify-between">
            <div className="w-80 h-screen bg-white border-r-2 border-slate-300 overflow-hidden">
                    <header className="p-7 font-popone m-2">
                        <p className="text-2xl font-bold">TaskManager</p>
                    </header>
                    <main className="mt-12 overflow-y-auto h-full">
                        <ul className="flex flex-col gap-5">
                          <MenuDashboard name={'Home'} path="/pages/Dashboard" icon={faHouse} isSbumenu={false} subMenu={null} active={active.activeHome} onItem={PageHome} />
                            <MenuDashboard name={'Project'} path="/pages/Dashboard/Project" icon={faFolderTree} isSbumenu={true} subMenu={null} active={active.activeProject} onItem={PageProject}  />
                            <MenuDashboard name={'Task'} path="/pages/Dashboard/Task    " icon={faListCheck} subMenu={null} isSbumenu={true} active= {active.activeTask} onItem={PageTask} />
                        </ul>
                    </main>
                </div>
                <div className="w-full h-screen p-5 flex flex-col">
                    <div className="w-full flex flex-row justify-around gap-4">
                        <BoxState  count={12} stateText="Active Project" icon={faFolderClosed}/>
                       <BoxState count={32} stateText="Completed"  icon={faFolderOpen}/>

                    </div>
                    <div className="mt-6">
                    <NewCard name="MettApp" begining="23/06/2004" deadline="22/09/2024" />
                    </div>
                </div>
            </div>
    
    </>)
}

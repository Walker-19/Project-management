import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faFolderTree,  faListCheck, faBell, faCirclePlus, faArrowRight} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import React from "react";
import MenuDashboard from "../Component/MenuDashboard.tsx";
import TopMenu from "../Component/menubar.tsx";
import CardProject from "../Component/CardProject.tsx";


import ModalProject from "../Component/ModalProject.tsx";
import TabContent from "../Component/TabContent.tsx";
import NotificationBox from "../Component/Notification.tsx";
import ListTask from "../Component/TabTask.tsx";
import { projet, tags } from "../../Model/Functions/base.tsx";
export default function Home(){
    // const location = useLocation();
    // const user = location.state.user;    
    // console.log(user);
        const [value, setValue] = useState ({
            nameProject: '',

        })

        const [openModal, setOpenModal] = useState({
            modalProject: false,
            modalNotification: false
        }) 


        function setModal(name: string){
            name === 'project' ? setOpenModal({modalProject: !openModal.modalProject, modalNotification: false}) : setOpenModal({modalNotification: !openModal.modalNotification, modalProject: false})
        }


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
const sliceProject = projet.slice(0,3);
      
  

    return (<>
        
            <div className="w-full h-screen bg-red-700 flex flex-row">
                <div className="w-80 h-screen bg-white border-r-2 border-slate-300 overflow-hidden">
                    <header className="p-7 font-popone m-2">
                        <p className="text-2xl font-bold">TaskManager</p>
                    </header>
                    <main className="mt-12 overflow-y-auto h-full">
                        <ul className="flex flex-col gap-5">
                          <MenuDashboard name={'Home'} path="/pages/Dashboard" icon={faHouse} isSbumenu={false} subMenu={null} active={active.activeHome} onItem={PageHome} />
                            <MenuDashboard name={'Project'} path="/pages/Dashboard/Project" icon={faFolderTree} isSbumenu={true} subMenu={null} active={active.activeProject} onItem={PageProject}  />
                            <MenuDashboard name={'Task'} path="/pages/Dashboard/Task" icon={faListCheck} subMenu={null} isSbumenu={true} active= {active.activeTask} onItem={PageTask} />
                        </ul>
                    </main>
                </div>
                <div className="bg-slate-200 w-full relative p-2 overflow-y-auto">
                    <ModalProject open={openModal.modalProject} close={() => setModal('project')}/>
                        <div className="w-full relative flex flex-row justify-between ">
                            <TabContent /> 
                            <div className="w-1/2 m-4 flex justify-center items-center">
                                <div className="w-1/2">
                                </div>
                                    <div className=" w-1/2 flex justify-end items-center">
                                     
                                    </div>
                                <div></div>
                            </div>
                        <div className="w-max h-12 p-2 bg-white  absolute right-0 mt-2 mr-2 rounded-full flex justify-between items-center ">
                        <ul className="flex flex-row gap-2 relative">
                            <TopMenu name="create project" icon={faCirclePlus} click={() => setModal('project') } />
                            <TopMenu name="Notification" icon={faBell} click={() => setModal('') }    />
                            <NotificationBox isopen={openModal.modalNotification} />
                        </ul>
                        <img src="https://img.freepik.com/photos-gratuite/portrait-homme-s-amusant_23-2149443790.jpg" className="w-10 h-10 object-cover rounded-full relative p-1" alt="" />
                    </div>
                        </div>
                    
                    <div className="w-full flex flex-row mt-10 justify-start items-center p-5 gap-2">
                    {sliceProject.map((item, index) => (
                        
                            <CardProject name={item} time={''} key={index} />
                    ))}
                    <div className="w-max px-5 py-1 rounded-full h-max bg-white flex justify-center items-center relative cursor-pointer hover:bg-slate-300">
                        <span className="text-md font-bold font-nunito w-full h-full flex justify-center items-center">All
                            <FontAwesomeIcon  icon={faArrowRight} className="text-white mx-2 p-1 bg-purple-800 rounded-full absolute border-4 border-s-slate-200 -right-6 -rotate-45"/>
                        </span>
                    </div>
                    </div>
                    <ListTask />
                </div>
            </div>
        
        
        </>)
}
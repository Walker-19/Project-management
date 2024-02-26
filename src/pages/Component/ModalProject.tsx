
import { faAdd, faClose, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import React, { MouseEventHandler, useState } from "react";
import TaskList from "./TaskList.tsx";


type propModal = {
    open: boolean
    close: MouseEventHandler
    // name: string,
    // debut: DateConstructor | null
    // fin: DateConstructor | null
}


export default function ModalProject(open: propModal){

        const [value, setValue] =  useState({
            nameProjet : "",
            dtDebut: "",
            dtFin: "",
            openTask: false
        })

        const [tasks, setTask] =  useState<string[]>([])

        const [showassign, setshowAssign] =  useState(false)
        // ================================================================================

            const setProjet = (propertyname, Newvalue) => {
                if (propertyname === 'nameProjet') {
                    setValue(prevValue => ({
                        ...prevValue, [propertyname]: Newvalue })
                    )
                }
                else if (propertyname === 'dtDebut') {
                    setValue(prevValue => ({
                        ...prevValue, [propertyname]: Newvalue })
                    )
                        
                }
                else {
                    setValue(prevValue => ({
                        ...prevValue, [propertyname]: Newvalue })
                    )
                }
            }
            const {nameProjet, dtDebut, dtFin} = value;
            // console.log(nameProjet, dtDebut, dtFin)


            // Function AddProject an AddTask

                const saveTask = (e) => {
                    e.preventDefault()
                    const nameTask: string = e.target.nameTask.value;
                    console.log(nameTask);
                    setTask([...tasks, nameTask]);
                    console.log(tasks);
                }

                    // Function Close Task
                   const CloseTask = (e) => {
                       setValue(preValue => ({
                           ...preValue,
                           openTask: false
                        }))
                        e.stopPropagation();
                    }

                
                    const setAssign = () => {
                        setshowAssign(!showassign)
                    }

        
    return (<>
        {open.open && (
        <motion.div 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration:0.2, type: 'tween', bounce: 0.2 }}
        
        
        className="w-full h-screen bg-gradient-to-t from-sky-500/15 rounded-lg via-cyan-500/10 to-purple-600/15 backdrop-blur-xl absolute flex justify-center items-center z-10">
            <div className="w-modal rounded-xl h-modal relative bg-white overflow-hidden flex flex-col after:content[''] after:w-full after:h-full after:-inset-10 after:-z-20  after:bg-gradient-to-br after:from-pink-600 after:to-blue-600 after:absolute" onClick={(e) => CloseTask}>
                        <div className="w-full p-2 flex flex-row justify-start relative">
                            <h5 className="laila-light">Projet ~ <span className={`font-bold underline ${nameProjet === '' ? 'decoration-red-600' : 'decoration-blue-400'} `}>{nameProjet === '' ? 'Undifined': nameProjet}</span> </h5>
                          <span className="absolute right-2 laila-semibold bg-red-500 text-white px-2 py-1 rounded-lg flex flex-row justify-center items-center cursor-pointer" onClick={open.close}><FontAwesomeIcon icon={faXmark}  className="rounded-2xl border border-white w-5 h-5 mr-1"/> Annuler </span>  
                        </div>
                    <div className="w-full h-full flex flex-row">
                    <form action="" className={`w-1/2 h-full flex flex-col justify-start px-10 py-7  border-r border-r-slate-300`} >
                        <div className="w-full h-full flex flex-row justify-between">
                            <div className="w-full h-full flex justify-start gap-10 flex-col  p-2">
                            <label htmlFor="name" className="flex flex-col items-start w-full">
                                <span className="laila-semibold">Nom : <span className="text-red-400 text-lg font-bold">*</span> </span>
                                <input type="text" name="name" value={nameProjet} id="" placeholder="entrer le nom du projet" onChange={(e) => setProjet('nameProjet', e.target.value) } className="rounded-lg w-full laila-light"/>
                            </label>

                                <div className="w-full flex flex-row gap-10">
                                    <label htmlFor="dtdebut" className="w-1/2 flex items-start flex-col">
                                    <span className="laila-semibold">Début : <span className="text-red-400 text-lg font-bold">*</span> </span>
                                        <input type="date" name="dtdebut" value={dtDebut} onChange={(e) => setProjet("dtDebut", e.target.value)} className="w-full rounded-lg laila-light" />
                                    </label>
                                    <label htmlFor="dtfin" className="w-1/2 flex items-start flex-col">
                                    <span className="laila-semibold">Fin: <span className="text-red-400 text-lg font-bold">*</span> </span>
                                        <input type="date" name="dtfin" value={dtFin} className="rounded-lg w-full laila-light" onChange={(e) =>  setProjet('dtFin', e.target.value)} />
                                    </label>
                                </div>
                              
                            </div>
                        </div>
                    </form>
              
              <div className="w-1/2 h-full flex items-start relative px-4 flex-col p-2">
                    <button className={`${value.openTask ? 'bg-red-500 text-white': 'text-green-500'} font-nunito font-bold text-sm transition-colors dura w-max h-max rounded-xl overflow-hidden p-1 px-2 duration-150`} onClick={(e) => {  e.stopPropagation();   setValue(prevValue => ({...value, openTask: !prevValue.openTask}))}} > { value.openTask ?  <FontAwesomeIcon icon={faClose} className="mr-1" /> : <FontAwesomeIcon icon={faAdd} />} {value.openTask ?  "": "Add Task"}</button>
                    <div className={`w-full h-full p-4 absolute top-10 left-8 ${value.openTask ? '': 'hidden'}`}>
                                <div className="w-full h-full flex justify-start relative ">
                                    <div className="w-96 h-44 overflow-hidden bg-white shadow-2xl shadow-gray-300 rounded-2xl z-30">
                                            <h5 className="laila-bold w-full p-1 bg-slate-300/45">Task</h5>
                                        <form action="" className="w-full h-full flex flex-col gap-6" onSubmit={(e) => saveTask(e)} >
                                            <label htmlFor="name" className="w-full flex flex-col px-4 items-start ">
                                                <span className="laila-semibold ">Name</span>
                                                <input type="text" name="nameTask" className="w-full laila-light h-7 focus:ring-sky-200/40 border-slate rounded-full"/>
                                            </label>
                                            <div className="w-full flex justify-center">
                                                <button className="text-lg max-w-max text-white bg-black/90 laila-semibold px-2 rounded-md"  >Save</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-full backdrop-blur-3xl bg-white/40 rounded-lg py-10 overflow-hidden overflow-y-auto">

                                    <div className={`w-full h-60 bg-white  p-2 shadow-2xl shadow-gray-300 border border-slate-300 absolute z-10 top-30 rounded-2xl`}>
                                        <p className="text-start font-bold laila-semibold w-full ">Teams</p>
                                    </div>

                                            <p className="w-full  rounded-lg text-2xl font-bold laila-bold underline backdrop-blur-2xl  text-start p-3 sticky top-0">Task</p>
                                             
                                             <ul className="w-full flex items-start flex-col gap-4">
                                                    <TaskList  list={tasks} assign={setAssign}/>
                                             </ul>
                            </div>
                    
              </div>
                    </div>
          
             
                
                 </div>
        </motion.div>


        )}
    </>
    
    )
}
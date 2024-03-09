import { motion } from "framer-motion";
import React from "react";

import Task from "./Task.tsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { projet, task } from "../../Model/Functions/base.tsx";

export default function ListTask (){
    return (<>
            <motion.div
                initial={{y: -10, opacity: 0}}
                animate={{y: 0, opacity:1}}
                transition={{duration: 0.3}}
            
            className="w-full rounded-xl bg-white flex flex-col overflow-auto ">
                <div className="w-full relative min-h-14">
                <p className="absolute laila-bold -top-3 -left-2 p-2 bg-purple-700 text-white rounded-2xl border-8 border-slate-200">Your Task Today</p>
                <p className="absolute right-10 top-4 text-green-400 font-semibold"><FontAwesomeIcon icon={faAdd} /> Add new</p>
                </div>
                    <ul className="w-full h-60 flex flex-col gap-3 px-2 py-2 mt-1 overflow-y-auto">
                            {task.map((items, index) => (
                                <Task name={items} project={projet[index]} />
                            ))}
                    </ul>
            </motion.div>
    </>)
}
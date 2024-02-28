import { faDeleteLeft, faTrashAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { MouseEventHandler } from "react"

type ListTask = {
    list: string[]
    assign: MouseEventHandler
}



export default function TaskList(list: ListTask){
    


    return (<>

    {list.list.map((nameTask, index) => (
        <li key={index} className="w-full min-h-20 flex flex-row items-start px-4 laila-semibold bg-white border border-slate-200 rounded-lg relative">
                    <div className="w-1/2 gap-2 min-h-20 flex flex-col items-start">
                        <span className="pt-2">
                            {nameTask}
                        </span>
                        <img src="https://img.freepik.com/photos-gratuite/portrait-homme-s-amusant_23-2149443790.jpg" className='w-8 h-8 rounded-full object-cover' alt=""   />
                    </div>
                    <div className="w-1/2  min-h-20 relative flex justify-end items-center">
                        <FontAwesomeIcon icon={faTrashAlt} className="absolute cursor-pointer w-4 h-4  -top-4 bg-white hover:bg-red-200 border-4 border-white -right-5 p-2 rounded-full" />
                        <button className="w-max h-max p-1 text-white bg-green-600 rounded-lg text-sm mt-3 font-mono" onClick={list.assign}>Assign</button>
                    </div>
        </li>
    ))}
    </>)
}
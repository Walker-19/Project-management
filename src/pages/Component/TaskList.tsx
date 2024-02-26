import React, { MouseEventHandler } from "react"

type ListTask = {
    list: string[]
    assign: MouseEventHandler
}



export default function TaskList(list: ListTask){
    


    return (<>

    {list.list.map((nameTask, index) => (
        <li key={index} className="w-full py-4 flex flex-row items-start px-4 laila-semibold bg-white border border-slate-200 rounded-lg">
                    <div className="w-1/2 h-full flex flex-col items-start gap-2">
                    <span>{nameTask}</span>
                    <img src="https://img.freepik.com/photos-gratuite/portrait-homme-s-amusant_23-2149443790.jpg" className='w-8 h-8 rounded-full object-cover' alt=""   />
                    </div>
                    <div className="w-1/2 h-full flex justify-end items-center relative">
                                    <button className="w-max h-max p-2 bg-green-500/90 text-black font-semibold rounded-2xl text-xs" onClick={() => list.assign}>Assign</button>
                    </div>
        </li>
    ))}
    </>)
}
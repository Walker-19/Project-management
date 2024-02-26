import { faCheck,  faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import React, { useState } from "react";


type notification = {
    isopen: boolean
}


export default function NotificationBox(isopen: notification){

    const [selectedItem, setSelectedItem] = useState(0) 

    function handleClick(index){
        setSelectedItem(index)
        console.log(selectedItem)
    }
    const item = ["All", "Team", "Message"]



    

    return (<>
    {isopen.isopen && (
        <motion.div
        initial={{opacity: 0, y: -10}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.2}}
        
        
        
        className="w-96 h-96 bg-white  absolute p-3 top-14 right-4 z-20 rounded-xl shadow-xl shadow-gray-300 overflow-hidden flex flex-col justify-between">
                <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                    <ul className="w-full h-full flex justify-between flex-row -mb-px">
                        
                       {item.map((itemName, index) => (
                         <li className={` me-2 inline-block p-4 border-b-2 active border-transparent rounded-t-lg hover:text-gray-600 ${ selectedItem === index ? 'border-blue-600' :'' } cursor-pointer transition-all duration-300`} key={index} onClick={() => handleClick(index)}>{itemName}</li>
                       ))}
                     
                    </ul>
                </div>


                         {selectedItem === 0 ?  (

                <div className="w-ful h-fulll flex-1 h-auto overflow-y-auto col-span-1">
                <ol className="w-full h-full p-2 items-start divide-y ">
                    <li className="w-full flex items-start justify-start py-2 overflow-hidden ">
                        <span className="w-2 h-2 bg-blue-800 rounded-full"></span>
                        <img src="https://imgs.search.brave.com/myrb6wvlVnFgAb0_TUxAj8RAOsrtWunxrIEfoOQ5CHk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQz/NzgxNjg5Ny9mci9w/aG90by9wb3J0cmFp/dC1kZS1mZW1tZS1k/YWZmYWlyZXMtZGUt/Z2VzdGlvbm5haXJl/LW91LWRlLXJlc3Nv/dXJjZXMtaHVtYWlu/ZXMtcG91ci1sYS1y/JUMzJUE5dXNzaXRl/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1jbXdwelJLb01D/UllySENneThvcW9f/TG5KbDdBZmc2dk9K/ckNxd0FYejljPQ" className="max-w-14 min-w-14 h-14 rounded-full object-cover" alt=""  />
                       <div className="flex flex-col justify-start items-start">
                       <span className="font-semibold mx-2 text-xs">Ameli <span className="text-xs text-slate-400">dans </span>WorkSpace</span>  
                       <p className="text-black text-xs ml-2 truncate ... overflow-hidden w-full">
                            Vous avez récuperer la maquette ?  
                       </p>
                       </div>
                       
                       </li>
                    <li className="w-full flex items-start justify-start py-2 overflow-hidden px-2">
                    <span className="w-2 h-2 bg-blue-800 rounded-full"></span>
                        <img src="https://imgs.search.brave.com/M84y_9-YBFNTv6gMtRIvJCS8RNXTVrzsikECiUOFi_Q/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzcwLzlh/L2Q5LzcwOWFkOTFk/MzAwODQwYTExOTk2/NWM2YTJlYWI4M2Jk/LmpwZw" className="min-w-14 max-w-14 h-14 rounded-full object-cover bg-origin-border" alt=""  />
                    <div className="flex flex-col justify-start items-start">
                    <span className="font-semibold mx-2 text-xs">Bryan <span className="text-xs text-gray-400">vous a ajouté a</span> Creative agency</span>  
                            <div  className="w-full m-2">
                                <div className="w-full bg-slate-200 p-1 rounded-xl flex flex-row"> 
                                    <img src="https://imgs.search.brave.com/cY2wvYn2cqlYYG1bc8g_V7tkCf17lvqzftSQVwY3_Pg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzMyLzY3LzU0/LzM2MF9GXzEzMjY3/NTQ1Nl8ySTFUMlFv/MGcxZmQzbzVwVXBQ/djU5UlVyQ0g1c2JX/bC5qcGc" className="w-12 h-12 rounded-full bg-origin-padding object-cover border border-slate-400" alt="" />
                                    <div className="px-1">
                                    <span className="text-xs font-bold">Creative Agency</span>
                                    </div>
                                </div>
                                <div className="w-full flex flex-row justify-center text-xs py-1 gap-5">
                                        <button className="w-max p-1 rounded-md px-2 bg-blue-700 text-white hover:bg-blue-800">
                                            <FontAwesomeIcon icon={faCheck} className="text-xs mr-1" />
                                            Accepter</button>
                                        <button className="w-max p-1 rounded-lg px-2 border border-slate-300 hover:bg-slate-500 hover:text-white">
                                            <FontAwesomeIcon icon={faXmark} className="text-xs mr-1" />
                                            Décliner</button>
                                </div>
                            </div>
                       </div> 
                     </li>

                 
                    
                </ol>
                </div>
) : selectedItem === 1 ? (

    <div className="w-ful h-fulll flex-1 h-auto overflow-y-auto col-span-1">
    <ol className="w-full h-full p-2 items-start divide-y ">
        <li className="w-full flex items-start justify-start py-2 overflow-hidden px-2">
        <span className="w-2 h-2 bg-blue-800 rounded-full"></span>
            <img src="https://imgs.search.brave.com/M84y_9-YBFNTv6gMtRIvJCS8RNXTVrzsikECiUOFi_Q/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzcwLzlh/L2Q5LzcwOWFkOTFk/MzAwODQwYTExOTk2/NWM2YTJlYWI4M2Jk/LmpwZw" className="min-w-14 max-w-14 h-14 rounded-full object-cover bg-origin-border" alt=""  />
        <div className="flex flex-col justify-start items-start">
        <span className="font-semibold mx-2 text-xs">Bryan <span className="text-xs text-gray-400">vous a ajouté a</span> Creative agency</span>  
                <div  className="w-full m-2">
                    <div className="w-full bg-slate-200 p-1 rounded-xl flex flex-row"> 
                        <img src="https://imgs.search.brave.com/cY2wvYn2cqlYYG1bc8g_V7tkCf17lvqzftSQVwY3_Pg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzMyLzY3LzU0/LzM2MF9GXzEzMjY3/NTQ1Nl8ySTFUMlFv/MGcxZmQzbzVwVXBQ/djU5UlVyQ0g1c2JX/bC5qcGc" className="w-12 h-12 rounded-full bg-origin-padding object-cover border border-slate-400" alt="" />
                        <div className="px-1">
                        <span className="text-xs font-bold">Creative Agency</span>
                        </div>
                    </div>
                    <div className="w-full flex flex-row justify-center text-xs py-1 gap-5">
                            <button className="w-max p-1 rounded-md px-2 bg-blue-700 text-white hover:bg-blue-800">
                                <FontAwesomeIcon icon={faCheck} className="text-xs mr-1" />
                                Accepter</button>
                            <button className="w-max p-1 rounded-lg px-2 border border-slate-300 hover:bg-slate-500 hover:text-white">
                                <FontAwesomeIcon icon={faXmark} className="text-xs mr-1" />
                                Décliner</button>
                    </div>
                </div>
           </div> 
         </li>

     
        
    </ol>
    </div>


) : (
        <div className="w-ful h-fulll flex-1 h-auto overflow-y-auto col-span-1">
        <ol className="w-full h-full p-2 items-start divide-y ">
            <li className="w-full flex items-start justify-start py-2 overflow-hidden ">
                <span className="w-2 h-2 bg-blue-800 rounded-full"></span>
                <img src="https://imgs.search.brave.com/myrb6wvlVnFgAb0_TUxAj8RAOsrtWunxrIEfoOQ5CHk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQz/NzgxNjg5Ny9mci9w/aG90by9wb3J0cmFp/dC1kZS1mZW1tZS1k/YWZmYWlyZXMtZGUt/Z2VzdGlvbm5haXJl/LW91LWRlLXJlc3Nv/dXJjZXMtaHVtYWlu/ZXMtcG91ci1sYS1y/JUMzJUE5dXNzaXRl/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1jbXdwelJLb01D/UllySENneThvcW9f/TG5KbDdBZmc2dk9K/ckNxd0FYejljPQ" className="max-w-14 min-w-14 h-14 rounded-full object-cover" alt=""  />
               <div className="flex flex-col justify-start items-start">
               <span className="font-semibold mx-2 text-xs">Ameli <span className="text-xs text-slate-400">dans </span>WorkSpace</span>  
               <p className="text-black text-xs ml-2 truncate ... overflow-hidden w-full">
                    Vous avez récuperer la maquette ?  
               </p>
               </div>
               
               </li>
         
            
        </ol>
        </div>
)}
                <div className="w-full backdrop-blur-xl flex justify-end items-end rounded-xl h-10">
                    <button className="w-24 h-max p-1 bg-blue-600 text-white text-xs font-semibold rounded-md">Voir plus</button>
                </div>
            </motion.div>
)}
    </>)
}
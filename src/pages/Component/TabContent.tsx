import React from "react";
import { getMonth } from "../../Model/Functions/Date.ts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDay } from "@fortawesome/free-solid-svg-icons";

export default function TabContent(){
      // Date
      const date = new Date();
      const day = date.getDate();
      const month_number = date.getMonth()  + 1;
      const month = getMonth(month_number);
      const year = date.getFullYear();
    return (<>
                    <div className="w-full h-11 flex justify-center items-center absolute">
                <div className="w-80 h-16 bg-white rounded-b-full top-0 flex justify-center items-center">
                <span className="mr-2 font-normal text-lg">{day} {month}, {year} </span>  <FontAwesomeIcon icon={faCalendarDay} size="sm" className=""/>
                </div>
                    </div>
    
    </>)
}
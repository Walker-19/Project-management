import React from "react";

type badge = {
    name: string,
    color: string,
}

export default function Badge(badge: badge){

    return (<>
            <span className={`w-max h-max p-1 px-2 rounded-full text-white font-bold ${badge.color}`}>{badge.name}</span>
    </>)
}
import { IconProp, SizeProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type Tag = {
    name: string,
    icon: IconProp
    sizeIcon: SizeProp
}

export default function Tag (tag: Tag){
    return (<>
            <li className="w-40 px-1 rounded-full backdrop-blur-xl bg-white/5 flex flex-row items-center justify-center overflow-hidden">
                <FontAwesomeIcon icon={tag.icon}  className="mx-1" size={tag.sizeIcon}  />
                    <p className="text-ellipsis overflow-hidden whitespace-nowrap text-xs">{tag.name}</p>
            </li>
    </>)
}
"use client";
import React from "react";

interface Props {
    active: boolean;
    title: string;

}

function Index({ active, title }: Props) {

    
    return (
        <button
            className={`${
                active ? "bg-white" : "bg-transparent"
            } w-fit p-3 rounded-sm cursor-pointer`}
        >
            {title}
        </button>
    );
}

export default Index;

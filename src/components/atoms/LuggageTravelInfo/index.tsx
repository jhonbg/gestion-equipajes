"use client";
import React from "react";

interface Props {
    active: boolean;
    title: string;

}

function index({ active, title }: Props) {

    
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

export default index;

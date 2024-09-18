import React from "react";

interface Props {
    active: boolean;
    title: string;
}

function Index({ active, title }: Props) {
    return (
        <span
            className={`${
                active ? "bg-white" : "bg-transparent"
            } w-fit p-3 rounded-sm cursor-pointer`}
        >
            {title}
        </span>
    );
}

export default Index;

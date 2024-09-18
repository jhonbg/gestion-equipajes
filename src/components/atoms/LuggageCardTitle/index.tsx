import React from "react";
import Image, { StaticImageData } from "next/image";

interface Props {
    imageSrc: StaticImageData;
    title: string;
}

function Index({ imageSrc, title }: Props) {
    return (
        <div className="flex gap-2">
            <Image
                src={imageSrc}
                alt="logo de equipaje"
                width={24}
                height={24}
            ></Image>
            {title}
        </div>
    );
}

export default Index;

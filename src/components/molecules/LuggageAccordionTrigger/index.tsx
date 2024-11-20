import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import React from "react";
import Image from "next/image";
import MusicIcon from "../../../../public/reservas-icons/musica.png";

function index() {
    return (
        <Card className="w-full border-none shadow-none m-0">
            <CardHeader className="flex flex-row justify-between">
                <div className="flex flex-row gap-2">
                    <Image
                        src={MusicIcon}
                        alt="bolso"
                        width={44}
                        height={44}
                    ></Image>
                    <div>
                        <CardTitle className="font-bold">
                            Equipaje especial
                        </CardTitle>
                        <CardDescription>
                            Deportivo, musical, audiovisual
                        </CardDescription>
                    </div>
                </div>
            </CardHeader>
        </Card>
    );
}

export default index;

import { Button } from "@/components/ui/button";
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Minus, Plus } from "lucide-react";
import React from "react";

import Image, { StaticImageData } from "next/image";

interface Props {
    title: string;
    description?: string;
    price: string;
    icon: StaticImageData;
}

function Index({ title, description, price, icon }: Props) {
    return (
        <Card className="py-0 my-3">
            <CardHeader className="flex flex-row justify-between">
                <div className="flex flex-row gap-2">
                    <Image
                        src={icon}
                        alt="bolso"
                        width={51}
                        height={51}
                    ></Image>
                    <div>
                        <CardTitle>{title}</CardTitle>
                        <CardDescription className=" text-black">
                            {description}{" "}
                            <span className="font-bold">COP {price}</span>
                        </CardDescription>
                    </div>
                </div>
                <div className="flex gap-1 items-center ">
                    <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full"
                    >
                        <Minus className="h-2 w-2" />
                    </Button>
                    <span>1</span>
                    <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full"
                    >
                        <Plus className="h-2 w-2" />
                    </Button>
                </div>
            </CardHeader>
        </Card>
    );
}

export default Index;

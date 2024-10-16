"use client";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";

import Image, { StaticImageData } from "next/image";

import numeral from "numeral";

interface Props {
    title: string;
    description?: string;
    price: number;
    icon: StaticImageData;
    maxAmount?: number;
    onChange: (value: number) => void;
}

function Index({
    title,
    description,
    price,
    icon,
    maxAmount,
    onChange,
}: Props) {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        if (maxAmount) {
            if (count < maxAmount) {
                setCount(count + 1);
                onChange(count + 1);
            }
        } else {
            setCount(count + 1);
            onChange(count + 1);
        }
    };

    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
            onChange(count - 1);
        }
    };

    const formattedPrice = numeral(price).format('0`000,0.00');


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
                            <span className="font-bold">COP {formattedPrice}</span>
                        </CardDescription>
                    </div>
                </div>
                <div className="flex flex-col gap-1 items-end ">
                    <div className="flex gap-2 items-center">
                        <Button
                            variant="outline"
                            size="icon"
                            className="rounded-full"
                            onClick={handleDecrement}
                        >
                            <Minus className="h-2 w-2" />
                        </Button>
                        <span>{count}</span>
                        <Button
                            variant="outline"
                            size="icon"
                            className="rounded-full"
                            onClick={handleIncrement}
                        >
                            <Plus className="h-2 w-2" />
                        </Button>
                    </div>
                    {maxAmount && (
                        <div className="text-xs text-[#0F172A]">
                            Max {maxAmount}
                        </div>
                    )}
                </div>
            </CardHeader>
        </Card>
    );
}

export default Index;

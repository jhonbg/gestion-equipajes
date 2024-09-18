import React from "react";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import BolsoIcon from "../../../../public/reservas-icons/bolso.png";
import MaletasIcon from "../../../../public/reservas-icons/maletas.png";

interface Props {
    title: string;
    description: string;
    radioLabel: string;
    price?: string;
}

function Index({ title, description, radioLabel, price }: Props) {
    return (
        <Card className="py-0 my-3">
            <CardHeader className="flex gap-3 flex-row">
                <Image
                    src={price ? MaletasIcon : BolsoIcon}
                    alt="bolso"
                    width={46}
                    height={46}
                ></Image>
                <div>
                    <CardTitle className="font-bold">{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                </div>
            </CardHeader>
            <hr />
            <CardContent className="mt-3">
                <RadioGroup>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option-one" id="option-one" />
                        <Label htmlFor="option-one">
                            {radioLabel}
                            {price && <span>{price}</span>}
                        </Label>
                    </div>
                </RadioGroup>
            </CardContent>
        </Card>
    );
}

export default Index;

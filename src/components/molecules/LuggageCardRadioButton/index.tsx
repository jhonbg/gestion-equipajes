"use client";
import React from "react";
import Image from "next/image";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import BolsoIcon from "../../../../public/reservas-icons/bolso.png";
import MaletasIcon from "../../../../public/reservas-icons/maletas.png";
import { FormControl, FormItem, FormLabel } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";

interface Props {
    title: string;
    description: string;
    radioLabel: string;
    price?: number;
    onChange: (value: boolean) => void; // Ajustado para aceptar booleano
    checked: boolean;
}

function LuggageCardRadioButton({
    title,
    description,
    radioLabel,
    price,
    onChange,
    checked,
}: Props) {

    const handleCheckboxChange = (checked: boolean) => {
        onChange(checked);
    };

    return (
        <Card className="py-0 my-3">
            <CardHeader className="flex gap-3 flex-row">
                <Image
                    src={price ? MaletasIcon : BolsoIcon}
                    alt="bolso"
                    width={46}
                    height={46}
                />
                <div>
                    <CardTitle className="font-bold">{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                </div>
            </CardHeader>
            <hr />
            <CardContent className="mt-3">
                {/* En lugar de RadioGroup, directamente el input */}
                <FormItem className="flex items-center space-x-2">
                    <FormControl>
                        <Checkbox
                            id={radioLabel}
                            value={radioLabel}
                            checked={checked}
                            onCheckedChange={handleCheckboxChange}
                        />
                        {/* <input
                            type="radio"  
                            value={radioLabel}
                            checked={checked} 
                            onChange={(e) => onChange(e.target.checked)}  
                            id={radioLabel}
                            className="radio-button"
                        /> */}
                    </FormControl>

                    <FormLabel htmlFor={radioLabel}>
                        {radioLabel}
                        {price && <span> {price}</span>}
                    </FormLabel>
                </FormItem>
            </CardContent>
        </Card>
    );
}

export default LuggageCardRadioButton;

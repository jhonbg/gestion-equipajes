import { Card, CardHeader, CardTitle } from "@/components/ui/card";

import React from "react";

interface Props{
    text1: string;
    text2: string;
}

function Index({text1, text2}: Props) {
    return (
        <Card>
            <CardHeader className="bg-[#F1F5F9] py-1 px-4 rounded-lg ">
                <CardTitle className="text-base">
                    <p>
                        {text1}{" "}
                        <span className="font-bold">{text2}</span>
                    </p>
                </CardTitle>
            </CardHeader>
        </Card>
    );
}

export default Index;

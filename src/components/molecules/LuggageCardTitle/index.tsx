import React from "react";
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import EquipajeIcon from "../../../../public/reservas-icons/equipaje.png";

import LuggageCardTitle from "@/components/atoms/LuggageCardTitle";
import LuggagePassengerInfo from "@/components/atoms/LuggagePassengerInfo";

function Index() {
    return (
        <CardHeader>
            <CardTitle className="flex justify-between text-xl font-semibold">
                <LuggageCardTitle imageSrc={EquipajeIcon} title="Equipaje" />
                <LuggagePassengerInfo passengers="2" />
            </CardTitle>
            <CardDescription className="text-xl">
                Compra tu equipaje
            </CardDescription>
        </CardHeader>
    );
}

export default Index;

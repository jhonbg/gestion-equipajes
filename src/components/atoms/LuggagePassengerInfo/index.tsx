import { Badge } from "@/components/ui/badge";
import React from "react";

interface Props {
    passengers: number;
}
function index({ passengers }: Props) {
    return (
        <Badge className="bg-[#E2E8F0] text-black hover:bg-[#E2E8F0]">
            Pasajero 1 de {passengers}
        </Badge>
    );
}

export default index;
